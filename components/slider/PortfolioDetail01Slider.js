// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function PortfolioDetail01Slider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.portfolio-gallery-pagination'
                }}
                // navigation={{
                //     prevEl: ".prev",
                //     nextEl: ".next",
                // }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/images/portfolio-gallery-01.jpeg" alt="Portfolio" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/images/portfolio-gallery-02.jpeg" alt="Portfolio" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/images/portfolio-gallery-03.jpeg" alt="Portfolio" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <img src="/assets/images/portfolio-gallery-04.jpeg" alt="Portfolio" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination portfolio-gallery-pagination" />
        </>
    )
}
