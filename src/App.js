import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Fund from './pages/Fund';
import Details from './pages/largCapDetails';
import MidDetails from './pages/midCapDetails';
import SmallDetails from './pages/smallCapDetails';
import AxidBluechipFunds from './pages/AxisBluechipFund';
import PgmiFunds from './pages/PgmiFunds';
import LicFunds from './pages/LicFunds';
import BankOfIndia from './pages/BankOfIndia';
import Mahindra from './pages/Mahindra';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/fund' element={<Fund/>}/>
          <Route path='/largeCapdetails' element={<Details/>} />
          <Route path='/login' element={<Login />}/>
          <Route path='/midCapDetails' element={<MidDetails/>}/>
          <Route path='/smallCapDetails' element={<SmallDetails />}/>
          <Route path='/AxisDetails' element={<AxidBluechipFunds />}/>
          <Route path='/LicDetails' element={<LicFunds />}/>
          <Route path='/BoIDetails' element={<BankOfIndia />}/>
          <Route path='/mahindraDetails' element={<Mahindra />}/>
          <Route path='/pgmiDetails' element={<PgmiFunds />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
