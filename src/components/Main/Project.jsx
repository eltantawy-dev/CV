import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-1.jpg`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Ihyea</h3>
                            <p>
                                Website for Scheduling Quran Recitation Sessions
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> Django
                                <span> -</span> HTML
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <Link to="/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>More</span></Link>
                            <a href="https://github.com/eltantawy-dev/ihyea" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-1.jpg`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Justice</h3>
                            <p>
                                lawyers website
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> jQuery
                                <span> -</span> Bootstrap
                            </p>
                            <a href="https://nahuel61920.github.io/Justice/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/Justice" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-2.jpg`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>PI Dogs</h3>
                            <p>
                                Individual Project
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> CSS
                                <span> -</span> Redux
                                <span> -</span> NodeJS
                                <span> -</span> ExpressJS
                                <span> -</span> Sequelize
                                <span> -</span> PostgreSQL
                            </p>
                            <a href="https://pi-dogs-main-ashy.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/PI-DOGS-MAIN" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                   
                    
                    
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-2.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Premier Food</h3>
                            <p>
                                Fast food
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> Sass
                            </p>
                            <a href="https://nahuel61920.github.io/PremierFood/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/PremierFood" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    
                  
                    
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link>
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div> */}
        </section>

    )
};
export default React.memo(Project);