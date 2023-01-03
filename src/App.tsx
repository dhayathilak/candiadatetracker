import React from 'react';
import './App.css';
import Homepage from './pages/Mainpage';
import { Route, Routes } from 'react-router-dom';
import CandidatePage from './pages/Candidatepage';
import AdversePage from './pages/AdversePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/candidate' element={<CandidatePage/>}/>
        <Route path='/adversenotice' element={<AdversePage/>}/>
      </Routes>
       
    </div>
  );
}

export default App;
