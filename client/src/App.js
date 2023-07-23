import './App.css';

import { ROUTES } from './helpers/ROUTES';
import { Routes, Route } from 'react-router-dom';

//Views
import LandingView from './Views/Landing/LandingView'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.landing} element={<LandingView/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
