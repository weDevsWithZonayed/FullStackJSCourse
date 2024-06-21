import './styles.css';

const appElement = document.querySelector('.app');
const header = document.createElement('h1');
header.textContent = 'Hello Webpack';
appElement.appendChild(header);

console.log('Hello, Webpack!');

// if (module.hot) {
//   module.hot.accept();
// }
