import './styles.css';

document.getElementById('fetchButton').addEventListener('click', fetchData);
// const element = document.createElement('a');
// element.textContent = 'Hello World!';
// const body = document.querySelector('body');
// body.appendChild(element);

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayData(data) {
  const dataContainer = document.getElementById('data');
  dataContainer.innerHTML = '';
  data.forEach((item) => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
    dataContainer.appendChild(div);
  });
}
