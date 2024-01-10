import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './useCases';

const ElementsIds = {
    TodoList: '.todo-list',
    TodoInput: '#todo-input',
    Filters: '.filters',
    ClearCompleted: '.clear-completed'
};

/**
 * Esta función renderiza la aplicación en el elemento indicado
 * @param {String} elementId El id del elemento donde se va a renderizar la aplicación
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementsIds.TodoList, todos);
    };

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).appendChild(app);
        displayTodos();
    })();

}