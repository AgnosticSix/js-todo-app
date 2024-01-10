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

const initStore = () => {
    console.log(state);
    console.log('initStore 🥑');
};

export default {
    initStore
};