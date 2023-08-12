import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Header } from './componentes/Header/Header'
import Carousell from './componentes/Carousel/Carousel';
import Productos from './componentes/Productos/Poductos';
import CategoriasSubMenu from './componentes/Menu/CategoriasSubMenu';
import ContactForm from './componentes/Contacto/Contacto';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import FundaList from './componentes/Categorias/FundaList';
import Cargadores from './componentes/Categorias/Cagadores';
import GorilaGlas from './componentes/Categorias/GorilaGlas';
import Body from './componentes/Body/Body';
import { MyContext } from './Context/MyContext';
import Error404 from './componentes/Alerts/Eror404';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
/* import InfoContact from './componentes/InfoContact/InfoContact'; */


function App() {
  return (

    <MyContext.Provider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Carousell />
            <Body />
          </>} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Categorias" element={<CategoriasSubMenu />} />
          <Route path="/Contacto" element={<ContactForm />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/Fundas" element={<FundaList />} />
          <Route path="/Cargadores" element={<Cargadores />} />
          <Route path="/GorilaGlas" element={<GorilaGlas />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>


  );
}


export default App
