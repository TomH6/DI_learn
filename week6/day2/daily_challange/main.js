
//////////////////////////DAILY CHALANGE////////////////////
const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
   //Create an array using forEach that contains all the usernames from the gameInfo array, 
   //add an exclamation point (ie. “!”) to the end of every username.
   let result = gameInfo.map(a => a.username);
   console.log(result)
   for(let i = 0; i<result.length; i++){
    result[i] = `${result[i]}!`
}
console.log(result)

//Create an array using forEach that contains the usernames of all players with a score bigger than 5. 
//Use the ternary operator

let winners = gameInfo.map( a => a.score);
console.log(winners);
winners.forEach(element => {
    return (element > 5
        ?console.log('high')
        :console.log('low'))
});
console.log(winners);