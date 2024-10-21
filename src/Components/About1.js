import React from 'react'

export default function About(props) {

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark"? "rgb(36, 74, 104)" : "white",   
  }

  return (
    <div className='container' style={{borderColor: props.mode === "dark" ? "white" : "#042743"}}>
      <h2 className='my-3'style={{color: props.mode === "dark" ? "white" : "#042743"}}>About Us</h2>

      <div className="accordion accordion-flush"   id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"  style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and effieciently, Be it word count, character count or </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
             <strong>Free to Use</strong>
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"  style={myStyle}>
              TextUtils is a free charaacter counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. thus it it suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              <strong>Browzer Compatible</strong>
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body"  style={myStyle}>This word counter software in aby web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essay, etc.</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
