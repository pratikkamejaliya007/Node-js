const http=require("http");

const fs=require("fs/promises");

const server = http.createServer((req,res)=>{

    res.write("Intro http hghf");

    res.end();

})

server.listen(8080,()=>{
    console.log("server running");
});
