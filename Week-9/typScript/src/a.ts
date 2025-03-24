
/* \
function isLegal(user:{
    firstName:string,
    lastName:string,
    age:number
}):boolean{
    if(user.age > 18){
        return true;
    }else{
        return false;
    }
}

function isgreet(user:{
    firstName:string,
    lastName:string,
    age:number
}){
    console.log("hello "+user.firstName);
}
isLegal({
    firstName:"Arpan",
    lastName:"gupta",
    age:20
})
isgreet({
    firstName:"Arpan",
    lastName:"gupta",
    age:20
})
// console.log(isLegal);
//as you can see for these complex object we have to write the same code again and again
//so we can use interface to make it more readable
// interface is a way to define a custom type in typescript
console.log("using interface");
interface User{
    firstName:string,
    lastName:string,
    age:number
}

function isLegal1(user:User):boolean{
    if(user.age > 18){
        return true;
    }else{
        return false;
    }
}

function isgreet1(user:User){
    console.log("hello "+user.firstName);
}
isgreet1({
    firstName:"Arpan",
    lastName:"gupta",
    age:20
})
isLegal1({
    firstName:"Arpan",
    lastName:"gupta",
    age:20
})
 */
//type and interface
// what is the diff between type and interface
// intefaced can be used to define a custom type but type can be used to define a custom type as well as union type
// interface we can extend in class and type lets us do or and and unin and intersections 
/* type  Employee={
    name:string,
    startDate:Date
}
interface Manager{
    name:string,
    department:string
} */
/* // method 1
type Techlead = Employee & Manager;
//method 2
// type Techlead = {
//     name:string,
//     startDate:Date,
//     department:string
// }
const T: Techlead = {
    name:"Arpan",
    startDate: new Date(),
    department:"IT"
}
 */
//arrays in typescript
/* type num = number[];
function getVal(arr:num){
    console.log(arr[0]);
    
}
getVal([1,2,3]); */

//ENUMS
// get errors while in the devlopment phase

/* type Keyinput = "up" | "right" | "left" | "down";
enum DirectionEnum {
    Up,
    Down,
    Left,
    Right
}
function keyPresss(Pressed:DirectionEnum){
    console.log(Pressed);   
    if(Pressed == DirectionEnum.Up){
    }
}

keyPresss(DirectionEnum.Up); */

