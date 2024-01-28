import './App.css';
import About from './components/About';
import Awake from './components/Awake';
import Foot from './components/Foot';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Link } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('Light');
  const [alert, setalert] = useState(null);

  const showAlert = (message,type)=>{
      setalert({
        msg : message,
        type : type
      })

      setTimeout(() => {
        setalert(null);
      }, 1500);
  }

  const randomcolor = () => {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    document.body.style.backgroundColor = "#" + randColor;
    showAlert("Background Color Changed.", "success");
    console.log(randColor);
  }

  const toggleMode = ()=>{

    if(mode === 'Light') {
      setMode('Dark');
      document.body.style.backgroundColor = '#161A30';
      showAlert("Dark Mode has been Enabled.", "success");
    }
    else {
      setMode('Light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled.", "success");
    }
  }

  return (
    <>
    {/* <Navbar title = "FunText" link = "About" mode = {mode} toggleMode = {toggleMode} alert = {alert}/>
    <Awake alert = {alert}/> */}
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<div className="x">
          <Navbar title = "FunText" link = "About" mode = {mode} toggleMode = {toggleMode} alert = {alert}/>
          <Awake alert = {alert}/>
          <Textform heading = "Enter the Text to Analyse" mode = {mode} showAlert = {showAlert} randomcolor={randomcolor}/>
          <Foot mode={mode}/></div>}/>  
        <Route exact path = "about" element = {<div className="x">
          <Navbar title = "FunText" link = "About" mode = {mode} toggleMode = {toggleMode} alert = {alert}/>
          <Awake alert = {alert}/>
          <About mode = {mode}/>
          <Foot mode = {mode}/></div>}/>   
      </Routes>
    </BrowserRouter>
      
      {/* <div className="container my-4">
        <Textform heading = "Enter the Text to Analyse" mode = {mode} showAlert = {showAlert}/>
      </div> */}
      {/* <About/> */}
    </>
    
  );
}

export default App;

<div className="container my-4"></div>