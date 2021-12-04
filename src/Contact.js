import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css';
import contactImg from "./img/1638550945236.jpg"
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact Me.</h1>
                            <p className="hire__text white">I am available for Company team work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+8801705768175</strong> or email <strong>tipusultancse1011@gmail.com</strong></p>
                        </div>
                        <Form id="service_1zn6eaj" className="input__box">
                           <input id="service_1zn6eaj" name="name" className="contact name" placeholder="Your name *" />
                           <input id="service_1zn6eaj" name="email" className="contact email" placeholder="Your Email *" />
                           {/* <input type="" className="contact subject" placeholder="Write a Subject" /> */}
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </Form>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact
