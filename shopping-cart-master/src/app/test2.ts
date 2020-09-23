
const fs = require('fs');


// read
// let rawdata = fs.readFileSync('test2.json');
// let student = JSON.parse(rawdata);
// console.log(student);


// write
let studentWrite = {
    name: 'Mike',
    age: 23,
    gender: 'Male',
    department: 'English',
    car: 'Honda'
};

let data = JSON.stringify(studentWrite);
fs.writeFileSync('student-2.json', data);
