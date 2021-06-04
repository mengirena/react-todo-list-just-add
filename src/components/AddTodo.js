import { useState } from 'react'
// Declare AddTodo component and pass onAdd prop
const AddTodo = ({ onAdd }) => { 
    //declare an empty string as the initial state, get the returned initial state, item, and a function, setItem, for future update
    const [item, setItem] = useState('')
    // when submit button is clicked, todo item from form is passed to onAdd method. 
    const onSubmit = (e) => {
        // PreventDefault is called to prevent the browser from reloading/refreshing before the todo is added
        e.preventDefault()
        //add todo item
        onAdd({item})
        //manually reset field to blank
        setItem('')
    }

    return (
        //onSubmit function will be called while the form is submitted
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
            {/* The input value is set to be item, which is an empty string initially. The new item inserted is updated through the setItem function.*/}
            <input 
                type="text" 
                placeholder="Todo Item"
                value={item}
                onChange={ (e) => setItem(e.target.value)}
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo