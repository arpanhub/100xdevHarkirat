function myOwnSetTimeout(fn,duration){
    setTimeout(fn,duration);
}

myOwnSetTimeout(function(){
    console.log("log the first thing");
    myOwnSetTimeout(function(){
        console.log("log the second thing");
    },4000);
},2000);