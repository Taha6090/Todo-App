import { toast } from "sonner";
import type { Todo } from "../common/types/todo";
import { loadFromStorage, saveToStorage } from "../utils/storage";

export const saveTodo = (todo: Todo) => {
    const todoList = loadFromStorage<Todo[]>("todo") ?? [];
    saveToStorage("todo", [...todoList, todo]);

    toast("Todo Created", {
        description: new Date(todo.id).toLocaleString(),
    });
};

export const deleteTodo = (id: number | string) => {
    const todoList = loadFromStorage<Todo[]>("todo") ?? [];

    const updatedList = todoList.filter(todo => todo.id !== id);

    if (todoList.length === updatedList.length) {
        toast.error("Todo not found");
        return;
    }

    saveToStorage("todo", updatedList);
    toast("Todo Deleted");
};
