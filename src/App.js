import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToDo from "./Component/AddToDo";
import ToDoList from "./Component/ToDoList";

function App() {
  return (
    <div className="  container m-5 p-2 rounded mx-auto border shadow">
    <div className="row m-1 p-4">
        <div className="col">
            <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
            <i className="bi bi-check-square-fill"></i>
                <u>To Do List </u>
    <AddToDo />
    <ToDoList />
    </div>
    </div>
</div> 
</div>  );
}

export default App;