 //EX 1
 // The data will be seen on the url bar

 //EX 2
 // The data will be seen in the network tab (payload)

 //EX 3
//  Convert this JS object into a JSON object. What happens to the nested objects ?
//They are still nested but in string form.

 let marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
}
console.log(JSON.stringify(marioGame))
console.log(JSON.stringify(marioGame, null, 2))