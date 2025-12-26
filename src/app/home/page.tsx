import React, { useState } from 'react'
import Addtodoform from '../../components/add-todoform/addtodoform'
import TodoList from '../../components/todo-list/todolist'

const Home = () => {

  const [update, setUpdate] = useState<boolean>(false);
  

  return (
    <div className="px-12">
      <Addtodoform updateList={setUpdate} />
      <TodoList update={update}/>
    </div>
  )
}

export default Home