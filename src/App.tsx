import React from 'react';
import './App.css';
import Homepage from './pages/Mainpage';
import { Route, Routes } from 'react-router-dom';
import CandidatePage from './pages/Candidatepage';
import AdversePage from './pages/AdversePage';
import { ThemeProvider } from '@mui/material';
import baseTheme from './Themes';


function App() {

  return (

    <div className="App">
      <ThemeProvider theme={baseTheme}>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path= '/candidate/:id' element={<CandidatePage/>}/>
          <Route path='/adversenotice' element={<AdversePage/>}/>
        </Routes>
      </ThemeProvider>
       
    </div>
  );
}

export default App;
