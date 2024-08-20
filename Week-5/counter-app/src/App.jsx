
import {useState} from "react";
import './App.css';
function App() {
const [todos,setTodos] = useState([
  {
    title: "go to gym",
    description: "go to gym from 7-9",
    completed: false
  },
  {
    title: "study DSA",
    description: "study DSA from 9-10",
    completed: true}
]);

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    setTodos([...todos, {
      title: "new Todo",
      description: "desc of new todo"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}

    </div>
  )
}

function Todo(props) {
  return (
  <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
  )
}

export default App