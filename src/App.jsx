import { Header } from './componentes/Header/Header'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import ContactForm from './componentes/Contacto/Contacto';
import Error404 from './componentes/Alerts/Eror404';

import 'bootstrap/dist/css/bootstrap.css';

import './App.css'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
/* import InfoContact from './componentes/InfoContact/InfoContact'; */


function App() {


  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/Contacto' element={<ContactForm />} />
        {/* <Route path='/Contacto' element={<InfoContact />} /> */}
        <Route path='/productos/:categoryId' element={<ItemListContainer />} />
        <Route path='/detail/:itemId' element={< ItemDetailContainer />} />
        <Route path='*' element={<Error404 />} />
        
      </Routes>

      




    </BrowserRouter>

  )
}

export default App
