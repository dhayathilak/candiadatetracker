import React from 'react';
import './App.css';
import Homepage from './pages/Mainpage';
import { Route, Routes } from 'react-router-dom';
import CandidatePage from './pages/Candidatepage';
import AdversePage from './pages/AdversePage';
import { currentdata } from './components/organisms/CandidateTable/CandidateTable';

function App(currentdata:any) {
  const data = {currentdata}
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/candidate' element={<CandidatePage  name={currentdata.name} 
        zipcode={currentdata.zipcode} adjunction={currentdata.adjunction} 
        completeddate={currentdata.completeddate} createdat={currentdata.createdat} dob={currentdata.dob} 
        driverslicense={currentdata.driverslicense} email={currentdata.email} package={currentdata.package}
        id={currentdata.id} phone={currentdata.phone} socialsecurity={currentdata.socialsecurity} status={currentdata.status}
        turnaroundtime={currentdata.turnaroundtime}/>}/>
        <Route path='/adversenotice' element={<AdversePage/>}/>
      </Routes>
       
    </div>
  );
}

export default App;
