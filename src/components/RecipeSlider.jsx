import React, { useContext } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { RecipesContext } from "../contexts/RecipesContext";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RecipeSlider() {
  const { recipes } = useContext(RecipesContext);
  const navigate = useNavigate();

  console.log(recipes);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-center text-2xl font-bold py-4 text-[#ff5722]">
        Popüler Yemek Tarifleri
      </h2>
      <Swiper
        spaceBetween={15}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-72"
      >
        {" "}
        {recipes.map((recipe, index) => (
          <SwiperSlide key={index}>
            <img className="rounded-full h-72" src={recipe.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-4">
        <button
          onClick={() => navigate("/recipes")}
          className="text-[#ff5722] underline border-none"
        >
          Daha fazlası için tıklayın
        </button>
      </div>
    </div>
  );
}
