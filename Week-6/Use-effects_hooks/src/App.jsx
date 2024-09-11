
// import React from 'react'
// import { useState } from 'react';

// function App() {
//   const [inputvalue,setinput] = useState(1);
//   const [btncounter,setbtncounter] = useState(0);

// let count = 0;
// for(let i = 0;i<= inputvalue;i++){
//   count = count + i;
// }
//   return (
//     <>
//    <input onChange={function(e){
//     setinput(e.target.value);
//    }} placeholder={"Input the number"}></input>
//     <br />
//     Sum {inputvalue} to is {count}
//     <br />
//    <button onClick={()=>{
//     setbtncounter(btncounter+1);}}>Counter({btncounter})</button>
//     </>
//   )
  
// }


// export default App

//usecustomhooks
/* import axios from 'axios';
import React from 'react'

function useTodos(){
  const [todos,setTodos] = useState([]);
  useEffect(()=>{
    axios
    .get("")
      .then((res)=>{
        setTodos(res.data.todos);
      });
  })
}

function App() {
  const todos = useTodos();
  return (
    <div>{todos}</div>
  )
}

export default App */

//useMemo
import React, { memo, useMemo } from 'react'
import { useState } from 'react';

function App() {
  const [inputvalue,setinput] = useState(1);
  const [count,setcount] = useState(0);  

  const sum = memo(function(){
    let sum = 0;
    for(let i = 0;i <= inputvalue;i++){
      sum = sum + i;
    }
    console.log("rednering");
    return sum;
  },[inputvalue]);

  return (
    <div>
    <input
    type="number"
    value={inputvalue}
    onChange={function(e){setinput(e.target.value);}}/><br/>
    Sum from 1 to {inputvalue} is {sum}<br/>
    <button onClick={()=>setcount(count+1)}>Count-{count}</button>
    </div>
  )
}

export default App