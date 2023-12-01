import { useState } from 'react';
import { Title } from './components/Title';
import { Description } from './components/Description';
import { Figure } from './components/Figure';
import { Button, ResetButton, ShowButton} from './components/Button';
import { getRandomQuote, addQuote, getLatestQuote, handleShowQuotes } from './api';
import { Input } from './components/Input';

function App() {
  const [title, setQuote] = useState('A random quote will be displayed here');
  const [author, setAuthor] = useState('Author');
  const [quoteDb, setQuoteDb] = useState('The most recent quote will be displayed here')
  const [authorDb, setAuthorDb] = useState('Author');

  /* Выведение случайной цитаты из внешнего API – кнопка Gimme a quote */
  const handleRandomQuote = async () => {
    const data = await getRandomQuote();
    setQuote(data.content);
    setAuthor(data.author);
  };

  /* Добавление новой цитаты и автора в БД – кнопка Add quote */
  const handleAddQuote = async () => {
    const quoteInput = document.getElementById('userQuote');
    const title = quoteInput.value;
    const author = prompt('Enter the author name:');
    await addQuote(title, author);
    quoteInput.value = '';
  };

  /* Выведение последней цитаты и автора из БД – кнопка Get latest quote */
  const handleUserQuotes = async () => {
    const data = await getLatestQuote();
    setQuoteDb(data.title);
    setAuthorDb(data.author);
  };

  /* Сброс страницы до дефолтных значений – кнопка Reset page */
  const resetState = async () => {
    setQuote('A random quote will be displayed here');
    setAuthor('Author');
    setQuoteDb('The most recent quote will be displayed here');
    setAuthorDb('Author');  
  };  

  return (
    <div className='container'>

      {/* Секция Random quote */} 
      <Title title = "Random quote 📌" />
      <Description description = "Here you can get a random quote. To retrieve data from an external API - api.quotable.io - we have used method GET:" />
      <Figure quote = {title} author = {author} /> 
      <Button onClick = {handleRandomQuote} buttonName = "Gimme a quote" />

      {/* Секция Add quote */} 
      <Title title = "Add quote ✍🏼" />
      <Description description = "You can add your own quotes here. To add new entries to the local server, we have used method POST:" />
      <Input />
      <Button onClick = {handleAddQuote} buttonName = "Add quote" />

      {/* Секция My latest quote */}
      <Title title = "My latest quote 💬" />
      <Description description = "You can see the most recent quotes here. To retrieve data from the local server, we have used method GET:" />
      <Figure quoteDb = {quoteDb} authorDb = {authorDb} />
      <Button onClick = {handleUserQuotes} buttonName = "Get latest quote" />
      <ShowButton onClick={handleShowQuotes} buttonName = "Show all quotes" />
      <ResetButton onClick = {resetState} />

    </div>
  );
}

export default App;