import { useState } from "react";
import "./CreateTodo.css"

export function CreateTodo(){
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");
    
    return(
    <div className="InputBox card" style={{ width: '30rem' } }>
        <input className="form-control"
        style={{
            padding: 10,
            margin : 10
        }} type="text" placeholder="Task"  onChange={(e)=>{
            const value = e.target.value;
            setTitle(value);
        }}/><br />
        <input className="form-control"
        style={{
            padding: 10,
            margin : 10
        }}type="text" placeholder="Description" onChange={(e)=>{
            const value = e.target.value;
            setDescription(value)
        }} /><br />
        <button className="btn btn-info"
        style={{
            padding: 10,
            margin : 10
        }} onClick={()=>{
            fetch("http://localhost:3001/todo",{
                method: "POST",
                body: JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    "content-type" : "application/json"
                }
            
            })
            .then(async (res)=>{
                const json = await res.json();
                console.log(json)
                alert("todo Added")
            })
        }}>Add Task</button>
    </div>
    )
    
} 