import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../CartContext";
import './Style.css'

const Product = () => {
    const [myproduct, setProduct] = useState([]);

    const getdata = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProduct(data);
            console.log(data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getdata();
    }, []);

// cart part?

   const {cart, setCart} =useContext(CartContext)

   const addToCart = (event, item) => {
    event.preventDefault();
    let _cart = { ...cart };

    if (!_cart.items) {
        _cart.items = {};
    }
    if (_cart.items[item.id]) {
        _cart.items[item.id] = _cart.items[item.id] + 1;
    } else {
        _cart.items[item.id] = 1;
    }
    if (!_cart.totalitems) {
        _cart.totalitems = 0;
    }
    _cart.totalitems += 1;

    setCart(_cart);
};
       

    return (
        <div className="PContainer">
            {myproduct.map(item => (
                <Link to={`/Products/${item.id}`} key={item.id} className="product-link">
                    <div className="Pcart">
                        <img src={item.image} alt="" className='Pimg' />
                        <h5 className="title">{item.title}</h5>
                        <h4 style={{ margin: "5px" }}> <span className="Pricetag"> ₹ : {item.price} </span> &nbsp;
                            <span className='star'> <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=sph" alt="" className="Star2"/>
                                {item.rating.rate}</span>
                        </h4>
                        <button className='ATbtn'onClick={(e) => { addToCart(e, item) }}>Add To Cart</button>
                        <p className='description'>{item.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
   
};

export default Product;
