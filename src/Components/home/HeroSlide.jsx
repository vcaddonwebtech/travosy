import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import img1 from "../../assets/blog/1.jpg"
import img2 from "../../assets/blog/2.jpg"
import img3 from "../../assets/blog/3.jpg"
import img4 from "../../assets/blog/4.jpg"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SearchBar from './SearchBar';

const slide_img = [img1 ,img2 ,img3,img4]
export default function HeroSlide() {
  return (
    <>
    <Swiper
      // Install modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      >
    {slide_img.map((imgitem,i)=>(
        <SwiperSlide>
        <img src={imgitem} alt={"slide" + i} className='w-screen h-screen'/>
      </SwiperSlide>

))}
    </Swiper>
    <SearchBar></SearchBar>
</>
  );
}
