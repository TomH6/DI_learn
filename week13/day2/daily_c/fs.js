const fs = require('fs');

fs.readFile('./Right-Left_Week7JS-main/RightLeft.txt', function(err, data) {
    if(err){
        throw err;
    } else {
        let chars = data.toString().split('');
        let right = 0;
        let left = 0;
       
        for (let i = 0; i < chars.length-1; i++) {
            const element = chars[i];
            if(element === '>'){
                right++
            } else {
                left++
            }
            // If you want to see Question#2 uncomment this

            // if(left > right){
            //     console.log(`First time in left side is in: ${i} steps`)
            //     break;
            // }
        }
        console.log(`total steps:${right-left}`);
    }
});

