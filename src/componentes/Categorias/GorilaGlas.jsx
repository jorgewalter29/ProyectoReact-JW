
import MOCK_DATA from '/home/walter/WALTER/react/proyecto-musko/src/data/MOCK_DATA.json';
import { Link } from 'react-router-dom';

function GorilaGlas() {
    const vidrioTemplado = MOCK_DATA.filter(producto => producto.category === "glass");

    return (
        <div className='flex flex-wrap justify-around pt-8 mt-9'>
            {vidrioTemplado.map(glass => (
                <div key={glass.id} className='card__container col-3 m-2 w-80'>
                    <h4 className='text__card'>{glass.nombre}</h4>
                    <img className='img__card' src={glass.img} alt={glass.nombre} />
                    <p>{glass.descripcion}</p>
                    <p>Precio: ${glass.precio}</p>
                    <Link to={`/detail/${glass.id}`} className='btn btn-primary'>Ver más</Link>
                </div>
            ))}
        </div>
    );
}

export default GorilaGlas;
