// src/components/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <h1>Özel Diyet Listeleri ile <span className="highlight">Sağlıklı Yaşamınıza</span> Adım Atın </h1>
                <p>

                  MealMaster, kullanıcılarına özel diyet listeleri hazırlayarak sağlıklı yaşam yolculuğunuzda yanınızda. Kişisel bilgilerinizi alarak sizin için ideal günlük kalori miktarını belirleriz. Ardından, her öğün için belirlenen kalori sınırlarını aşmadan, kalorisi belli olan ürünleri diyet listenize ekleyebilirsiniz. Bu sayede, dengeli ve sağlıklı beslenme hedeflerinize kolaylıkla ulaşabilirsiniz. MealMaster ile diyet yapmayı keyifli ve sürdürülebilir bir hale getirin!
                </p>
                <div className="home-buttons">
                    <button className="view-plans">Planları Görüntüle</button>


                    <button className="learn-more">Daha Fazlası</button>
                </div>
                <div className="home-features">
              
                   
                </div>
            </div>
            <div className="home-image">
                <img src="public\images\furkan.png" alt="Healthy Food" />
            </div>
        </div>
    );
};

export default Home;
