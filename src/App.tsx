import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Mainpage';
import { Route, Routes } from 'react-router-dom';
import CandidateInfo from './components/molecules/CandidateInfo/CandidateInfo';
import CandidatePage from './pages/Candidatepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/candidate' element={<CandidatePage/>}/>
      </Routes>
       
    </div>
  );
}

export default App;
