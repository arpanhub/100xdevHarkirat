// this is  example for using map fucntion
/* function transform(i){
    return i * 2;
}
const input = [1,2,3,4,5];
const  ans = input.map(transform);
console.log(ans); */
//--------------------------------------------------



//example for using filter fucntion
function filterlogic(i){
    if(i % 2 == 0) return true;
    else return false;
}
const input = [1,2,3,4,5];
const ans = input.filter(filterlogic);
console.log(ans);
