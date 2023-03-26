import { Flex, Spacer } from "./components"
import { useState, useEffect } from "react";
import { Container } from "./components/styles/Container";
import { Input } from "./components/styles/Input";
import { Button } from "./components/styles/Button";
import { Item } from "./components/styles/Item";

function App() {
  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState([]);

const addTask = () =>{
  if(!task) return alert('Add a task');
  const newTask = {
    id: Math.random(),
    task: task,
    checked: false,
  };

  setListTask([...listTask, newTask]);
  setTask('');
};

const removeTask = (id) => {
  const newList = listTask.filter((task) => task.id != id);
  setListTask(newList);
};

const toggleChecked =  (id, checked) => {
  const index = listTask.findIndex((task) => task.id == id);
  const newList = listTask;
  newList[index].checked = !checked;
  setListTask([...newList]);
};

return (
  <Container>
    <h1 className='title'>
      TO DO LIST
    </h1>
    <Spacer />

    <Flex direction='row'>
      <Input value={task} placeholder="| Type your task..." onChange={(e) => setTask(e.target.value)}/>
      <Button onClick={addTask}>Add</Button>
    </Flex>
    <Spacer margin='16px' />

    <ul>
      {listTask.map((task) => (
        <>
          <Item checked={task.checked} key={task.id}>
            <p>{task.task}</p>
            <Flex direction='row'>
              <button onClick={() => removeTask(task.id)}><i class='bx bx-trash'></i></button>
              <button onClick={() => toggleChecked(task.id, task.checked)}><i class='bx bx-check'></i></button>
            </Flex>
          </Item>
          <Spacer margin='12px' />
        </>
      ))}
    </ul>
  </Container>
);}

export default App
