import React, { useEffect, useState } from 'react'

function useDebounce(value,timeout){
    const [debouncedValue, setdebouncedValue] = useState(value);
    useEffect(()=>{
        const timerID=  setTimeout(() => {
            setdebouncedValue(value);
        }, timeout);
        return ()=>{clearTimeout(timerID)}
    },[value]);
    
    return debouncedValue;
}
function UseDebounce() {
    const [input,setinput] = useState("");
    const debouncevalue = useDebounce(input,500);
  return (
    <div>
    <input type="text"
    onChange={(e)=>{
        // useDebounce(input)
        setinput(e.target.value);
    }}
     />
    <div>debounce value is :{debouncevalue}</div>
    </div>
  )
}

export default UseDebounce