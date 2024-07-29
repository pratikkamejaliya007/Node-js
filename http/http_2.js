const http=require("http");

const fs=require("fs/promises");

const server=http.createServer((req,res)=>{

    const path=req.url;

    console.log(path)
    
    if(path == '/'){
        res.write("home page")
    }else if(path == '/about'){
        res.write("about page")
    }else if(path == '/contact'){
        res.write("contact page")
    }else{
        res.write("page not found 404")
    }

    res.end()

});

server.listen(4000,()=>{
    console.log("server is start")
})