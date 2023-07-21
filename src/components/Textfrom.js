import React,{useState} from 'react'

export default function Textfrom(props) {
    const UPhandle = ()=>{
        let newText=Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const LOWhandle = ()=>{
        let newText=Text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    const Clearhandle = ()=>{
        let newText='';
        setText(newText)
        props.showAlert("Text has been cleared","success")
    }
    const handleonchange = (event)=>{
            setText(event.target.value);
    }
  
     
    const [Text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#04295e'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#04295e'}} id="TextArea" rows="8"></textarea>
        </div> 
        <button className="btn btn-primary mx-1" onClick={UPhandle}>CONVERT TO UPPERCASE</button>
        <button className="btn btn-primary mx-1" onClick={LOWhandle}>CONVERT TO LOWERCASE</button>
        <button className="btn btn-primary mx-1" onClick={Clearhandle}>CLEAR</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#04295e'}}>
        <h2>
            YOUR TEXT SUMMARY
        </h2>
        <p>{Text.split(" ").length} words and {Text.length} characters</p> 
        <p>{0.008 *Text.split(" ").length} Minutes</p> 
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Enter Text to Preview"}</p>
    </div>
        </>
  )
}
