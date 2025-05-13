import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import VerticalMenu from './menus/VerticalMenu';
import AreaVisuals from './pages/AreaVisuals';
import Home from './pages/Home';
import BoxVisuals from './pages/BoxVisuals';
import BarVisuals from './pages/BarVisuals';
import HistogramVisuals from './pages/HistogramVisuals';
import LineVisuals from './pages/LineVisuals';
import ScatterVisuals from './pages/ScatterVisuals';
import PieVisuals from './pages/PieVisuals';

function App() {
  return(
    <Router>
      <VerticalMenu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bar-visuals' element={<BarVisuals/>}/>
        <Route path='/area-visuals' element={<AreaVisuals/>}/>
        <Route path='/box-visuals' element={<BoxVisuals/>}/>
        <Route path='/histogram-visuals' element={<HistogramVisuals/>}/>
        <Route path='/line-visuals' element={<LineVisuals/>}/>
        <Route path='/scatter-visuals' element={<ScatterVisuals/>}/>
        <Route path='/pie-visuals' element={<PieVisuals/>}/>
      </Routes>
    </Router>
);
}

export default App;
