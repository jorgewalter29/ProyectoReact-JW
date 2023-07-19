import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ItemCard = ({ item }) => {

    return (

        <div className='card__container col-3 m-2'>
            <h4 className='text__card' > {item.nombre} </h4>
            <img className='img__card' src={item.img} alt={item.nombre} />
            <p> {item.descripcion} </p>
            <p> Precio: ${item.precio} </p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'> ver mas </Link>
        </div>
    )
}


ItemCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        nombre: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
    }).isRequired,
}

export default ItemCard