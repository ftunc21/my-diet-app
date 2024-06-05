import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useNavigate } from 'react-router-dom';

const images = [
    'public/images/furkan.png',
    'public/images/images.jpg',
    'public/images/pilav.jpg',
    'public/images/indir(2).jpg',
    'public/images/images.jpg',
];

const DietSlider = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-center text-2xl font-bold py-4 text-[#ff5722]">Popüler Yemek Tarifleri</h2>
      <Slide easing="ease">
        {images.map((each, index) => (
          // Her slaytı 3 resim içerecek şekilde gruplandırın
          <div key={index} className="each-slide flex" style={{ height: '300px' }}>
            <div style={{ width: '33.3333%', padding: '5px' }}>
              <div style={{ 'backgroundImage': `url(${images[(index * 3) % images.length]})`, 'backgroundSize': 'cover', 'backgroundPosition': 'center', 'borderRadius': '50%', 'height': '100%' }}></div>
            </div>
            <div style={{ width: '33.3333%', padding: '5px' }}>
              <div style={{ 'backgroundImage': `url(${images[(index * 3 + 1) % images.length]})`, 'backgroundSize': 'cover', 'backgroundPosition': 'center', 'borderRadius': '50%', 'height': '100%' }}></div>
            </div>
            <div style={{ width: '33.3333%', padding: '5px' }}>
              <div style={{ 'backgroundImage': `url(${images[(index * 3 + 2) % images.length]})`, 'backgroundSize': 'cover', 'backgroundPosition': 'center', 'borderRadius': '50%', 'height': '100%' }}></div>
            </div>
          </div>
        ))}
      </Slide>
      <div className="text-center mt-4">
        <button onClick={() => navigate('/recipes')} className="text-[#ff5722] underline border-none">
          Daha fazlası için tıklayın
        </button>
      </div>

    </div>
  );
};

export default DietSlider;
