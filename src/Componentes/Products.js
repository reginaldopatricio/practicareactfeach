import React, { useState, useEffect } from 'react';




function Products(props) {

    // const [contador, setCount] = useState(props.initialNumber);
    const [productos, setProductos] = useState([]);


    // const handleClick= () => {
    //     setCount(contador + 1);
        

    // }

    useEffect(() => {
        componentDidMount()
    }, []);

    const componentDidMount = () => {

        fetch ("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
            setProductos(data.products)

        })
        
    }

    return (<div class="productos">

        <h1>{productos.title}</h1>
        <img class="imagenes" src={productos.images[0]}></img>
        <p class="p"> <b>Precio:</b>  {productos.price}</p>
    </div>)
    
}

export default Products;