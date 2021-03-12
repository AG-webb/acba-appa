import React, {useState} from 'react';
import 'swiper/swiper.scss';
import './Slider.scss';
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay } from 'swiper';
import arrowLeft from '../../assets/img/icons/arrow-left.svg';
import arrowRight from '../../assets/img/icons/arrow-right.svg';
import sliderImg from '../../assets/img/slider.jpg';
import pen from '../../assets/img/icons/pen.svg';
import Button from '../Button/Button';

SwiperCore.use([Navigation, Pagination, Autoplay ]);

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const [timerProgress, setTimerProgress] = useState(0);

    let generateSlides = () => {
        let slides = [];

        for(let i = 0; i < 4; i++) {
            slides.push(
                <SwiperSlide key={i}>
                    <div className="info-slider__title h1-font">
                        ԱՊՊԱ պայմանագրի 
                        <span>ԱՌՑԱՆՑ </span> ԿՆՔՈՒՄ
                    </div>
                    <div className="desc info-slider__desc">
                        Բարի գալուստ Հայաստանի ապահովագրական ընկերությունների
                        Ավտոապահովագրական մեկ պատուհան։ Համակարգը հնարավորություն
                        է տալիս կատարել ԱՊՊԱ-ին առնչվող բոլոր գործողությունները
                        միասնական առցանց համակարգում։ {i + 1}
                    </div>
                </SwiperSlide>
            );
        }
        return slides;
    }

    return (
        <div className="main-sliders">
            <div className="dots-decore dots-decore_orange"></div>
            <div className="main-sliders__wrap row md-flex-dir-row-reverse">   
                <div className="column sm-14 md-6 lg-7">
                    <div className="img-slider">
                        <Swiper
                            className="img-slider__wrap"
                            slidesPerView={1}
                            allowTouchMove={false}
                            simulateTouch={false}
                            speed={500}
                            autoplay={{
                                delay: 5000,
                            }}
                            navigation={{
                                nextEl: '.slider-control__btn_next',
                                prevEl: '.slider-control__btn_prev',
                            }}
                            pagination={{
                                clickable: true,
                                el: '.slider-control__pagination',
                            }}
                        >
                            <SwiperSlide>
                                <img src={sliderImg} alt="slider picture"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderImg} alt="slider picture"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderImg} alt="slider picture"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderImg} alt="slider picture"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="column sm-14 md-8 lg-6">
                    <Swiper
                        className="info-slider"
                        slidesPerView={1}
                        allowTouchMove={false}
                        simulateTouch={false}
                        speed={500}
                        spaceBetween={30}
                        autoplay={{
                            delay: 5000,
                        }}
                        navigation={{
                            nextEl: '.slider-control__btn_next',
                            prevEl: '.slider-control__btn_prev',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.slider-control__pagination',
                        }}
                        onInit={() => {
                            setTimerProgress(100);
                        }}
                        onSlideChange={(swiper) => {
                            setSlideIndex(swiper.activeIndex + 1);
                        }}
                        onSlideChangeTransitionStart={() => {
                            setTimerProgress(0);
                        }}
                        onSlideChangeTransitionEnd={() => {
                            setTimerProgress(100);
                        }}
                        >
                            
                        { generateSlides() }

                    </Swiper>

                    <div className="main-sliders__btn">
                        <Button icon={pen} text={`ԿՆՔԵԼ ԱՊՊԱ`} bg={"green"} link={"/steps"}/>
                    </div>
                </div>

                {/* controll */}
                <div className="main-sliders__utils">
                    <div className={`main-sliders__timer ${timerProgress ? "main-sliders__timer_animated": ""}`}>
                        <div className="main-sliders__timer-progress" style={{width: timerProgress + "%"}}></div>
                    </div>
                    <div className="main-sliders__count stroke-text stroke-text_green">
                        {slideIndex < 10 ? "0" + slideIndex : slideIndex}
                    </div>
                </div>

                <div className="slider-control">
                    <div className="slider-control__btn slider-control__btn_prev">
                        <img src={arrowLeft} alt="arrow left"/>
                    </div>
                    <div className="slider-control__pagination"></div>
                    <div className="slider-control__btn slider-control__btn_next">
                        <img src={arrowRight} alt="arrow right"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;