import Nav from './Nav'
import './index.css'
import Todos from './Todos'
import { useState, useEffect } from 'react'
import React from 'react'
import AddToDo from './AddToDo'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './About'

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  function onClick(todo) {
    console.log("pressed " + todo.title);
    setTodos(
      todos.filter((e) => {
        return e !== todo
      })
    )
  }


  var [todos, setTodos] = useState(initTodo);
  function addTodo(title, desc) {
    console.log("pressed add");
    if (title === "" || desc === "") {
      alert("Fill details correctly");
    }
    else {
      let newList = todos.concat({
        key: todos.length + 1,
        title: title,
        desc: desc
      })
      setTodos(newList);
    }
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Router>
        <Nav title="ToDo List" />
        <Routes>
          <Route exact path="/" element={<>
            <Todos todos={todos} onClick={onClick} />
            <AddToDo addToDofun={addTodo} />
          </>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App