import React, { useState, type Dispatch, type SetStateAction } from 'react'
import type { Todo } from '../../common/types/todo';
import saveTodo from '../../services/savetodo';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const Addtodoform = ({ updateList }: { updateList: Dispatch<SetStateAction<boolean>>}) => {


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
        updateList(prev => !prev)
    }


    return (
        <div className="flex justify-center mt-6">
            <form
                onSubmit={handleform}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md border w-full max-w-md"
            >
                <Input
                    placeholder="Add a task..."
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setText(e.target.value)
                    }
                    type="text"
                    value={text}
                    className="flex-1"
                />

                <Button type="submit" className="px-5">
                    Add
                </Button>
            </form>
        </div>

    )
}

export default Addtodoform