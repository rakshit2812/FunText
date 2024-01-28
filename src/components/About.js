import React from "react";

export default function About(props) {
    let fontStyle = {
        fontFamily : 'apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
        color: props.mode==='Light' ? 'black':'white'
      };
    let HeadingStyle = {
        fontFamily : 'Mate',
        fontWeight : 700,
        color: props.mode==='Light' ? 'black':'white'
      };
    let accordianStyle = {
      backgroundColor: '#F2F597',
      fontFamily : 'Mate',
    }
    let accordian_fontStyle={
      color: props.mode==='Light' ? 'black':'white',
      backgroundColor: props.mode==='Light' ? '#FDF7E4':'#161A30',
      fontFamily : 'apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
    }
    let accordian_bodyStyle = {
      paddingTop : '1.5rem',
      paddingBottom : '7.6rem'
    }
  return (
    <div className="container" style = {fontStyle}>
        <h1 style = {HeadingStyle} className="my-3">About Us</h1>
        <p style = {fontStyle}><b>FunText</b> is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but FunText offers much more than simple text drafting and formatting. FunText can convert your text to any case in just one simple click of a button. You can wear up your earphones to listen to the written text, instead of straining your eyes! It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. The best part of FunText is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest.</p>
        <p style = {fontStyle}> The most eminent features of the website are as follows :</p>

      <div className="accordion" id="accordionPanelsStayOpenExample" style = {accordian_bodyStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" style = {accordianStyle}>
            <button
              className="accordion-button " style = {accordianStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <strong>Analyse your Text</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body" style = {accordian_fontStyle}>
              It is a Simple Text Analyzer , which mutilates your text, but in a tender way
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header " style = {accordianStyle}>
            <button
              className="accordion-button collapsed" style = {accordianStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body" style = {accordian_fontStyle}>
            It is completely free to use. No credit cards required. Use as much as you want!!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" style = {accordianStyle}>
            <button
              className="accordion-button collapsed" style = {accordianStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body"style = {accordian_fontStyle}>
            It is compatible with all of your favorite browsers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
