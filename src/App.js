import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState({
    message: '',
    type: ''
  });
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.documentElement.style.background = '#212529';
    } else {
      setMode('light');
      document.documentElement.style.background = '#f8f9fa';
    }
  }
  const showAlert = (message, type)=>{
    document.getElementById('newAlert').classList.remove('hide');
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      document.getElementById('newAlert').classList.add('hide');
      setAlert(null);
    }, 2000);
  }
  return (
    <div className={`bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}>
      <Navbar title='TxtYum...' page1='Kitchen' page2='Cookbook' mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading='Cook your text' showAlert={showAlert} mode={mode} alert={alert}/>
        <About mode={mode}/>
      </div>
    </div>
  );
}

export default App;
