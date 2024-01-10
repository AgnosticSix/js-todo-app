import { Todo } from "../models/todo.model";
import { createTodoHtml } from "./create-todo-html";

let element;

/**
 * Esta función renderiza los to-dos en el elemento indicado
 * @param {String} elementId El id del elemento donde se va a renderizar la aplicación
 * @param {Todo} todos Los to-dos a renderizar
 */
export const renderTodos = (elementId, todos = []) => {

    if(!element) element = document.querySelector(elementId);
    if(!element) throw new Error(`Element with id ${elementId} not found`);

    element.innerHTML = '';

    todos.forEach(todo => {
        element.append(createTodoHtml(todo))
    });

}