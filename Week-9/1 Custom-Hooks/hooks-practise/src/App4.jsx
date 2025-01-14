import React, { useEffect } from 'react'
import { useState } from 'react';



const useMousePointer=()=>{
    const [position,setposition] = useState({x:0,y:0});
    console.log("Mouse Pointer Location:",position);

    useEffect(()=>{
        window.addEventListener('mousemove',function(e){
        // const handleMouseMove =/ (e)=>{
            setposition({
                x:e.clientX,
                y:e.clientY
            })
        })
    },[]);
    return position;
}

function App4() {
    const pos= useMousePointer();
    console.log(pos);
    
  return (
    <div>Mouse Pointer Location:{pos.x},{pos.y}</div>
  )
}

export default App4;