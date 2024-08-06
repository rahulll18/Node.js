console.log("error demo")


try{
    const m= 55;
    const z = n + m;
}catch(err){
    console.log(err.message)
    // console.log("Error Occurred");
}

try{
    const m =  55;
    m /= b;
    //if(m == null) throw new Error('Error : m Value is Null');
    const n = 34 / r;
}catch(error){
    console.log(error.message);
    console.log(error.stack);
}