import type { Todo } from "../common/types/todo"



const saveTodo = (todo: Todo) => {
    const todoList: any = localStorage.getItem("todo")

    if (todoList) {
        const list: Todo[] = JSON.parse(todoList);
        list.push(todo);
        localStorage.setItem("todo", JSON.stringify(list))
    }
    else {
        const list: Todo[] = [];
        list.push(todo);
        localStorage.setItem("todo", JSON.stringify(list))
    }
}

export default saveTodo;