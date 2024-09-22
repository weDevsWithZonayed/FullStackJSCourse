const btnEl = document.getElementById('fetchButton');

const displayData = (data) => {
  const dataContainer = document.getElementById('data');

  data.forEach((item) => {
    const divEl = document.createElement('div');
    divEl.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.body}</p>
    `;
    dataContainer.appendChild(divEl);
  });
};

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  displayData(data);
};

btnEl.addEventListener('click', fetchData);
