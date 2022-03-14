// Create a function that returns the current date and time. Export the module.
const days = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'];
module.exports = function() {
    let today = new Date();
    let date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
    let day = `${days[today.getDay()]}`;
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    let currentDateTime = `The Date And Time Are Currently:${day} ${date} ${time}`;
    return currentDateTime;
}();

// Use the exported module in a script.js file.