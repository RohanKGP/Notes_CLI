
// Using the object and converting them into string

/* var obj = {
    name: "Andrew"
};

var stringObj = JSON.stringify(obj);

console.log(typeof stringObj);
console.log(stringObj);

*/

// defining a string and converting it an object

// var personString = '{"name": "Andrew", "age": 25}'

// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require("fs"); //require fs module

var originalNote = {
    title: 'Some title', // defining object for notes
    body: 'Some body'
};


var originalNoteString = JSON.stringify(originalNote); // converting object into string
fs.writeFileSync('notes.json', originalNoteString); // writing the string in notes.json

var noteString = fs.readFileSync('notes.json'); // reading the string form notes.json
var note = JSON.parse(noteString); // coverting back into object

console.log(typeof note) // checking for the data type of note
console.log(note.title); // console the object note and using note.title property

