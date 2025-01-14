import React from 'react'
import { useState } from 'react';
import  { useEffect } from 'react';
function App() {
 const [rendered, setRendered] = useState(true);
 useEffect(()=>{
  setInterval(() => {
    setRendered(r=>!r);
  }, 4000);
 },[])
  return (
    <div>
      {rendered?<MyComponent/>:null}
    </div>
  )
}

//lifecycle events using useEffect

// function MyComponent() {

//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.log('Component mounted');
//     return () => {
//       console.log('Component will unmount');
      
//     };
//   }, []);

//life cycle events using class component
class MyComponent extends React.Component {
  componentDidMount() {
    console.log('Component mounted');
    
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    
  }

  render() {
    return <div>my Component</div>;
  }
}

  // Render UI
  // return <div>my Component</div>;
export default App