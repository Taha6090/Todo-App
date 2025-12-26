import React, { useEffect, useState } from 'react'
import type { Todo } from '../../common/types/todo';
import { loadFromStorage } from '../../utils/storage';
import TodoItem from '../todo-item/todo-item';

const TodoList = ({ update }: { update: boolean }) => {

    const [listItem, setListItem] = useState<Todo[] | null>();

    useEffect(() => {
        let list = loadFromStorage<Todo[]>("todo")

        if (list != null) {
            setListItem(list);
        }
    }, [update])

    return (
        <div className='mt-12'>
            {
                listItem?.map((items) => (
                    <TodoItem key={items.id} todo={items} />
                ))
            }
        </div>
    )
}

export default TodoList