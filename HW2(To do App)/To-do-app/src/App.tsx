import Form from './component/Form/form.component'
import './App.css'
import TodoData from './component/TodoData/TodoData.component'
import AllToDos from './component/AllToDos/AllToDos.component'
import { useState } from 'react'
import { ItodoItem } from './component/types'

function App() {
const [todos, setToDos] = useState<ItodoItem []>([]);
const handleNewItem = (item : ItodoItem) => {
  setToDos([...todos, item]);
}
const handleTaskToggle = (e : React.ChangeEvent<HTMLInputElement> ) =>{
  const itemId = e.target.dataset["itemId"];
  const newTodos = todos.map(item => {
    if(item.id === Number(itemId)){
      return {...item, isDone : !item.isDone}
    }
    return item;
    
  });
  setToDos(newTodos);
}
const handleDelete = (index : number) =>{
  setToDos([...todos.slice (0, index), ...todos.slice(index + 1, todos.length)])
} 
  return (
    <div className='to-do-wrapper'>
      <h1>To-Do-App - <span className='time'>{new Date().toDateString()}</span></h1>
      <Form onSubmit={handleNewItem}/>
      <TodoData items = {todos}/>
      <AllToDos items = {todos} onToggle={handleTaskToggle} onDelete={handleDelete}/>
    </div>
  )
}

export default App
