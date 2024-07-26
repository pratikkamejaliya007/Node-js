console.log(__filename)

for(let i=0;i<=5;i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

let ab=0

const a=setInterval(()=>{
    console.log(ab++)
},1000);

setTimeout(()=>{
    clearInterval(a)
},5000)
