const fs = require("fs")

//fs.readFile('../hello', (err, data) => {
fs.readFile('D:\\wwwroot\\2008\\hello1', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log(1111)


//fs.readFile('../hello', (err, data) => {
fs.readFile('D:\\wwwroot\\2008\\hello2', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log(2222)
