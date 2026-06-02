import React from 'react';
import '../../pages/Service/ServicesPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Service = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Services'
            />
        </h2>
        <div className="row">
            
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-code"></i>
                <h3>
                    <FormattedMessage
                        id='design'
                        defaultMessage='Full-Stack Web Development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Building complete web applications using modern front-end and back-end technologies, with responsive designs and efficient database integration.'
                    />
                </p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i class="fas fa-globe"></i>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='WordPress Website Development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Creating and managing WordPress websites, customizing themes and plugins, and building professional websites for different purposes.'
                    />
                </p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i class="fab fa-telegram-plane"></i>
                <h3>
                    <FormattedMessage
                        id='marketing'
                        defaultMessage='Telegram Bot Development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='marketing-info'
                        defaultMessage='Developing Telegram bots using Python to automate tasks, manage content, interact with users, and integrate with external services and databases.'
                    />
                </p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i class="fas fa-store"></i>
                <h3>
                    <FormattedMessage
                        id='maintenance'
                        defaultMessage='E-Commerce Store Management'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='maintenance-info'
                        defaultMessage='Creating, managing, and maintaining online stores, including product management, content updates, and store configuration.'
                    />
                </p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <i class="fas fa-laptop-code"></i>
                <h3>
                    <FormattedMessage
                        id='seo'
                        defaultMessage='Computer & Office Skills'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='seo-info'
                        defaultMessage='Proficient in data entry, Microsoft Office applications, internet research, file management, and everyday computer operations.'
                    />
                </p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <i class="fas fa-exclamation"></i>
                <h3>
                    <FormattedMessage
                        id='optimization'
                        defaultMessage='Technical Problem Solving'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='optimization-info'
                        defaultMessage='Troubleshooting software issues, learning new technologies, improving workflows, and finding practical solutions to technical challenges.'
                    />
                </p>
            </div>
        </div>
        <div className='portafolio-btn'>
           {/* <Link to="/service">
                <ButtomGet/>
            </Link>*/}
        </div>
    </section>
);

export default React.memo(Service);