import logo from './logo.svg';
import './App.css';
import SerieFormulario from './componentes/SerieFormulario';
import TodasSeries from './componentes/TodasSeries';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BarraNavegacion from './componentes/BarraNavegacion';
import UnaSerie from './componentes/UnaSerie';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <BarraNavegacion/>
        <Routes>
          <Route path='/nuevaserie' element={<SerieFormulario/>}/>
          <Route path='/todasseries' element={<TodasSeries/>}/>
          <Route path='/unaserie/:id'element={<UnaSerie/>}/>
          <Route path='/editarserie/:id' element={<EditarSerie/>}/>
          <Route path='/registro'element={<Registro/>}/>
          
        </Routes>
      </BrowserRouter>  
  
      
    </div>
  );
}

export default App;
