
import './style/index.scss'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Carte from './pages/Carte';
import Contact from './pages/Contact';
import Conditions from './pages/Conditions';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      {/* <BrowserRouter basename="/maybar/">  */}
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/carte' element={<Carte />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/condition' element={<Conditions />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
