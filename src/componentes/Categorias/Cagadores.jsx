
import MOCK_DATA from '/home/walter/WALTER/react/proyecto-musko/src/data/MOCK_DATA.json';
import { Link } from 'react-router-dom';

function Cargadores() {
    const cargadores = MOCK_DATA.filter(producto => producto.category === "cargador");

    return (
        <div className='flex flex-wrap justify-around pt-8 mt-9'>
            {cargadores.map(cargador => (
                <div key={cargador.id} className='card__container col-3 m-2 w-80'>
                    <h4 className='text__card'>{cargador.nombre}</h4>
                    <img className='img__card' src={cargador.img} alt={cargador.nombre} />
                    <p>{cargador.descripcion}</p>
                    <p>Precio: ${cargador.precio}</p>
                    <Link to={`/detail/${cargador.id}`} className='btn btn-primary'>Ver más</Link>
                </div>
            ))}
        </div>
    );
}

export default Cargadores;
