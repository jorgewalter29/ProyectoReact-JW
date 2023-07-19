
import ItemCard from "../ItemCard/ItemCard"

// eslint-disable-next-line react/prop-types
const ItemList = ({ productos }) => {

    return (
        <div className='container'>
            <h2>  </h2>
            <hr />


            <div className='row'>
                {
                    // eslint-disable-next-line react/prop-types, react/jsx-key
                    productos.map ((prod) => <ItemCard key={prod.id} item={prod}/> )
                }
            </div>
        </div>
    )
}


export default ItemList

