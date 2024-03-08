import React from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import HomePage from './page/HomePage';
// import Bronzen from './Brozen';
// import B1 from './page/B1';
import CopperWare from './page/CopperWare';
import BrassWare from './page/BrassWare';
import BronzeWare from './page/BronzeWare';
import PujaPage from './page/PujaPage';
import IdeolPage from './page/IdeolPage';
import Navbar from './Components/Navbar';
import CopperBottle from './CooperProduct/CopperBottle';
import WaterConatiner from './CooperProduct/WaterConatiner';
import BedRoom from './CooperProduct/BedRoom';
import Glass from './CooperProduct/Glass';
import WaterJugset from './CooperProduct/WaterJugset';
import SpiceBox from './BrassProduct/SpiceBox';
import BGlass from './BrassProduct/BGlass';
import BjugSet from './BrassProduct/BjugSet';
import Lota from './BrassProduct/Lota';
import Mukwass from './BrassProduct/Mukwass';
import Bowl from './BronzeProduct/Bowl';
import BrGlass from './BronzeProduct/BrGlass';
import Thali from './BronzeProduct/Thali';
import Spoon from './BronzeProduct/Spoon';
import DinnerSet from './BronzeProduct/DinnerSet';
import Diva from './PujaProduct/Diva';
import ArtiThali from './PujaProduct/ArtiThali';
import Bell from './PujaProduct/Bell';
import Basket from './PujaProduct/Basket';
import StickHolder from './PujaProduct/StickHolder';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
   
    
    
  <Navbar />

    
    <Routes>

      
   
    <Route path="/" element={<HomePage/>} />
    <Route path="/CopperWare" element={<CopperWare/>} />
    <Route path="/BrassWare" element={<BrassWare/>} />
    <Route path="/BronzeWare" element={<BronzeWare/>} />
    <Route path="/IdeolPage" element={<IdeolPage/>} />
    <Route path="/PujaPage" element={<PujaPage/>} />


    {/* Copper catgeroy pages */}
    <Route path="/CopperBottle" element={<CopperBottle/>} />
    <Route path="/WaterConatiner" element={<WaterConatiner/>} />
    <Route path="/BedRoom" element={<BedRoom/>} />
    <Route path="/Glass" element={<Glass/>} />
    <Route path="/WaterJugset" element={<WaterJugset/>} />

    {/* Brass categroy pages */}
    <Route path="/SpiceBox" element={<SpiceBox/>} />
    <Route path="/BGlass" element={<BGlass/>} />
    <Route path="/Bjugset" element={<BjugSet/>} />
    <Route path="/Lota" element={<Lota/>} />
    <Route path="/Mukwass" element={<Mukwass/>} />

    {/* Bronze category pages */}

    <Route path="/Bowl" element={<Bowl/>} />
    <Route path="/BrGlass" element={<BrGlass/>} />
    <Route path="/Thali" element={<Thali/>} />
    <Route path="/Spoon" element={<Spoon/>} />
    <Route path="/DinnerSet" element={<DinnerSet/>} />

    {/* Puja category pages */}
    
    <Route path="/Diva" element={<Diva/>} />
    <Route path="/ArtiThali" element={<ArtiThali/>} />
    <Route path="/Bell" element={<Bell/>} />
    <Route path="/Basket" element={<Basket/>} />
    <Route path="/StickHolder" element={<StickHolder/>} />





    
   
    </Routes>
  <Footer/>

    </BrowserRouter>
    </>
  );
}

export default App;
