import React, { useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import List from "./List";

const Todo = () => {
  const [todo, setTodo] = useState("");
  //   console.log(todo);

  const [add, setAdd] = useState([]);
  //   console.log(add);

  const [validation, setValidation] = useState("");

  const setData = (e) => {
    // console.log(e.target.value);
    setTodo(e.target.value);
  };

  const additems = () => {
    if (todo === "") {
      setValidation("Enter Your Todo");
    } else {
      setAdd(() => {
        return [...add, todo]; // using spread operator
      });
      setTodo("");
      setValidation("");
    }
  };

  const dltitems = (id) => {
    const dltdata = add.filter((el, ind) => {
      return ind !== id;
    });
    setAdd(dltdata);
  };

  return (
    <>
      <div className="main-container">
        <div className="todo-box">
          <img src="/book.png" alt="todoimg" className="todoimg" />
          <h2 className="heading">Write Your Todo List Here</h2>
          <h3 className="validation">{validation}</h3>
          <div className="input-container">
            <input
              type="text"
              name="todo"
              onChange={setData}
              value={todo}
              placeholder="Enter Your Task"
            />
            <Tooltip title="Add">
              <Button className="addbtn" onClick={additems}>
                <AddIcon />
              </Button>
            </Tooltip>
          </div>
          <div className="store-container">
            <ul>
              {add.map((ele, index) => {
                return (
                  <>
                    <List id={index} text={ele} dltitems={dltitems} />
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

// Logic to delete items
// data = 1,2,3,4  delete = 2
// output= 1,3,4
