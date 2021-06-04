import Todo from './Todo'
// Declare List component
//Destructure the todos from the todos object, which comes from the initial state
const List = ({ todos }) => {
    return (
        <div>
        {/* Iterate through todos array to declare a Todo component for each todo (with a unique id and item*/}
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}

export default List


