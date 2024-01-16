import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css"
import { CreateTodo } from "./components/CreateTodo";
import Todos from "./components/Todos";
// import { NavBar } from "./components/NavBar";
// import { DeleteTodo } from "./components/DeleteTodo";

function App() {

  return (
    <div className="w-[100%] bg-red-500 h-[100%] text-sm p-12">
      <div className="mt-5 h-auto" >
      <CreateTodo/>
      <Todos />
      </div>
    </div>
  );
}

export default App;
