import MOCK_DATA from '/home/walter/WALTER/react/proyecto-musko/src/data/MOCK_DATA.json';
import { Link } from 'react-router-dom';



function FundaList() {
    const fundas = MOCK_DATA.filter(producto => producto.category === "funda");

    return (
        <div className='flex flex-wrap justify-around pt-8 mt-9'>
            {fundas.map(funda => (
                <div key={funda.id} className='card__container col-3 m-2 w-80'>
                    <h4 className='text__card'>{funda.nombre}</h4>
                    <img className='img__card' src={funda.img} alt={funda.nombre} />
                    <p>{funda.descripcion}</p>
                    <p>Precio: ${funda.precio}</p>
                    <Link to={`/detail/${funda.id}`} className='btn btn-primary'>Ver más</Link>
                </div>
            ))}
        </div>
    );
}



export default FundaList;
