import React from "react";
import "./About.css";
import aboutImg from "./img/1638550945236.jpg";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0)
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I am Tipu Sultan, a Junior MERN Stack Web developer able to build
                a Web presence from the ground up - from concept, navigation,
                layout and programming to Figma Design. Experienced with a
                demonstrated history of working in the software industry.
                Skilled in Front-End technologies such as Html5 , Css3 , JavaScript
                , React JS, Bootstrap, React-Bootstrap,Tailwind, Material UI, and Back-End technologies
                such as Node.JS, Express JS and MongoDB.Technologies tools such as VS CODE, GIT, Firebase, Heroku, Netlify .Learning a variety of
                scripting languages and multimedia tools is one of my strengths.
                I am also a hard worker and team player. I am looking for a
                challenging opportunity that will enable me to use my skills
                and abilities to achieve a challenging goal.
              </p>

              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/file/d/1dv2WH3mt4oqVzg7Ihwk-hcvlMv4QXrVI/view">
                  <button className="about btn pointer">Download Resume</button>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
