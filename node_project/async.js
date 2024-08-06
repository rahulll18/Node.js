
const fspromise = require('node:fs/promises');

async function readfile1()
{
    const content = await fspromise.readFile("./example.txt");
    console.log(content.toString());
    console.log("further operation 1...")
}
readfile1();

async function readfile2()
{
    const content = await fspromise.readFile("./example.txt")
    // .then(data =>console.log(data.toString()))
    // .catch(error => console.log(error))
    // .finally(()=> console.log("finally block executed"))

    console.log(content.toString())
    console.log('further operation 3.....')
}
readfile2()


async function normal()
{
    console.log("file 1")
    await readfile1();
    console.log("file 2")
    readfile2();
    console.log("both executed");
}

//normal();