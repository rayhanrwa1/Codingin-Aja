import answer_question_data from '@/src/data/answer-question-data';
import React from 'react';

const FaqArea = () => {
    return (
        <>
    <div className="faq-page-area">
      <div className="container">
         <div className="row">
            <div className="col-xl-6 col-lg-6 col-12">
               <div className="tp-custom-accordio-2">
                  <div className="accordion" id="accordionExample">
                    {answer_question_data.slice(0, 5).map((item, i) => 
                        <div key={i} className="accordion-items">
                            <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target={`#collapse${item.accordion_id}`} aria-expanded={item.accordion_id === "One" ? "true" : "false"} aria-controls={`collapse${item.accordion_id}`}>
                                {item.question}
                            </button>
                            </h2>
                            <div id={`collapse${item.accordion_id}`} className={`accordion-collapse ${item.show ? "show" : ""} collapse`} aria-labelledby={`heading${item.accordion_id}`}
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                 {item.answer}
                                <div className="accordio-icon"><i className="flaticon-bubble-chat"></i></div>
                            </div>
                            </div>
                        </div>                    
                    )} 
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
               <div className="tp-custom-accordio-2">
                  <div className="accordion" id="accordionExample2">
                  {answer_question_data.slice(5, 10).map((item, i) => 
                        <div key={i} className="accordion-items">
                            <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                            <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target={`#collapse${item.accordion_id}`} aria-expanded={item.accordion_id === "One2" ? "true" : "false"} aria-controls={`collapse${item.accordion_id}`}>
                                {item.question}
                            </button>
                            </h2>
                            <div id={`collapse${item.accordion_id}`} className={`accordion-collapse ${item.show ? "show" : ""} collapse`} aria-labelledby={`heading${item.accordion_id}`}
                            data-bs-parent="#accordionExample2">
                            <div className="accordion-body">
                                 {item.answer}
                                <div className="accordio-icon"><i className="flaticon-bubble-chat"></i></div>
                            </div>
                            </div>
                        </div>                    
                    )}  
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div> 
        </>
    );
};

export default FaqArea;