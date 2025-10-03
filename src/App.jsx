import { useState } from "react";
import {useSelector, useDispatch} from "react-redux"
import { addtodo, updatetodo, deletetodo } from "./store/todoSlice";

function App() {
  
  const todos = useSelector((state)=> state.todos);

  const dispatch = useDispatch();

  const[text, setText] = useState("");

  const handelAdd= ()=>{
      if(text.trim() !=""){
        dispatch(addtodo(text));
        setText("");
      }
  }

  return (
    <>  
       <div style={{marginTop:"40vh", marginLeft:"85vh"}}>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)} style={{marginRight:"2em"}} />
        <button onClick={handelAdd}>Add</button>
        
       <ul>
        <h4>Lists</h4>
        {todos.map((todo)=>(
            <li key={todo.id} style={{ listStyle:"number" , marginBottom:"10px"}}>
              <span onClick={()=> dispatch(updatetodo(todo.id))} 
              style={{textDecoration : todo.complete ? "line-through" : "none", cursor:"pointer"
            }}>
              {todo.text}
              </span>
              <button onClick={()=> dispatch(deletetodo(todo.id))} style={{
              cursor:"pointer" , marginLeft:"2em"
            }}>delete</button></li>
            
        ))}
       </ul>

      </div>
    </>
  )
}

export default App
