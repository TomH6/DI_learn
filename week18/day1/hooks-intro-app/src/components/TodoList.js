import React, {useState} from "react";

function Todo({todo, index, completeTodo, deleteTodo}) {
    return(
        <div style={{textDecoration: todo.isComplete ?'line-through' :''}}
             className="todo">
            {todo.text}
            <button onClick={()=> completeTodo(index)}>Complete</button>
            <button onClick={()=> deleteTodo(index)}>X</button>
        </div>
    )
}

function TodoForm ({addTodo}) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        !text ? alert('please enter To-Do')
              : addTodo(text);
                setText('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type='text' 
                   value={text}
                   placeholder='Add To-Do' 
                   onChange={(e)=>setText(e.target.value)} 
            />
        </form>
    )
} 


function TodoList() {
    const [todos, setTodos] = useState([
        {
            text: 'Learn Hooks',
            isComplete: false
        },
        {
            text: 'Renew prescription',
            isComplete: false
        },
        {
            text: 'Respond to Shira',
            isComplete: false
        }
    ]);

    const addTodo = (text) => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    };
    
    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isComplete = true;
        setTodos(newTodos); 
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1)
        setTodos(newTodos);
    };

    return(
        <div className="todos">
            {todos.map((todo, i)=> (
                <Todo 
                    key={i} 
                    index={i} 
                    todo={todo} 
                    completeTodo={completeTodo} 
                    deleteTodo={deleteTodo}/>
            ))}
            <TodoForm addTodo={addTodo}/>
        </div>
    )
}
export default TodoList;