const Dashboard = async () => {
  const dashboardElement = document.createElement('main');
  dashboardElement.innerHTML = '<h2>Loading...</h2>';

  try {
    const weatherResponse = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=70b5367789ee8fdf627794a88994b7c2'
    );
    const weatherData = await weatherResponse.json();

    const newsResponse = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=091caa347e074f4d8bcad31b37c64d7f'
    );
    const newsData = await newsResponse.json();

    dashboardElement.innerHTML = `
        <h2>Weather in Dhaka</h2>
        <p>Temperature: ${Number(weatherData.main.temp / 10).toFixed(1)} °C</p>
        <h2>Top News</h2>
        <ul>
          ${newsData.articles.map((article) => `<li>${article.title}</li>`).join('')}
        </ul>
      `;
  } catch (error) {
    dashboardElement.innerHTML = '<h2>Error loading data</h2>';
    console.error('Error fetching data:', error);
  }

  return dashboardElement;
};

export default Dashboard;
