
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import EducationPage from './components/Categories/Education.jsx';
import Medical from './components/Categories/Medical.jsx';
import IT from './components/Categories/IT.jsx';
// import Banking from './components/Categories/Banking.jsx';
import Business from './components/Categories/Business.jsx';
import IndustrialEngineering from './components/Categories/IndustrialEngineering.jsx';
import Entertainment from './components/Categories/Entertainment.jsx';
import Building from './components/Categories/Building.jsx';
import Power from './components/Categories/Power.jsx';
import ScienceReach from './components/Categories/ScienceResearch.jsx';
import Health from './components/Categories/Health.jsx';
import Agriculture from './components/Categories/Agriculture.jsx';
// import Food from './components/Categories/Food.jsx';
import Arts from './components/Categories/Arts.jsx';
import Logistics from './components/Categories/Logistics.jsx';
import Automotive from './components/Categories/Automotive.jsx';
import Electronics from './components/Categories/Electronics.jsx';
import Fashion from './components/Categories/Fashion.jsx';
import Office from './components/Categories/Office.jsx';
import Clothing from './components/Categories/Clothing.jsx';
import Hospitality from './components/Categories/Hospitality.jsx';
import Tourism from './components/Categories/Tourism.jsx';
import Security from './components/Categories/Security.jsx';
import Pets from './components/Categories/Pets.jsx';
import Kids from './components/Categories/Kids.jsx';
import Packing from './components/Categories/Packing.jsx';
import Miscellaneous from './components/Categories/Miscellaneous.jsx';
import CategorySection from './Pages/Home/Category.jsx';



const App = () => {
  return (
    <Router>

      <Header /> 

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/education" element={<EducationPage category="Education" />} />
        <Route path="/medical" element={<Medical category="Medical" />} />
        <Route path="/it" element={<IT category="IT"/>} />
        {/* <Route path="/banking" element={<Banking category="Banking"/>} /> */}
        <Route path="/business" element={<Business category="Business"/>} />
        <Route path="/engineering" element={<IndustrialEngineering category="Industrial Engineering"/>} />
        <Route path="/entertainment" element={<Entertainment category="Entertainment"/>} />
        <Route path="/construction" element={<Building category="Building"/>} />
        <Route path="/energy" element={<Power category="Power"/>} />
        <Route path="/science" element={<ScienceReach category="Science Research"/>} />
        <Route path="/wellness" element={<Health category="Health"/>} />
        <Route path="/agriculture" element={<Agriculture category="Agriculture"/>} />
        {/* <Route path="/food" element={<Food category="Food&Beverages"/>} /> */}
        <Route path="/arts" element={<Arts category="Arts"/>} />
        <Route path="/logistics" element={<Logistics category="Logistics"/>} />
        <Route path="/electronics" element={<Electronics category="Electronics"/>} />
        <Route path="/automotive" element={<Automotive category="Automotive"/>} />
        <Route path="/fashion" element={<Fashion category="Fashion"/>} />
        <Route path="/home" element={<Office category="Home"/>} />
        <Route path="/apparel" element={<Clothing category="Clothing"/>} />
        <Route path="/hospitality" element={<Hospitality category="Hospitality"/>} />
        <Route path="/travel" element={<Tourism category="Tourism"/>} />
        <Route path="/security" element={<Security category="Security"/>} />
        <Route path="/animals" element={<Pets category="Pets"/>} />
        <Route path="/baby" element={<Kids category="Kids"/>} />
        <Route path="/packing" element={<Packing category="Packing"/>} />
        <Route path="/misc" element={<Miscellaneous category="Miscellaneous"/>} />
        <Route path='/categories' element={<CategorySection category="Category Section"/>}/>
        

      </Routes>
      
    </Router>
  );
};

export default App;
