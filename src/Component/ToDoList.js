import React, {useState} from "react";
import {useSelector} from "react-redux";
import ToDoItem from "./ToDoItem";
import {DropdownButton,Dropdown} from 'react-bootstrap'
const ToDoList = () => {
  const ToDolist = useSelector((state) => state.ToDOReducer.ToDo);
  const [status, setstatus] = useState("all");

  return (
    <div className="tasklist">
    <div className="p-2 mx-4 border-black-25 border-bottom" />
    <div className="row m-1 p-3 px-5 justify-content-end">
      <div className="col-auto d-flex align-items-center">
        <label className="text-secondary my-2 pr-2 view-opt-label "><h5 className="filter">Filter</h5></label>
        <DropdownButton   title="ALL">
        <Dropdown.Item  onClick={() => setstatus("all")}>ALL</Dropdown.Item>
        <Dropdown.Item onClick={() => setstatus("done")}>DONE</Dropdown.Item>
        <Dropdown.Item onClick={() => setstatus("undone")}>UNDONE</Dropdown.Item>
      </DropdownButton>

      </div>
    </div>

      {status === "all"
        ? ToDolist.map((el) => (
            <ToDoItem
              key={el.id}
              description={el.description}
              id={el.id}
              isDone={el.isDone}
            />
          ))
        : status === "done"
        ? ToDolist
            .filter((el) => el.isDone)
            .map((el) => (
              <ToDoItem
                key={el.id}
                description={el.description}
                id={el.id}
                isDone={el.isDone}
              />
            ))
        :ToDolist
            .filter((el) => !el.isDone)
            .map((el) => (
              <ToDoItem
                key={el.id}
                description={el.description}
                id={el.id}
                isDone={el.isDone}
              />
            ))}
    </div>
  );
};

export default ToDoList;