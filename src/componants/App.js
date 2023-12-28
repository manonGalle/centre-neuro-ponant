import './App.css';
import Header from './Header/Header';
import '../style/_reset.css';

import { Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import Team from './Team/Team';
import Diseases from './Diseases/Diseases';
import Informations from './Informations/Informations';
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';
import MapInformation from './Main/MapInformation';
import LegalMentions from './Footer/LegalMentions';
import Exams from './Exams/Exams';
import { useState } from 'react';

function App() {


  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path='/center' element={<Main/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/diseases' element={<Diseases/>} />
        <Route path='/exams' element={<Exams/>} />
        <Route path='/informations' element={<Informations/>} />
        <Route path='/mapinformation' element={<MapInformation/>}></Route>
        <Route path="*" element={<NotFound /> } />
        <Route path="/legalmentions" element={<LegalMentions/>}/>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
      

    </div>
  );
}

export default App;
