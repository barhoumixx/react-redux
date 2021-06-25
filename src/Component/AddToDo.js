import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addToDo} from "../Redux/Actions/ToDo_Action";

const AddToDo = () => {
  const dispatch = useDispatch();
  const [addvalue, setaddvalue] = useState("");
  return (
    <div className="row m-1 p-3"> 
    <div className="col col-11 mx-auto">
      <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
              <div className="col">
    <input onChange={(e) => setaddvalue(e.target.value)} value={addvalue} className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="Add new .." />
    </div>
    <div className="col-auto px-0 mx-0 mr-2">

      <button className="btn btn-primary"
        onClick={() => {
            dispatch(
              addToDo({
                id: Math.random(),
                description: addvalue,
                isDone: false,
              })
            );
            setaddvalue("");
        }}
      >
        ADD
      </button>
      </div>
  
  
  
      </div>
      </div>
          </div>
            );
};

export default AddToDo;