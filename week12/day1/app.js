// console.log('Hello my first nodeJS app');
// for (let i = 0; i < 5; i++) {
//    console.log(i);   
// }

// console.log(__dirname); //gives you the exact path (on machine or server)
// console.log(__filename); //gives you the exact path + file name (on machine or server)
// const module = require(''); //when we need to call on a module we use keyWord requrie
// There are 3 kinds of modules
// 1. Modules we build by ourselves.
// 2. Modules someone else already made (download from npm OR yarn)
// 3. Modules that are built in the nodeJS library (i.e. 'http')

//*****OUR OWN MODULE *****/
const g = require('./modules/utils/greeting.js');
// console.log(g);
const name = 'Mike Tyson';

g.greeting(name);
g.print('Tom Hein');

//***** NPM MODULES *****/
// We downloaded a module from npmjs.com called slugify (it's in the node_modules folder & stated in the package.json file)
const slugify = require('slugify');
const url = 'My New Web Site';

console.log(slugify(url, '_'));