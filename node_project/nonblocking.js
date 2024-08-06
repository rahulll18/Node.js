const fs=require("node:fs");

try{
    fs.readFile('./example.txt',(error,data) => {
        if(error) throw new Error('error occurred')
        console.log(data.toString());
    })
}catch(err){
    console.log(err)
}

console.log("further operations");