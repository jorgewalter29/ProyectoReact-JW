import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu'

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <img className=' w-32 h-14' src="/public/jw.png" alt="logo" />

                    {/* Carrito de compras */}
                    <Link className="navbar__link" to="#">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <Badge pill bg="danger">
                            5 {/* Cantidad de artículos en el carrito */}
                        </Badge>
                    </Link>

                    <Menu />
                
            </div>
        </header>
    );
};

