-- Get a list of all film languages.
SELECT name from public.language;

-- Get a list of all films joined with their languages – 
-- select the following details : film title, description, and language name. 
SELECT public.film.title, public.film.description, public.language.name
FROM public.film
INNER JOIN public.language ON public.film.language_id = public.language.language_id;
-- Try your query with different joins:
-- 1) Get all films, even if they don’t have languages.
-- 2) Get all languages, even if there are no films in those languages.
SELECT public.film.title, public.film.description, public.language.name
FROM public.film
RIGHT JOIN public.language ON public.film.language_id = public.language.language_id;

-- Create a new table called new_film with the following columns: 
-- id, name. Add some new films to the table.
INSERT INTO public.new_film (name)
VALUES
('Fellowship of the ring'),
('The two towers'),
('Return of the king');

-- Create a new table called customer_review, which will contain film reviews that customers will make.

-- ******* A foreign key with cascade delete means that if a record in the parent table is deleted, 
-- then the corresponding records in the child table will automatically be deleted.******
CREATE TABLE customer_review 
(
    review_id SERIAL PRIMARY KEY,
	film_id int,
	language_id int,
	title varchar(50),
	score int,
    review_text text,
	last_update date,
    FOREIGN KEY (film_id) REFERENCES public.new_film
    ON DELETE CASCADE
);

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO public.customer_review (
    film_id,
    language_id,
    title,
    score,
	review_text,
	last_update
)
VALUES
(
    1,
    1,
    'Dune',
    8,
    'Great story, good soundtrack. waiting for part two',
    '2022-03-08'
),
(
    2,
    1,
    'The nutty proffesor',
    6,
    'Funny, fast, eddie murphy is hilarious.',
    '2022-03-07' 
);

-- THERE IS A PROBLEM ('language_id is ambigous')
SELECT 
    review_id,
    film_id,
    language_id,
    title,
	score,
	review_text,
	last_update
FROM
    public.customer_review
INNER JOIN
    public.new_film ON public.new_film.id = public.customer_review.film_id
INNER JOIN
    public.language ON public.language.language_id = public.customer_review.language_id;
