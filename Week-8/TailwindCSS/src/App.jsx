import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-bold text-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6'>
        <h1 className='lg:font-bold bg-blue-500'>Hello</h1>
        <h1 className='font-bold bg-blue-500'>Hello</h1>
        <h1 className='font-bold bg-red-500'>Hello</h1>
        <h1 className='font-bold bg-blue-500'>Hello</h1>
        <h1 className='font-bold bg-green-500'>Hello</h1>
        <h1 className='font-bold bg-blue-500'>Hello</h1>
      </div>
    </>
  )
}

export default App
