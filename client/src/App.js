import './App.css';

import { ROUTES } from './helpers/ROUTES';
import { Routes, Route } from 'react-router-dom';

//Views
import LandingView from './Views/Landing/LandingView'
import HomeView from './Views/Landing/HomeView'
import DetailView from './Views/Landing/DetailView'
import CreateView from './Views/Landing/CreateView'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.landing} element={<LandingView/>}></Route>
        <Route path={ROUTES.home} element={<HomeView/>}></Route>
        <Route path={ROUTES.detail} element={<DetailView/>}></Route>
        <Route path={ROUTES.create} element={<CreateView/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
