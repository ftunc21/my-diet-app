import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate();
    return (
        <div className='aboutus flex items-center justify-center py-12 bg-gray-100'>
            <div className='aboutus-content flex flex-col lg:flex-row items-center lg:items-start max-w-6xl'>
                <div className='text-content lg:w-1/2 p-5'>
                    <h1 className='text-6xl font-extrabold text-green-700 mb-4'>
                        Biz <span className='text-orange-600'>Kimiz?</span>
                    </h1>
                    <p className='text-lg text-gray-700 mb-5'>
                        MealMaster'a hoş geldiniz! Burası, kişiselleştirilmiş diyet planları, kalori takibi ve size özel lezzetli tarif fikirleri sunan nihai destinasyonunuz! Sağlıklı bir yaşam tarzının hem erişilebilir hem de keyifli olması gerektiğine inanıyoruz. Bu yüzden, günlük kalori alımınızı yönetmenize yardımcı olacak ve çeşitli lezzetli yemek seçenekleri sunacak bir platform oluşturduk. İster kilo vermeyi, ister kas yapmayı, isterse dengeli bir beslenme düzeni korumayı hedefleyin, web sitemiz size özel uyarlanmış diyet planlarıyla bireysel tercihlerinize ve beslenme hedeflerinize uygun çözümler sunar.
                    </p>
                    <p className='text-lg text-gray-700 mb-5'>
                        Misyonumuz, sağlıklı yaşam yolculuğunuzun her adımında sizi bilgilendirmek ve donanımlı hale getirmek. Diyetler ve Tarifler sayfalarımızda, tüm damak tatlarına ve diyet gereksinimlerine hitap eden pek çok çeşitli ve heyecan verici tarif keşfedeceksiniz. Pratik ve kolay yemeklerden gurme lezzetlere kadar, koleksiyonumuz sayesinde sağlıklı ve lezzetli seçeneklerden asla mahrum kalmayacaksınız. MealMaster'da bize katılın ve daha sağlıklı, mutlu bir siz için dönüşüm yolculuğuna çıkın. Birlikte, sağlık hedeflerinizi lezzetli bir gerçekliğe dönüştürebiliriz!
                    </p>
                </div>
                <div className='image-content lg:w-1/2 flex justify-center items-center object-center p-5 pt-10 mt-40'>
                    <img src='public/images/chef2.jpg' alt='Healthy Food' className='rounded-lg w-full ' />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
