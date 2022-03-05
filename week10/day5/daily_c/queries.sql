-- Create a table called orders and a table called items. 
-- You decide which fields should be in each table, 
-- although make sure the items table has a column called price.

-- There should be a one to many relationship between 
-- the orders table and the items table. 
-- An order can have many items, 
-- but an item can belong to only one order.

-- Display all the items.
SELECT item_name From public.items;
-- Display all the orders.
SELECT oreder_id, item_id, customer_name, seller_name, order_time From public.orders;
-- Use Inner Join to display the orders with their items.

SELECT oreder_id, item_name, customer_name, seller_name, order_time
From public.orders
INNER JOIN public.items
ON public.orders.item_id  = public.items.item_id;