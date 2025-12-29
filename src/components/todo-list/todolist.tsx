// import { useEffect, useState } from 'react'
// import type { Todo } from '../../common/types/todo';
// import { loadFromStorage } from '../../utils/storage';
// import TodoItem from '../todo-item/todo-item';

// const TodoList = ({ update }: { update: boolean }) => {

//     const [listItem, setListItem] = useState<Todo[] | null>();

//     useEffect(() => {
//         let list = loadFromStorage<Todo[]>("todo")

//         if (list != null) {
//             setListItem(list);
//         }
//     }, [update])

//     return (
//         <div className='mt-12'>
//             {
//                 listItem?.map((items) => (
//                     <TodoItem key={items.id} todo={items} />
//                 ))
//             }
//         </div>
//     )
// }

// export default TodoList

import { useEffect, useState } from 'react'
import type { Todo } from '../../common/types/todo'
import { loadFromStorage } from '../../utils/storage'
import TodoItem from '../todo-item/todo-item'
import { deleteTodo } from '@/services/todo'


const TodoList = ({ update }: { update: boolean }) => {
  const [listItem, setListItem] = useState<Todo[]>([])

  useEffect(() => {
    const list = loadFromStorage<Todo[]>("todo")
    if (list) setListItem(list)
  }, [update])

  const handleDelete = (id: number | string) => {
    deleteTodo(id)

    // Update UI instantly (no refresh needed)
    setListItem(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <div className='mt-12'>
      {listItem.map(item => (
        <TodoItem
          key={item.id}
          todo={item}
          onDelete={handleDelete}
        />
      ))}
    </div>
  )
}

export default TodoList
