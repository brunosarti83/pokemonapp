import './App.css';

import { ROUTES } from './helpers/ROUTES';
import { Routes, Route } from 'react-router-dom';

//Views
import LandingView from './Views/Landing/LandingView'
import HomeView from './Views/Home/HomeView'
import DetailView from './Views/Detail/DetailView'
import CreateView from './Views/Create/CreateView'

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
