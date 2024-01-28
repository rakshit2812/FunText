import React, {useState} from "react";


export default function Textform(props) {
    const[text, setText] = useState("");
    const HandleOnChange = (event)=>{
        setText(event.target.value);
    }
    const UpClick = ()=>{
        localStorage.setItem(1,text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const LowClick = ()=>{
        localStorage.setItem(1,text);
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const clearClick = ()=>{
        localStorage.setItem(1,text);
        let newtext = '';
        setText(newtext);
    }
    const handleCapitalize = () => {
        localStorage.setItem(1,text);
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
   }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const undo = ()=>{
        let itm=localStorage.getItem(1)
        setText(itm) 
    }
    const copyText = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard" , "success");
    }
    // const readTxt = (event) => {
    //     let file = event.target.files[0];
    //     let reader = new FileReader();
    //     reader.onload = function(event){
    //         setText(event.target.result);
    //     };
    //     reader.readAsText(file);
    // }
    let HeadingStyle = {
        fontFamily : 'Mate',
        fontWeight : 700,
        color: props.mode==='Light' ? 'black':'white'
    };
    let fontStyle = {
        fontFamily : 'apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
        color: props.mode==='Light' ? 'black':'white'
    };

    let btnStyle = {
        fontFamily : 'Mate',
        backgroundColor: '#F2F597',
        fontWeight : 700,
    };

  return (
    <>
        <div className="container my-3" style = {fontStyle}>
            <div className="mb-2">
                <h1 style = {HeadingStyle}>{props.heading}</h1>
                <textarea className="form-control my-3" value = {text} style = {{backgroundColor: props.mode==='Light' ? '#FDF7E4':'#37B5B6'}}onChange = {HandleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                {/* <input type="file" className="btn btn-primary my-3" style = {{width : '15%' ,}} accept="text/plain" onChange = {readTxt}/> */}
            </div>
            <button disabled = {text.length === 0}className="btn mx-1 my-1" style = {btnStyle} onClick={UpClick}>Uppercase</button>
            <button disabled = {text.length === 0}className="btn mx-1 my-1" style = {btnStyle} onClick={LowClick}>Lowercase</button>
            <button disabled = {text.length === 0}className="btn mx-1 my-1" style = {btnStyle} onClick={clearClick}>Clear Text</button>
            <button disabled = {text.length === 0}className="btn mx-1 my-1" style = {btnStyle} onClick={handleCapitalize}>Capitalize</button>
            <button className="btn mx-1 my-1" style = {btnStyle} onClick={undo}>Undo</button>
            <button disabled = {text.length === 0}className="btn mx-1 my-1" style = {btnStyle} onClick={copyText}>Copy Text</button>
            <button disabled = {text.length === 0}className="btn mx-1 my-1" style = {btnStyle} onClick={speak} type="submit">Speak Up</button>
            <button className="btn mx-1 my-1" style = {btnStyle} onClick={props.randomcolor}>Change Background Color</button>
        </div>
        <div className="container" style = {fontStyle}>
            <h2 style = {HeadingStyle}>Summary</h2>
            <p>It contains {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} number of Characters.</p>
        </div>
        <div className="container" style = {fontStyle}>
            <h2 style = {HeadingStyle}>Preview</h2>
            <p>{text===""?"Nothing to preview!":text}</p>
        </div>
    </>
  );
}
