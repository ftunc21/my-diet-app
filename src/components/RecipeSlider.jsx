// React kütüphanesini ve gerekli bileşenleri import ediyoruz
import React, { useContext } from "react";

// Swiper kütüphanesinden bazı modülleri ve bileşenleri import ediyoruz
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Swiper kütüphanesi için gerekli CSS dosyalarını import ediyoruz
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// useNavigate fonksiyonunu react-router-dom kütüphanesinden import ediyoruz
import { useNavigate } from "react-router-dom";

// Tarifler bağlamını (context) import ediyoruz
import { RecipesContext } from "../contexts/RecipesContext";

// RecipeSlider adlı bileşeni tanımlıyoruz
export default function RecipeSlider() {
  // Tarifler bağlamını (context) kullanarak recipes değerini alıyoruz
  const { recipes } = useContext(RecipesContext);

  // Yönlendirme fonksiyonunu kullanmak için useNavigate hook'unu çağırıyoruz
  const navigate = useNavigate();

  // Tarifleri konsola yazdırıyoruz (debugging amaçlı)
  console.log(recipes);

  // Bileşenin render edileceği JSX yapısını döndürüyoruz
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-center text-2xl font-bold py-4 text-[#ff5722]">
        Popüler Yemek Tarifleri
      </h2>
      <Swiper
        spaceBetween={15} // Slaytlar arasındaki boşluk
        slidesPerView={3} // Aynı anda gösterilecek slayt sayısı
        pagination={{
          clickable: true, // Sayfalama düğmeleri tıklanabilir olsun
        }}
        modules={[Pagination]} // Kullanılan modüller
        className="mySwiper h-72"
      >
        {/* Tarifleri map fonksiyonu ile döngüye sokuyoruz */}
        {recipes.map((recipe, index) => (
          <SwiperSlide key={index}>
            <img className="rounded-full h-72" src={recipe.image} alt={recipe.title} /> {/* Tarif resmini gösteriyoruz */}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-4">
        <button
          onClick={() => navigate("/recipes")} // Butona tıklandığında recipes sayfasına yönlendiriyoruz
          className="text-[#ff5722] underline border-none"
        >
          Daha fazlası için tıklayın
        </button>
      </div>
    </div>
  );
}
