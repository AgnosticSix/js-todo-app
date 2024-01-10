import html from './app.html?raw';

/**
 * Esta función renderiza la aplicación en el elemento indicado
 * @param {String} elementId El id del elemento donde se va a renderizar la aplicación
 */
export const App = (elementId) => {

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).appendChild(app);
    })();

}