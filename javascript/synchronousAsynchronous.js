//sychrnous-step by step 
//asychronous-parllely
function findsum(){
    let ans=0;
    for(let i=0;i<100;i++){
        ans +=i;
    }
   console.log(ans);
}
/* function findsumtill100(){
    console.log(findsum(100));
} */
setTimeout(findsum,1000);
console.log("hello world");