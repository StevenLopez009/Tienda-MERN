import { Swiper, SwiperSlide } from "swiper/react";  // Importa los componentes de Swiper
import "swiper/css"; // Importa los estilos de Swiper

function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={10}  // Espacio entre los slides
      slidesPerView={3}  // Muestra 3 slides por vez
      onSlideChange={() => console.log("Cambio de slide")}  // Llamado cuando el slide cambia
      onSwiper={(swiper) => console.log(swiper)}  // Llamado cuando se inicializa el swiper
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      {/* Puedes agregar más slides aquí */}
    </Swiper>
  );
}

export default SwiperComponent;

