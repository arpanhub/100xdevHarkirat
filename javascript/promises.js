//=>pending,resolved
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
   let value = await ArpanAsyncFunction();
   console.log(value);
}  
main();
 */