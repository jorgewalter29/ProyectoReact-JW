import { Link } from 'react-router-dom';
import './Menu.scss';


const CategoriasSubMenu = () => {
    return (
        <div className="categorias__submenu">
            <Link className='menulist__link' to="/Fundas">Fundas</Link>
            <hr />
            <Link className='menulist__link' to="/GorilaGlas">GorilaGlas</Link>
            <hr />
            <Link className='menulist__link' to="/Cargadores">Cargadores</Link>
            <hr />
        </div>
    );
};

export default CategoriasSubMenu;







