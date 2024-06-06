// src/components/Home.jsx
import React from 'react';
import { Button } from 'antd';


const Home = () => {
    return (
        <div className="home flex justify-between items-center p-12 bg-gray-100">
            <div className="home-content max-w-1/2">
                <h1 className="text-4xl text-green-700">
                    Özel Diyet Listeleri ile <span className="highlight text-orange-600">Sağlıklı Yaşamınıza</span> Adım Atın
                </h1>
                <p className="my-5 text-lg text-gray-700">
                    MealMaster, kullanıcılarına özel diyet listeleri hazırlayarak sağlıklı yaşam yolculuğunuzda yanınızda. Kişisel bilgilerinizi alarak sizin için ideal günlük kalori miktarını belirleriz. Ardından, her öğün için belirlenen kalori sınırlarını aşmadan, kalorisi belli olan ürünleri diyet listenize ekleyebilirsiniz. Bu sayede, dengeli ve sağlıklı beslenme hedeflerinize kolaylıkla ulaşabilirsiniz. MealMaster ile diyet yapmayı keyifli ve sürdürülebilir bir hale getirin!
                </p>
                <div className="home-buttons my-5">
                    <Button type="primary" className="view-plans mr-4 mb-5" style={{ borderRadius: '25px', padding: '15px 30px' }}>Planları Görüntüle</Button>
                    <Button type="default" className="learn-more" style={{ borderRadius: '25px', padding: '15px 30px', color: '#ff5722', borderColor: '#ff5722' }}>Daha Fazlası</Button>
                </div>
                <div className="home-features my-5">
                    {/* Diğer içerikler buraya eklenebilir */}
                </div>
            </div>
            <div className="home-image">
                <img src="public/images/furkan.png" alt="Healthy Food" className="rounded-lg max-w-full" />
            </div>
        </div>
    );
};

export default Home;
