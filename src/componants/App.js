import './App.css';
import Header from './Header/Header';
import '../style/_reset.css';

import { Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import Team from './Team/Team';
import Center from './Center/Center';
import Diseases from './Diseases/Diseases';
import Informations from './Informations/Informations';
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';
import MapInformation from './Main/MapInformation';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path='/center' element={<Center/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/diseases' element={<Diseases/>} />
        <Route path='/informations' element={<Informations/>} />
        <Route path='/mapinformation' element={<MapInformation/>}></Route>
        <Route path="*" element={<NotFound /> } />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;