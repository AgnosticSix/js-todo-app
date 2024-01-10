import { Todo } from '../todos/models/todo.model';

const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
};

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del poder'),
        new Todo('Piedra del espacio'),
        new Todo('Piedra de la mente'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra de la realidad'),
    ],
    filter: Filters.All
};

/**
 * Esta función inicializa el Storage
 */
const initStore = () => {
    // console.log(state);
    // console.log('initStore 🥑');
};

/**
 * Esta función retorna lo que se encuentra en el Storage
 */
const loadStore = () => {
    throw new Error('Not implemented');
};

/**
 * Esta función retorna los to-dos del Storage
 * @param {String} filter filtro a aplicar
 * @returns {Array} todos
 */
const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return state.todos;
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not valid-`);
    }
};

/**
 * Esta función guarda un to-do en el Storage
 * @param {String} description descripcion del to-do
 */
const addTodo = (description) => {
    if(!description) throw new Error('Not implemented');
    state.todos.push(new Todo (description));
};

/**
 * Esta función cambia el estado de un to-do
 * @param {String} todoId Todo identifier
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if(todo.id === todoId) todo.done = !todo.done;
        return todo;
    });
};

/**
 * Esta función elimina un to-do del Storage
 * @param {String} todoId todo identifier
 */
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
};

/**
 * Esta función elimina todos los to-dos completados
 */
const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);
};

/**
 * Esta función cambia el filtro actual
 * @param {Filters} newFilter nuevo filtro a aplicar
 */
const setFilter = (newFilter = Filters.All) => {
    Object.values(Filters).includes(newFilter) 
            ? state.filter = newFilter 
            : state.filter = Filters.All;
}

/**
 * Esta función retorna el filtro actual
 * @returns {Filters} filtro actual
 */
const getCurrentFilter = () => {
    return state.filter;
};

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
};