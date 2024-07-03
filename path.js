const path = require('node:path');
const fs = require('node:fs');


// const notes = '/users/joe/notes.txt';

// path.dirname(notes);
// path.basename(notes);
// path.extname(notes);

// path.basename(notes, path.extname(notes));

// const name = 'joe';
// path.join('/', 'users', name, 'notes.txt');

// console.log(path.resolve('text.txt'))

fs.open('C:/node office/test.txt', 'r', (err, fd) => {
    console.log(fd)

});
