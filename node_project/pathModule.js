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

// 1. path.basename(path[, suffix])
const filePath = '/home/neosoft/Downloads/Technical_Training/WebBasic_Day2/BoxModel.html';
const baseName = path.basename(filePath);
console.log(`Base name: ${baseName}`); // Output: file.txt

const baseNameWithSuffix = path.basename(filePath, '.txt');
console.log(`Base name with suffix removed: ${baseNameWithSuffix}`); // Output: file

// 2. path.delimiter
console.log(`Path delimiter: ${path.delimiter}`); // Output: ; on Windows, : on POSIX

// 3. path.dirname(path)
const dirName = path.dirname(filePath);
console.log(`Directory name: ${dirName}`); // Output: /home/user/dir

// 4. path.extname(path)
const extName = path.extname(filePath);
console.log(`Extension name: ${extName}`); // Output: .txt

// 5. path.format(pathObject)
const pathObject = {
  dir: '/home/user/dir',
  base: 'file.txt'
};
const formattedPath = path.format(pathObject);
console.log(`Formatted path: ${formattedPath}`); // Output: /home/user/dir/file.txt
module.exports = dirDetails
