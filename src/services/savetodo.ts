import { toast } from "sonner";
import type { Todo } from "../common/types/todo"
import { loadFromStorage, saveToStorage } from "../utils/storage";


const saveTodo = (todo: Todo) => {
    const todoList = loadFromStorage<Todo[]>("todo") ?? [];

    const updatedList = [...todoList, todo];

    saveToStorage("todo", updatedList);
    toast("Todo Created", {
        description: String(new Date(todo.id)),
        // action: {
        //     label: "Undo",
        //     onClick: () => console.log("Undo"),
        // },
    })

}

export default saveTodo;