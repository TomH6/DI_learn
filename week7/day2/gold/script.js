[1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
     return ;
});

//(line 1) we go thru every part of the array and for each one of them we check: 
//(line 2) is the type of variable we are now testing a number type? 
//if so, return that to a new array *2
// eventually we will get a new array [2, 4, 6]

[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
       return acc.concat(cur) ;
    },
    [1, 2],
  );

//(line 11) we are about to reduce the 2 arrays to a single one
//(line 12) we set 2 parameters: acc = the previous value. cur = the current value
//(line 13) params: we return a concatenated single array. [0, 1, 2, 3]
//(line 15) the initial value: the first part of our new array. [1, 2]
// the new array [1, 2, 0, 1, 2, 3] 

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })
// i is the array index. so it will be: 0-> 1-> 2-> 3-> 4-> 5

// EX 4
//Using a method, take this array and modify it to look like this array: [1,2,3,[4],[5]].
//Bonus Try to do it on one line.

const array = [[1],[2],[3],[[[4]]],[[[5]]]]
let flatArray = [].concat.apply([], array);
console.log(flatArray)