function sum(a,b,fntocall){
    let result =a+b;
    fntocall(result);
}
function display(data){
    console.log("Reuslt is "+data);
}
const ans=sum(1,2,display);
