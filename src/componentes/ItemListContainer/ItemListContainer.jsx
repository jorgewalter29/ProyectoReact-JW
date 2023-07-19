import { useEffect, useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


// Estructura basica para trabajar con precesos asincronicos
const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)


    // efecto para no caer en procesos infinitos de render
    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(r => {
                if (categoryId) {
                    setProductos(r.filter(prod => prod.category === categoryId))
                } else {
                    setProductos(r)
                }
            })

            .catch(e => console.log(e))
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])



    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )

}

export default ItemListContainer