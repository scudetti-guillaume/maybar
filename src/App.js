
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/maybar/carte' element={<Carte />} />
          <Route path='/maybar/contact' element={<Contact />} />
          <Route path='/maybar/condition' element={<Conditions />} />
          <Route path='/maybar/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
