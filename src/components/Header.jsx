import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold text-orange-500">MealMaster</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">Anasayfa</Link></li>
            <li><Link to="/create-diet">Diyet Oluştur</Link></li>
            <li><Link to="/diet-plans">Diyetler</Link></li>
            <li><Link to="/recipes">Yemek Tarifleri</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/auth">Log in / Sign Up</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
