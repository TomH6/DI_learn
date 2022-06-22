const nodeCron =  require ("node-cron");


const everyMidnight = nodeCron.schedule("0 0 * * *", ()=>{
    console.log('every second' +' '+ Math.random());
});

const everySaturdayMidnight = nodeCron.schedule("0 0 * * 6", ()=>{
    console.log('every second' +' '+ Math.random());
});