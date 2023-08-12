import ItemListContainer from "../ItemListContainer/ItemListContainer";


const Productos = () => {

    // Mostrar los productos filtrados en las cards
    return (
        <div className="container mx-auto p-4">
            <hr />

            <div>
                <ItemListContainer />
            </div>
        </div>
    );
};

export default Productos
