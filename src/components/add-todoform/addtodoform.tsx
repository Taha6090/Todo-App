import React, { useState } from 'react'
import type { Todo } from '../../common/types/todo';
import saveTodo from '../../services/savetodo';

const Addtodoform = () => {


    const [text, setText] = useState<string>('')

    const handleform = (e: React.FormEvent) => {
        e.preventDefault();
        let todo: Todo = {
            id: Date.now(),
            task: text,
            isCompleted: false,
        }
        // console.log(todo);
        saveTodo(todo);
    }


    return (
        <div>
            <form onSubmit={handleform}>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} type="text" name="" id="" value={text} />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Addtodoform