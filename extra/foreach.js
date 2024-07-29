let arr=[1,2,3,4,5]

arr.forEach(function(arr){
    if(arr % 2 == 0){
        console.log(arr)
    }
})

let newarr=arr.map(el => el*2)

console.log(newarr)