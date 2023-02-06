import React, { useState, useEffect } from 'react';
import './styles.css'




function Productos(props) {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        componentDidMount()
    });

    const componentDidMount = () => {

        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setProductos(data.products)

            })

    }

    return (<div class="contenedor">
        <h1>PRODUCTOS</h1>
        <p>Cliquea a la imagen para visualizar el más información</p>
        {productos.map((products) => (
            <div >
                <a href={"/Products"} >
                <img  class="fotos" src={products.images[0]} />
                </a>
            </div>
        ))}
    </div>)

}

export default Productos;