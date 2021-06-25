import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {toggleTodo, editToDo, deleteToDo} from "../Redux/Actions/ToDo_Action";

const ToDoItem = ({description, id, isDone}) => {
  const dispatch = useDispatch();
  const [edit_Task, setTask] = useState(false);
  const [edit_description, setedit_description] = useState("");

  return (
    <div className="row mx-1 px-5 pb-3 w-80">
    <div className="col mx-auto">
      <div className="row px-3 align-items-center todo-item rounded">
        <div className="col-auto m-1 p-0 d-flex align-items-center">
          <h2 className="m-0 p-0">
          <span onClick={() => dispatch(toggleTodo(id))}>
          {isDone ? " 👌" : "👋"}
        </span>
          </h2>
        </div>
        <div className="col px-1 m-1 d-flex align-items-center">
        {!edit_Task ? (
            <input 
              className={isDone ? "done rounded-lg border  w-100 p-1 " : "rounded-lg border  w-100 p-1   undone "}
              value={description}
              readOnly={true}
            />
          ) : (
            <input className={isDone ? "edit rounded-lg border  w-100 p-1  " : "rounded-lg border  w-100 p-1  edit  "}
            defaultValue={description}
              type="text"
              onChange={(e) => {
                setedit_description(e.target.value);
              }}
            />
          )}

        </div>
        <div className="col-auto m-1 p-0 px-3 d-none">
        </div>
        <div className="col-auto m-1 p-0 todo-actions">
          <div className="row d-flex align-items-center justify-content-end">
            <h5 className="m-0 p-0 px-2">
            <button className="bi bi-pencil-fill btn btn-info m-0 p-2"
            onClick={() => {
              if (!edit_Task) {
                setTask(!edit_Task);
    
                setedit_description(description);
              } else {
                if (!edit_description) {
                  setTask(!edit_Task);
                } else {
                  dispatch(editToDo({id, description: edit_description}));
                  setedit_description("");
                  setTask(!edit_Task);
                }
              }
            }}
          >
          {edit_Task?"Update":"Edit"}          </button>
            </h5>
            <h5 className="m-0 p-0 px-2">
                   <button 
                   onClick={() => dispatch(deleteToDo(id))}
                   className="bi bi-trash  m-0 p-2  btn btn-danger " ></button>
            </h5>
          </div>
       
        </div>
      </div>
    </div>
  </div>
  );
};

export default ToDoItem;