import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
   // Встановлюємо початковий стан для динамічного класу навігаційного меню
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   // Функція для зміни стану відкриття/закриття меню
   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };

  return (
<header className={`Header ${isMenuOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/education">Освіта</Link></li>
          <li><Link to="/social-issues">Соціальні питання</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
