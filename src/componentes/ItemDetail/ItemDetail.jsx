import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ItemDetail = ({ item }) => {
    return (
        <div className='detail__container md-4 sm-2'>
            <h4 className='text_detail'>{item.nombre}</h4>
            <img src={item.img} alt={item.nombre} className='img__detail' />
            <p>{item.descripcion}</p>
            <p className='price'>Precio: ${item.precio}</p>
            <Link to={`/detail/${item.id}`} className='btn btn-success'>
                Comprar
            </Link>
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        nombre: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
    }).isRequired,
};

export default ItemDetail;
