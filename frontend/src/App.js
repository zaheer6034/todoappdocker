import React, { useState, useEffect } from 'react';
import './App.css';
import TodoListView from './TodoListView/TodoListView';
import axios from 'axios';

function App() {
  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8080/api/todo')
      .then(res => {
        setTodoList(res.data)
      })
  });

  const addTodoHandler = () => {
    axios.post('http://localhost:8080/api/todo/', { 'title': title, 'description': desc })
      .then(res => console.log(res))
  }
  const updateTodoHandler = () => {
    axios.put(`http://localhost:8080/api/todo/${title}/${desc}`)
      .then(res => console.log(res))
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoListView todoList={todoList} />
      <p>Add todo</p>
      <p><input onChange={event => setTitle(event.target.value)} placeholder='Title' /> <input onChange={event => setDesc(event.target.value)} placeholder='Description' /><span><button onClick={addTodoHandler} style={{ color: 'green' }}>Add</button></span><span><button onClick={updateTodoHandler} style={{ color: 'green' }}>Update</button></span></p>
    </div>
  );
}

export default App;