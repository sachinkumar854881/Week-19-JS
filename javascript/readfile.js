//Read file in js  Example 1
const fs = require('fs');
var getPromise = function(time)
{
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            console.log("promsie got executed")
            resolve(`time out for ${time}`)
        },time)
    })
}
var promise = getPromise(6000)
promise.then((val) => {
    console.log("in then block and val is:",val)
    return new Promise((resolve,reject) => {
        fs.readFile('test.txt','utf-8',(err,data) => {
            if(err === null){
                console.log('file reading complete')
                resolve(data)
            }
        })
    })
}).then(val => {
    console.log('in then block2 & val is:',val)
    return getPromise(3000)
}).then(val => {
    console.log('in the block3 & val is:',val)
    console.log('end of chain')
})