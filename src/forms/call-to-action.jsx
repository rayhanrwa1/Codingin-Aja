import React from 'react';

const CallToAction = () => {
    return (
        <>
             <form onSubmit={e => e.preventDefault()}>
                <div className="p-relative">
                    <i className="fal fa-user"></i>
                    <input className="w-100" type="text" placeholder="Enter name" />
                </div>
                <div className="p-relative">
                    <i className="fal fa-envelope"></i>
                    <input className="w-100" type="text" placeholder="Email address" />
                </div>
                <div className="p-relative">
                    <i className="fal fa-pen pen"></i>
                    <textarea className="w-100" placeholder="Message"></textarea>
                </div>
                <button className="tp-btn-2 w-100">Get A Quote</button>
            </form>
        </>
    );
};

export default CallToAction;