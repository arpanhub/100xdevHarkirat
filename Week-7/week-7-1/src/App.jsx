// code for the use Context in reast jsx

/* import React, { useContext, useState } from 'react'
import { CountContext } from './Context';

function App() {
  const  [count,setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={{count,setCount}}>
      <Count/>
      </CountContext.Provider>
    </div>
  )
}

function Count(){
  
  return <div>
    <CountRenderer/>
    <Buttons/>
  </div>
}
function CountRenderer(){
  const {count} = useContext(CountContext);
  return <div>
    {count}
  </div>
}
function Buttons(){
  const {count,setCount} = useContext(CountContext)
  return <div>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <button onClick={()=>setCount(count-1)}>Decrease</button>
  </div>
}
export default App */

//code for the use Recoil in reast jsx
import React from 'react'
import { useRecoilValue, RecoilRoot, useSetRecoilState } from 'recoil'
import { countAtom } from './store/count'

function App() {
  
  return (
    <div>
      <RecoilRoot>
      <Count/>
      </RecoilRoot>
    </div>
  )
}
function Count(){
  
  return <div>
    <CountRenderer/>
    <Buttons/>
  </div>
}


function CountRenderer(){
  const count  = useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenOdd/>
  </div>
}

function EvenOdd(){
  const count = useRecoilValue(countAtom);

  return <div>
    {(count %2 ==0)?"It is even":"It's odd"}
  </div>
}

function Buttons(){
  const setCount= useSetRecoilState(countAtom);
  return <div>
    <button onClick={()=>setCount(count=>count+1)}>Increase</button>
    <button onClick={()=>setCount(count=>count-1)}>Decrease</button>
  </div>
}
export default App;