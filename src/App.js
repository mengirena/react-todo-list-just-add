// Import React's useState and components: Header, List, AddTodo
// Import useState hook to have state variables in functional components. Returns a variable with current state value and another function to update this value
import { useState } from 'react'
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"

//create a functional App component
function App() {
  // initialize todos for current state and setTodos as the method to update current state
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);
  // method to add new todos back into the initial state (updated by setTodos())
  const addTodo = (todo) => {
    // generate a random id
    const id = Math.ceil(Math.random()*100000) 
    // create new toDo
    const newTodo = {id, ...todo}
    // update todos with existing and new Todo
    setTodos([...todos, newTodo])
  }

  return (
    <div className="container">
     {/*Declare Header, AddTodo and List components*/}
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos}/>
    </div>
  );
}

export default App;
