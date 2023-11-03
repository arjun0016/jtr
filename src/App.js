import './App.css';
import Home from './components/Home';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';
import ServicePage from './components/pages/ServicePage';
import ContactPage from './components/pages/ContactPage';
import CategoryDetails from './components/pages/CategoryDetails'
import Projects from './components/pages/Projects';





function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/'  element={<Home />} />
      <Route path="/aboutpage" element={<AboutPage/>} />
      <Route path="/servicepage" element={<ServicePage/>} />
      <Route path="/contactpage" element={<ContactPage/>} />
      <Route path="/categorypage/:id" element={<CategoryDetails/> } />
      <Route path="/projectpage" element={<Projects/> } />
     

      </Routes>
      </BrowserRouter>
     
 
    </div>
  );
}

export default App;
