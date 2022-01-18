let numbers = [123, 8409, 100053, 333333333, 7];
//Loop through the array above and determine whether or not each number is divisible by three.
//Each time you loop console.log true or false.
let divisible = (numbers) => {
    numbers
        .filter(element => element % 3 === 0)
        .forEach(element => console.log(element)
            
        );
}

//Element = each one of the array parts
//Index = the position of each element in the 

/*const odds = [ 2, 3, 6, 7, 8 ];
const oddProduct = (arr) => {
  arr
    .filter(element => element % 2 === 0)
    .forEach(element => console.log(element));
};

oddProduct(odds);*/