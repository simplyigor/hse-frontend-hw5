/* Запрос для получения случайной цитаты от внешнего API */
export const getRandomQuote = async () => {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  return data;
};

/* Запрос для добавления своей цитаты в локальную БД */
export const addQuote = async (title, author) => {
  const response = await fetch('http://localhost:8000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, author })
  });
  const data = await response.json();
  return data;
};

/* Запрос для получения последней цитаты из локальной БД */
export const getLatestQuote = async () => {
  const response = await fetch('http://localhost:8000/posts');
  const data = await response.json();
  return data[data.length - 1];
};

/* Запрос для получения всех данных из локальной БД */
export const handleShowQuotes = async () => {
  const response = await fetch('http://localhost:8000/posts');
  const data = await response.json();
  let quotes = '';
  data.forEach((quote) => {
    quotes += `${quote.title} - ${quote.author}\n`;
  });
  alert(quotes);
};





