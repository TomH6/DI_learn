//EX1

//Store your favorite food into a variable.
let favFood = 'Hamburger';
//Store your favorite meal into a variable (ie. breakfast, lunch or dinner)
let favMeal = 'Dinner';
//Console.log I eat <favorite food> at every <favorite meal>
console.log("I eat" +" "+ favFood +" "+ "at every" +" "+ favMeal);

//EX2 - part1

//Create a variable named watchedSeriesLength that is equal to the number of series in the watchedSeries array.
let watchedSeriesLength = 3;
//Create a variable named myWatchedSeries, that is equal to a sentence describing the series you watched
let myWatchedSeries = ['black mirror', 'money heist', 'the big bang theory'];
//Console.log a sentence using both of the variables created above
console.log('I watched' +' '+ watchedSeriesLength +' series : ' + myWatchedSeries);

//part2

//Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries[2] = 'friends';
//Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push('peaky blinders');
//Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift('brooklyn 99');
//Delete the series “black mirror”.
myWatchedSeries.splice(1, 1);
//Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[1][2]);
//Console.log the watchedSeries array
console.log(myWatchedSeries);

//EX3

//Store a celsius temperature into a variable.
let cTemp = 35;
//Convert it to fahrenheit and console.log 
let fTemp = (cTemp/5)*9+32;
console.log(cTemp +'°C is '+ fTemp +'°F');

//EX4

let c;
let a = 34;
let b = 21;
console.log(a+b);
//prediction - 55 beacause 34 and 21 are numbers
//actual - 55

a = 2;
console.log(a+b);
//prediction - 23 because they are both numbers, but now a=2 instead of 34
//actual - 23

// c will be undefiend
//console.log(3 + 4 + '5'); will log 75
console.log(3 + 4 +'5');

//EX5

typeof(15)
// Prediction: number (numbers, unlike strings, do not get a "")
// Actual: number
console.log(typeof(15));

typeof(5.5)
// Prediction: number (numbers (even decimal numbers), unlike strings, do not get a "")
// Actual: number
console.log(typeof(5.5));

typeof(NaN)
// Prediction: undefiend (I did not expect it to get a number type since it is Not-A-Number)
// Actual: number
console.log(typeof(NaN));

typeof("hello")
// Prediction: string (when text is surrounded by "" it is regarded as a string. Even if there are numbers inside the "")
// Actual: string
console.log(typeof("hello"));

typeof(true)
// Prediction: boolean (if the expressions true/false are not surrounded by "" they are not a string, they are Boolean)
// Actual: boolean
console.log(typeof(true));

typeof(1 != 2)
// Prediction: boolean (when comparing expressions they could either be equal to each other or not. which is in fact a true/false question)
// Actual: boolean
console.log(typeof(1 != 2));

"hamburger" + "s"
// Prediction: hamburgers (adding strings together is called concatenation, and it simply joins them together)
// Actual: hamburgers
console.log("hamburger" + "s");

"hamburgers" - "s"
// Prediction: error
// Actual: NaN (because it tried to do a mathamatical operation on something which is not a number)
console.log("hamburgers" - "s");

"1" + "3"
// Prediction: 13 (adding strings (a NUM with "" is a string) together is called concatenation, and it simply joins them together. )
// Actual: 13
console.log("1" + "3");

"1" - "3"
// Prediction: 2
// Actual: -2 (I dont know why it did that..the minus sign is not part of the string 3, so i'm not sure what happend)
console.log("1" - "3");

"johnny" + 5
// Prediction: johnny5 (concatenation?)
// Actual: johnny5
console.log("johnny" + 5);

"johnny" - 5
// Prediction: NaN (because its trying to preform a mathamatical operation on a string which is not a number, so the result is also not a number)
// Actual: NaN
console.log("johnny" - 5);

99 * "hello"
// Prediction: NaN (because its trying to preform a mathamatical operation on a string which is not a number, so the result is also not a number)
// Actual: NaN
console.log(99 * "hello");

1 != 1
// Prediction: false (this is a false boolean expresion)
// Actual: false
console.log(1 != 1);

1 == "1"
// Prediction: true (because a ==, unlike a ===, does not care for typeof)
// Actual:
console.log(1 == "1");

1 === "1"
// Prediction: false (because a number and a string are NOT the same)
// Actual: false
console.log(1 === "1");

//EX6

5 + "34"
// Prediction: 534 (it will not preform a math operation since "34" is not a number)
// Actual: 534
console.log(5 + "34");

5 - "4"
// Prediction: NaN (we cannot preform math operations on data which is NaN)
// Actual: 1
console.log(5 - "4");

10 % 5
// Prediction: 0 ( 5 fits perfectly twice in the number10, so the is no remainder)
// Actual: 0
console.log(10 % 5);

5 % 10
// Prediction: 5 (it is the remainder of that operation)
// Actual: 5
console.log(5 % 10);

"Java" + "Script"
// Prediction: JavaScript (2 strings concatenated with no spaces)
// Actual: JavaScript
console.log("Java" + "Script");

" " + " "
// Prediction: a clear line (no rules were broken, just 2 string with no content concatenated)
// Actual: a clear line
console.log("" + "");

" " + 0
// Prediction: 0 (nothing + 0 = 0)
// Actual:
console.log("" + 0);

true + true
// Prediction: NaN (we can not add booleans to each other)
// Actual: 2 (we can add booleans to each other. false=0 true=1 )
console.log(true + true);

true + false
// Prediction: 1 (we can add booleans to each other. false=0 true=1 )
// Actual: 1
console.log(true + false);

false + true
// Prediction: 1 (we can add booleans to each other. false=0 true=1 )
// Actual: 1
console.log(false + true);

false - true
// Prediction: -1 ( 0 - 1 = -1 )
// Actual: -1
console.log(false - true);

!true
// Prediction: false (the opposite of true is false.)
// Actual: false
console.log(!true);

3 - 4
// Prediction: -1 (because of math..)
// Actual:
console.log(3 - 4);

"Bob" - "bill"
// Prediction: NaN (Math operation between 2 strings is not allowed)
// Actual: NaN
console.log("Bob" - "bill");