  import React, { useEffect } from "react"

  function App() {
    const [todos, setTodos] = React.useState([])
    useEffect(() => {
    setInterval(()=>{
      fetch('https://dummyjson.com/todos/random')
      .then(async function(response) {
        const json = await response.json()
        setTodos([json])
      })
    },9000);
    // return () => clearInterval(interval);
    },[])
    return (
  <div>
      {todos.map(
        function(todo){
          return(
            <SetTodo todo={todo.todo}
            id = {todo.id}
            completed={todo.completed?"Completed":"Not Completed"}
            />
          )
        })}
  </div>
    )
  }


  function SetTodo({ todo, completed,id }) {
    return (
      <div>
        <h4>{id}</h4>
        <h4>{todo}</h4>
        <p>{completed}</p>
      </div>
    )
  }

  export default App
