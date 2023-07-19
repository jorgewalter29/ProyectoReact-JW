import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">JW</h1>

                <nav className="navbar">
                    <Link className="navbar__link" to="/">Inicio</Link>
                    <Link className="navbar__link" to="/productos/iphone">Iphone</Link>
                    <Link className="navbar__link" to="/productos/samsung">Samsung</Link>
                    <Link className="navbar__link" to="/productos/motorola">Motorola</Link>
                    <Link className="navbar__link" to="/contacto">Contacto</Link>
                    {/* Carrito de compras */}
                    <Link className="navbar__link" to="#">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <Badge pill bg="danger">
                            5 {/* Cantidad de artículos en el carrito */}
                        </Badge>
                    </Link>
                </nav>
            </div>
        </header>
    );
};
