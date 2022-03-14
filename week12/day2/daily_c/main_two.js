// Create a function that returns the current date and time. Export the module.

function dateTime() {
    let today = new Date();
    let date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    let currentDateTime = `${date} ${time}`;
    return currentDateTime;
};
// console.log(dateTime());
module.exports = {
    dateTime
};

// Use the exported module in a script.js file.