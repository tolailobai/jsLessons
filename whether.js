




function getWeather(city) {
  const apiKey = "your-api-key"; 
// Формируем URL с нужным городом и ключом API
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`; 
// Делаем асинхронный запрос на сервер
  return fetch(apiUrl) 
    .then(response => {
  // Проверяем, не вернул ли сервер ошибку
      if (!response.ok) { 
   // Если да, то вызываем ошибку
        throw new Error("Ошибка при получении данных"); 
      }
    // Преобразуем ответ в JSON
      return response.json(); 
    })
    .then(data => {
      // Достаём из ответа нужные данные: город, температуру и описание погоды
      return `Температура в ${data.location.name}: ${data.current.temp_c}°C, ${data.current.condition.text}`;
    });
}
// Используем функцию и обрабатываем промис
getWeather("Moscow")
// Если запрос успешен, выводим данные в консоль
  .then(result => console.log(result)) 
// Если произошла ошибка, выводим её в консоль
  .catch(error => console.error("Ошибка:", error));