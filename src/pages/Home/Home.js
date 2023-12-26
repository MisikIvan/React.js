import React from 'react';
import './Home.css';

function Home({pageTitle}) {
  return (
    <div className="Home">
      <h1>{pageTitle}</h1>
      <h1>Ласкаво просимо на головну сторінку</h1>
      <p>Тут ви знайдете інформацію про соціальні питання та освітні ініціативи.</p>
      <p>Проведіть час, щоб ознайомитися з різноманітністю тем та ресурсів, які пропонує наш веб-ресурс.</p>
    </div>
  );
}

export default Home;
