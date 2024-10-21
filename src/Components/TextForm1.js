import React, {useState} from 'react'

export default function TextForm(props) {
const [text, setText] = useState('');

  const handleOnchange= (event)=>{
    setText(event.target.value)  
  }

  const handleUpClick= ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!", "success");
  }

  const handleLoClick= ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!", "success");
   }

   const handleClearClick= ()=>{
    let newText ="";
    setText(newText)
    props.showAlert("Text Cleared!", "success");
   }

   const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to CLipboard!", "success"); 
   }

   const handleExtraSpaces=()=>{
    let newText = text.split(/[" "]+/);
    setText(newText.join(" "))
    props.showAlert("Removed the extra spaces!", "success");
   }

  return (  
    <>
    <div className='container' style={{color:props.mode ==="dark" ? "white":"#042743"}}>
      <h2 className='mb-5'>{props.header}  </h2> 
      <div className="mb-3">
      
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode ==="dark" ? "#13466e":"white", color:props.mode ==="dark" ? "white":"#042743" }}></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length === 0}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} disabled={text.length === 0}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} disabled={text.length === 0}>Clear Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} disabled={text.length === 0}>Copy Test</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} disabled={text.length === 0}> Remove Extra Spaces</button>
    </div>
      
    <div className="container my-3" style={{color:props.mode ==="dark" ? "white":"#042743"}}>
      <h4>Your text summary</h4>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length } words, {text.length} characters.</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length } minutes read</p>
      <h4>Preview</h4>
      <p>{text.length > 0 ? text:"Nothing to preview..."}</p>
    </div>
    </>
  ) 
}
