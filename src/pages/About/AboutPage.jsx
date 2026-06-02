import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/home.jpg';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />
              
              <a href={"https://raw.githubusercontent.com/eltantawy-dev/CV/main/cv.pdf"} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
                  <FormattedMessage
                      id='btn-cv'
                      defaultMessage='Download CV'
                  />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id='about-info-1'
                  defaultMessage="Hi, I'm Mohamed Eltantawy, a software developer and university student passionate about web development and technology. I enjoy building websites and web applications, learning new technologies, and turning ideas into practical solutions. Through continuous learning and hands-on projects, I strive to improve my skills and grow as a professional developer."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage='I consider myself a self-taught person since I like to be constantly learning day by day, both new technologies and new development methods that help me polish and raise my level of learning.'
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="I have experience working as a freelance web designer and developer, which gave me the opportunity to work on many interesting projects, adapting to the client's needs and budget, which allowed me to improve my skills and knowledge; Additionally, I have also had the opportunity to be part of some online and face-to-face courses that helped me enrich my skills and learn a little more about this beautiful world of web development."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>

          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="HTML" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" />
                <h2 className="skill-name">HTML</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-1'
                    defaultMessage='I use HTML to create structured web pages as part of my web development learning and projects.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="CSS" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" />
                <h2 className="skill-name">CSS</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-2'
                    defaultMessage='I use CSS to design responsive and visually appealing user interfaces while practicing modern layout techniques.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Js" className="skills-img icon-li" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" title="Java Script" />
                <h2 className="skill-name">Javascript</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-3'
                    defaultMessage='I use JavaScript to add interactivity to web pages and improve my understanding through practice and projects.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="React" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="React" />
                <h2 className="skill-name">React</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-4'
                    defaultMessage='I use React to build user interfaces and continue learning component-based development through personal projects.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="NextJS" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" title="NextJS" />
                <h2 className="skill-name">NextJS</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-5'
                    defaultMessage='I use Next.JS in my learning projects to understand modern web development and routing concepts.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="django" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" title="django" />
                <h2 className="skill-name">django</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-6'
                    defaultMessage='I use Django to build web applications and develop backend systems using Python.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="flask" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" title="flask" />
                <h2 className="skill-name">flask</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-7'
                    defaultMessage='I use Flask to build lightweight web applications and REST APIs using Python.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="MySQL" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" title="jQuery" />
                <h2 className="skill-name">MySQL</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-8'
                    defaultMessage='I use MySQL to design and manage relational databases and handle structured data.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="mongodb" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" title="mongodb" />
                <h2 className="skill-name">MondoDB</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-9'
                    defaultMessage='I use MongoDB to work with NoSQL databases and manage flexible data structures.'
                  />
                </p>
              </div>

              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="tailwindcss" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" title="tailwindcss" />
                <h2 className="skill-name">tailwindCSS</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-10'
                    defaultMessage='I use Tailwind CSS to build modern and responsive user interfaces efficiently.'
                  />
                </p>
              </div>

              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="github" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" title="github" />
                <h2 className="skill-name">github</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-11'
                    defaultMessage='I use GitHub to manage my projects, track changes, and improve my workflow using version control.'
                  />
                </p>
              </div>

              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="wordpress" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" title="wordpress" />
                <h2 className="skill-name">wordpress</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-12'
                    defaultMessage='I use WordPress to build and manage simple websites and understand CMS-based development.'
                  />
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;