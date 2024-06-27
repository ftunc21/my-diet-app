
import React from 'react';


import { Button, Rate } from 'antd';


import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();


    return (
        <div className="home flex items-center justify-center py-12 bg-gray-100">
            <div className="home-content flex flex-col lg:flex-row items-center lg:items-start max-w-6xl">
                <div className="text-content lg:w-1/2 p-5">

                    <h1 className="text-5xl font-bold text-green-700 mb-4">
                        Özel Diyet Listeleri ile <span className="text-orange-600">Sağlıklı Yaşamınıza</span> Adım Atın
                    </h1>
                    <p className="text-lg text-gray-700 mb-5">
                        MealMaster, kullanıcılarına özel diyet listeleri hazırlayarak sağlıklı yaşam yolculuğunuzda yanınızda. Kişisel bilgilerinizi alarak sizin için ideal günlük kalori miktarını belirleriz. Ardından, her öğün için belirlenen kalori sınırlarını aşmadan, kalorisi belli olan ürünleri diyet listenize ekleyebilirsiniz. Bu sayede, dengeli ve sağlıklı beslenme hedeflerinize kolaylıkla ulaşabilirsiniz. MealMaster ile diyet yapmayı keyifli ve sürdürülebilir bir hale getirin!
                    </p>

                    <div className="flex items-center mb-5">
                        <Rate disabled defaultValue={4.5} className="mr-2 text-yellow-500" />
                        <span className="text-gray-700 text-lg">14K değerlendirme ve artıyor!</span>
                    </div>

                    <div className="home-buttons flex space-x-4 mb-5">
                        <Button
                            onClick={() => navigate('/custom-diet')}
                            type="primary"
                            style={{ borderRadius: '25px', padding: '15px 30px', backgroundColor: '#ff5722' }}
                        >
                            Plan Oluştur
                        </Button>
                        <Button
                            onClick={() => navigate('/about-us')}
                            type="default"
                            style={{ borderRadius: '25px', padding: '15px 30px', color: '#ff5722', borderColor: '#ff5722' }}
                        >
                            Daha Fazlası
                        </Button>
                    </div>
                </div>
                {/* Resim alanı */}
                <div className="image-content lg:w-1/2 flex justify-center items-center object-center pt-10 mt-10">
                    <img src="public/images/furkan.png" alt="Healthy Food" className="rounded-lg w-full" />
                </div>
            </div>
        </div>
    );
};

// Bileşeni dışa aktarıyoruz
export default Home;
