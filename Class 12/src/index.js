import './styles/main.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

document.getElementById('header').appendChild(Header());
Dashboard().then((dashboardElement) => {
  document.getElementById('dashboard').appendChild(dashboardElement);
});

// after code splitting
// import './styles/main.css';

// document.getElementById('header').appendChild(document.createElement('header'));

// document.addEventListener('DOMContentLoaded', async () => {
//   const { default: Header } = await import('./components/Header');
//   const { default: Dashboard } = await import('./components/Dashboard');

//   document.getElementById('header').appendChild(Header());
//   Dashboard().then(dashboardElement => {
//     document.getElementById('dashboard').appendChild(dashboardElement);
//   });
// });
