
import React, { useEffect, useState } from 'react'


function Useisonline(){
  const [isOnline,setisOnline] = useState(window.navigator.onLine);
  useEffect(()=>{
    window.addEventListener('online',()=>{
      setisOnline(true);
    })
    window.addEventListener('offline',()=>{
      setisOnline(false);
    })
  },[]);
}


function App3() {
 const online = Useisonline();
  return(
    <div>
      <h1> Are you online: {online?"No":"Yes"}</h1>
    </div>
  )
}

export default App3