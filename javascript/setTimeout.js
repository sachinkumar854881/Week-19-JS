// setTimeout():--execute a block of code aftre specified time
function greeting(){
    console.log('Hello Sachin')//this shown after 3 sec.
}
setTimeout(greeting,3000)
console.log('this message shown first')

// Example-2 Display time every 3 seconds
// function showTime(){
//     let dateTime = new Date();
//     let time = dateTime.toLocaleTimeString()
//     console.log(time)
//     setTimeout(showTime,3000)
// }
// showTime()

// delay in execution with setTimeout
function greet(){
    console.log('Hello World')
}
function sayName(name){
    console.log('Hello'+' '+name)
}
setTimeout(greet,3000)
sayName('Sachin Kumar')