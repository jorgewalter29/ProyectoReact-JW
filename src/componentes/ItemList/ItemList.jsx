
import ItemCard from "../ItemCard/ItemCard"

// eslint-disable-next-line react/prop-types
const ItemList = ({ productos }) => {

// Este return muestra la lista de las cards

    return (
        <div className='container mx-auto p-4'>
            <hr />

            <div className='row gap-y-1.5 justify-center pr-1.5 pl-1.5'>
                {
                    // eslint-disable-next-line react/prop-types, react/jsx-key
                    productos.map ((prod) => <ItemCard key={prod.id} item={prod}/> )
                }
            </div>
        </div>
    )
}


export default ItemList

