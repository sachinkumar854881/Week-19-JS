function promise(){
    return new Promise(function(resolve,reject){
        console.log("fetching data, please wait")
        setTimeout(()=>{
            $.get("https://jsonplaceholder.typicode.com/users",function(data){
                console.log(data)
            }).fail(err => {
                reject('fail to load JSON data')
            })
        },2000)
    })
}
promise().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})