import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import CategoriasSubMenu from './CategoriasSubMenu';


// eslint-disable-next-line react/prop-types
const MenuList = ({ close }) => {
    const [showCategoriasSubMenu, setShowCategoriasSubMenu] = useState(false);

    const handleCategoriasClick = () => {
        setShowCategoriasSubMenu(!showCategoriasSubMenu);
    };

    return (
        <nav onClick={(e) => e.stopPropagation()} className="menulist bg-blue-600">
            <AiOutlineCloseCircle onClick={close} className='ml-auto text-white text-4xl cursor-pointer' />
            <Link onClick={close} className="menulist__link" to="/">Inicio</Link>
            <Link onClick={close} className="menulist__link" to="/productos">Productos</Link>
            <div className="menulist__link cursor-pointer" onClick={handleCategoriasClick}>Categorías
                {showCategoriasSubMenu && <CategoriasSubMenu />}
            </div>
            <Link onClick={close} className="menulist__link" to="/novedades">Novedades</Link>
            <Link onClick={close} className="menulist__link" to="/contacto">Contacto</Link>
        </nav>
    );
}

export default MenuList;
