//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 2000)
  }


  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#04295e';
      showAlert("DARK MODE ENABLED", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("LIGHT MODE ENABLED", "success")

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" AboutText="About Us" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textfrom showAlert={showAlert} heading="Enter Text to analyze Below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
