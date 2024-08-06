const fs = require('node:fs');
const filePath = "./example.txt";
const filePath2 = "./sss.txt"

//line by line execute hoga
const data = fs.readFileSync(filePath);
console.log(data.toString());
console.log("further operations");

fs.writeFileSync(filePath, "Tendulkar has received several awards from the government of India");
console.log("write operation completed....");

function readdata(filePath)
{
    const data = fs.readFile(filePath);
    return data.toString();
}

function writefile(contents)
{
    fs.writeFileSync(filePath2 ,contents)
}

writefile('xyz');

console.log(readdata(filePath2));




