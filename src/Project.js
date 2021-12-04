import React from "react";
import "./Project.css";
import Project1 from './img/photo-1532298229144-0ec0c57515c7.jpg';
import Project2 from './img/2.jpg';
import Project3 from './img/3.jpg';
import Project4 from './img/4.jpg';
import Project5 from './img/5.jpg';
import Project6 from './img/6.jpg';



function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
       
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img style={{width:'375px',height:'500px'}} src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Bicycle Sales</h5>
                     <h4 className="project__text">Nov 2021 - Nov 2021</h4>
                     <a href="https://niche-products-28da0.web.app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img style={{width:'375px',height:'500px'}} src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Hotel Room Booking</h5>
                     <h4 className="project__text">Nov 2021 - Nov 2021</h4>
                     <a href="https://assignment-11-9e433.web.app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img style={{width:'375px',height:'500px'}} src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Specialized Hospital</h5>
                     <h4 className="project__text">Nov 2021 - Nov 2021</h4>
                     <a href="https://specialized-hospital-1a3ce.web.app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img style={{width:'375px',height:'500px'}} src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Greatest Computer Programmers</h5>
                     <h4 className="project__text">Oct 2021 - Oct 2021</h4>
                     <a href="https://assignment-8-programmers.netlify.app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img style={{width:'375px',height:'500px'}} src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">E-commerce Base Webiste</h5>
                     <h4 className="project__text">Oct 2021 - Oct 2021</h4>
                     <a href="https://e-commerce-webiste-assignment-7.netlify.app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img style={{width:'375px',height:'500px'}} src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Doctors Portal</h5>
                     <h4 className="project__text">Nov 2021 - Nov 2021</h4>
                     <a href="https://doctors-portals-ea55d.web.app/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
             
             {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div> */}

           </div>
       </div>
    </div>
  );
}

export default Project;
