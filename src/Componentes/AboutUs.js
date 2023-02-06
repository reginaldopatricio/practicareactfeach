import { useEffect, useState } from "react"
import Navbar from "./Navbar";
import Productos from "./Productos";
// import Products from "./Products";



const AboutUs = () => {

    const { producto, setProductos } = useState([]);



    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Productos></Productos>
            {/* <Products></Products> */}
        </div>


    )
}
export default AboutUs