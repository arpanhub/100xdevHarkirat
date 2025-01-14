import { useEffect, useState } from 'react'
import axios from 'axios'

//custom hook
function useTodos(){
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        // console.log(res.data[1]);        
        setTodos(res.data);
        setLoading(false);
      })
  }, [])
  return {todos, loading};
}
function App() {
 const {todos} = useTodos();
 const {loading} = useTodos();
  return (
    <>    
      {loading ? <p>Loading...</p> : todos.map(todo=><Todos todo={todo} />)}
    </>
  )
}

function Todos({ todo }) {
  return <div>
    <li id={todo.id}>{todo.id}
    {todo.completed ? <p>Completed</p> : <p>Not Completed</p>}
    </li>
  </div>
}

export default App