// promise:--Example 1
// var fun1 = function(resolve,reject){
//     setTimeout(function(){
//         console.log('inside setTimeout callback')
//         resolve('time out for five seconds')
//     },5000)
// }
// var callbackfun = function(value){
//     console.log('value:',value)
// }
// var promise = new Promise(fun1)
// promise.then(callbackfun)

// Examaple 2
// var fun2 = function(resolve,reject){
//     setTimeout(function(){
//         console.log('Inside setTimeout callback')
//         resolve('timed out for five second')
//     },5000)
// }
// var callbackfun1 = function(value){
//     console.log('value:',value)
//     return 'Hello'
// }
// var callbackfun2 = function(value){
//     console.log('value callback1 here:',value)
//     return 'sachin'
// }
// var callbackfun3 = function(value){
//     console.log('value callback2 here:',value)
// }
// var promise = new Promise(fun2)
// promise.then(callbackfun1).then(callbackfun2).then(callbackfun3)

// Example 3 
// var funpromise = function(resolve,reject){
//     console.log('In function')
//     resolve(10)
// }
// var synTask1 = function(val){
//     console.log('in task1 with val:',val)
//     return val+1;
// }
// var synTask2 = function(val){
//     console.log('in task2 with val:',val)
//     return val+5;
// }
// var promise =new Promise(funpromise)
// promise.then(synTask1).then(synTask2).then(val =>{
//     console.log('end of the chain with value:',val)
// })
