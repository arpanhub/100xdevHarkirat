/* //=>pending,resolved
var d = new Promise(function(resolve){
    // resolve("helllo");
    // setTimeout(function(){
    //     resolve("hello");
    // },1000) 
}); 
function callback(){
    console.log(d);
} 
 console.log(d);
d.then(function(){
    console.log(d);
});
 */

//----------------------------------------
/* function ArpanAsyncFunction(){
    let p=new Promise(function(resolve){
        resolve("hi there");
    });
    return p;
}
function main(){
    ArpanAsyncFunction().then(function(value){
        console.log(value);
    });
}  
main(); */


//---------------------------------------------
// Cleaner version
/* function ArpanAsyncFunction(){
    let p=new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there");
        },2000)
    });
    return p;
}
async function main(){
    //no callbacks,no .then syntax
   let value =   await ArpanAsyncFunction();
   console.log(value);
}  
main(); */



//---------------------------------------------
/* const p = new Promise(function(onDone) {
    onDone("hello");
})
p.then(function(arg){
    console.log(arg);
}) */



//---------------------------------------------
//about promises in JS
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//https://javascript.info/promise-basics



//---------------------------------------------
//array of promises
/* function getPromises()
{
    let p1 = new Promise(p1fn);
    let p2 = new Promise(p2fn);
    return [p1,p2];
}
function p1fn(resolve)
{
    resolve("p1 resolved");
}
function p2fn(resolve)
{
    resolve("p2 resolved");
}
const x = getPromises();
console.log(x); */


//---------------------------------------------
//what is happining in below code?
function fn()
{
 return "hello";
}
let x = Promise.resolve(fn());
// console.log(x); //=>Promise { <pending> }
x.then(function(value){
    console.log(value);
}) 

