import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-orange-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-green-700 font-poppins mb-4">
            Ücretsiz Diyet Planınızı Hemen Oluşturun
          </h1>
          <p className="text-lg text-gray-700 font-poppins mb-8">
            Sağlıklı yaşamak artık zor değil. MealMaster ile size özel ücretsiz diyet planınızı oluşturun.
          </p>
          <div className="mb-8 lg:mb-0">
            <Link to="/create-diet" className="bg-orange-500 text-white py-2 px-6 rounded-full mr-4">
              Plan Oluştur
            </Link>
            <Link to="/learn-more" className="border border-orange-500 text-orange-500 py-2 px-6 rounded-full">
              Daha Fazlası
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src="/images/healthyfood.jpg"
            alt="Healthy Food"
            className="rounded-lg shadow-lg max-w-xs lg:max-w-xl h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
