import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Logo from '../assets/Image/glob.jpeg';
import Globelogo from '../assets/Image/globe-logo.png';
import Softwarelogo from '../assets/Image/soft-logo.png';
import Networklogo from '../assets/Image/network.png';
import Apps from '../assets/Image/apps.png';
const Service = () => {
  return (
    <div className="px-20 flex flex-col py-20 space-y-24 bg-gray-100">
      <div className="text-center space-y-2 w-[50%] mx-auto">
        <h1 className="text-center text-3xl font-bold text-indigo-800 uppercase">
          Our Services
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, tempore
        </p>
      </div>
      <div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="card border border p-2 text-center space-y-5 min-h-60 hover:bg-indigo-500 cursor-pointer transition-opacity">
                    <img src={Logo} className='w-[50%] hover:scale-110 transition duration-150 mx-auto'></img>
                    <h1 className="text-xl">Web Design</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card border border p-2 text-center space-y-5 min-h-60 hover:bg-indigo-500 cursor-pointer transition-opacity">
                    <img src={Globelogo} className='w-[50%] hover:scale-110 transition duration-150 mx-auto'></img>
                    <h1 className="text-xl">Web Development</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card border border p-2 text-center space-y-5 min-h-60 hover:bg-indigo-500">
                    <img src={Softwarelogo} className='w-[50%] hover:scale-110 transition duration-150 mx-auto'></img>
                    <h1 className="text-xl">Software Development</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card border border p-2 text-center space-y-5 min-h-60 hover:bg-indigo-500">
                    <img src={Networklogo} className='w-[50%] hover:scale-110 transition duration-150 mx-auto'></img>
                    <h1 className="text-xl">Network & Server</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card border border p-2 text-center space-y-5 min-h-60 hover:bg-indigo-500">
                    <img src={Apps} className='w-[50%] hover:scale-110 transition duration-150 mx-auto'></img>
                    <h1 className="text-xl">Apps Development</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Service;
