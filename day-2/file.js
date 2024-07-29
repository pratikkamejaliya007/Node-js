const fs=require("fs")

fs.writeFileSync("hello.txt","intro of html");

fs.writeFileSync("hy.html","basic");

fs.appendFileSync("hello.txt","  this is a basic file");

fs.appendFile("hy.html", "hello.txt", (err) => {
    if (err) throw err;
    console.log('Content appended successfully!');
  });

  fs.unlinkSync("hy.html");

  let a=fs.readFileSync("hello.txt");

  console.log(a.toString())

  fs.renameSync("hello.txt","hy.txt");

  const ff=require("fs/promises")

  const createfile= async ()=>{
    try{
        await ff.writeFile("async.txt","intro html")

        await ff.appendFile("async.txt","add file")

    }catch(err){
        console.log(err)
    }
  }

  createfile()

  // fs.writeFileSync("index.html","created html file");

  let z=fs.readFileSync("index.html")

  console.log(z.toString())