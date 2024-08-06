const path = require('node:path');
console.log(typeof path)

let dirname =  path.dirname("/home/neosoft/Downloads/Technical_Training/WebBasic_Day2/BoxModel.html")
console.log(dirname)

let dirDetails = path.parse("/home/neosoft/Downloads/Technical_Training/WebBasic_Day2/BoxModel.html")
console.log(dirDetails);

const pathFormat = path.format({
    root: '/',
    dir: '/home/neosoft/Downloads/Technical_Training/WebBasic_Day2',
    base: 'BoxModel.html',
    ext: '.html',
    name: 'BoxModel'
})
console.log(pathFormat);
module.exports = dirDetails
