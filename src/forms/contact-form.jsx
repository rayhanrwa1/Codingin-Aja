import React from 'react';
 

const ContactForm = () => {
    return (
        <>
             <form id="contact-form" onSubmit={e => e.preventDefault()}>
                <div className="row">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                    <div className="contact__input">
                        <i className="fas fa-user"></i>
                        <input className="w-100" type="text" placeholder="Enter name" name="name" required />
                    </div>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                    <div className="contact__input">
                        <i className="fas fa-envelope"></i>
                        <input className="w-100" type="email" placeholder="Email address" name="email" required />
                    </div>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                    <div className="contact__input">
                        <i className="fas fa-pen pen"></i>
                        <textarea className="w-100" placeholder="Message" name="message" required ></textarea>
                    </div>
                </div>
                <div className="col-xxl-12 col-lg-12 col-md-12">
                    <div className="contact__btn">
                        <button className="tp-btn w-100" type="submit">Get A Quatation <i
                            className="fal fa-long-arrow-right"></i></button>
                    </div>
                </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;