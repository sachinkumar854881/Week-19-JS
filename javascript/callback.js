// callback function 
function greet(name,callback){
    console.log('Hi'+' '+name)
    callback()
}
function callMe(){
    console.log('I am a callback function')
}
greet('Sachin',callMe)

// callback function using setTimeout
function meeting(name,callback){
    console.log("Hello Sachin kumar")
    callback(name)
}
function myName(name){
    console.log('hello'+' '+name)
}
setTimeout(meeting,3000,'John william',myName)