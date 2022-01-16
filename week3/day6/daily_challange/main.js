//Write a JavaScript program that recreates the pattern below.
//Do this challenge twice: first by using one loop, then by using two nested for loops 
//(Nested means one inside the other - check out “nested for loops” on Google).

let stars = ["******", "******", "******", "******", "******", "******"];
let rows = "";

for (let i = 0; i < stars.length; i++) {
    rows += "*";
    console.log(rows); 
    
}


for (let x = 0; x < stars.length; x++) {
    
    let starlets = "";

    for (let y = 0; y <= x; y++) {

        starlets += "*";    
    }
    console.log(starlets);
}

    