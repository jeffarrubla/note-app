console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');


console.log('Result:',notes.add(1,2));

//var user = os.userInfo();
//fs.appendFileSync('greetings.txt',`Hello ${user.username}! Your are ${notes.age}.`);