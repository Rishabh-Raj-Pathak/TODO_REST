import { useState, useEffect } from "react";
// import DeleteTodo from "./DeleteTodo";
import "./Todos.css"

function Todos(){
    const api_url = "http://localhost:3001";
    const [todos, setTodos] = useState([]);
    // const [time,setTime] = useState(new Date());
    const time = new Date();
  
    useEffect(() => {
      fetchData();
    }, [todos]);
  
    const fetchData = async () => {
      try {
        const response = await fetch(`${api_url}/todos`);
        const data = await response.json();
        setTodos(data.todos);
      } catch (error) {
        console.log(error);
      }
    };

    // Function to delete todo
    const deleteTodo = async(id) => {
        try {
          const response = await fetch(`${api_url}/deleteTodo/${id}`, {
            method: "DELETE",
          });
          const data = await response.json();

          fetchData();
        } catch (error) {
            console.log("error deleting todo");
        }
}

    return <div>
      <div className="outer">
        {todos.map((todoItem) => (
          <div className="Main card"
          key={todoItem._id}>
            <h1>{todoItem.title}</h1>
            <h2>{todoItem.description}</h2>
            {/* <div>Created at {time.toLocaleString()}</div> */}
            {/* sunny Das */}
            
            <input type="checkbox" />
            <button
              style={{ margin: 10 }}
              onClick={() => {
                deleteTodo(todoItem._id);
              }}
            >
              Delete Todo
            </button>
          </div>
        ))}
        </div>
        </div>
}

export default Todos;
// function DeleteTodo(id) {
//     fetch(`http://localhost:3001/deleteTodo/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then(async (res) => {
//         if (res.status === 200) {
//           const updatedTodos = todos.filter((todo) => todo._id !== id);
//           setTodos(updatedTodos);
//         } else {
//           console.error("Error deleting todo:", res.statusText);
//         }
//       })
//       .catch((error) => {
//         console.error("Error deleting todo:", error);
//       });
//   }
  
  
//     return(
//     <div>
//         {
//         todos.map((todo)=>{
//             return(
//             <div key={todo._id}>
               
//                 <h1>{todo.title}</h1>
//                 <h2>{todo.description}</h2>
//                 <button>{todo.complete == true ? "Completed" : "Mark as Complete"}</button>
//             <button style={{margin : 10}} onClick={()=>{DeleteTodo(todo._id)}}>Delete Todo</button>
//             </div> 
//             )
//         })}
//     </div>//     )


    



