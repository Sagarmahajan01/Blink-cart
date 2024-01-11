import { useEffect, useState } from 'react';
import{useParams} from 'react-router-dom'

import '../App.css'

const SingleProduct = () => {

    const [Product, setProduct]=useState({})
    const params= useParams()
    
    console.log(params)
    const fetchdata = async () => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
            const data = await res.json();
            setProduct(data);
            console.log(data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchdata();
    }, [params.id]);
   
    return (
        <>
       
        <div className='SPcontainer'>
         <button className='backBTN' >Back</button>
           <div className='SPproduct' >
                           <div className='SPBox'>
                            <img src={Product.image} alt=""  className='SPimage'/>
                           </div>
                           <div className='SPBox'>
                            <div style={{display:"flex", justifyContent:"space-between", 
                            }}> 
                                    <span className='category'>{Product.category}</span>  
                                    <span className='star hide'> 
                                    <span>{3.8}</span> 
                                    <img src="https://img.freepik.com/free-vector/start_53876-25533.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=sph" alt="" style={{ width: "25px", marginTop: "10px" }} />
                                    
                                    </span>
                                    
                            </div>
                            
                              <h1> {Product.title} </h1>
                               <h5> {Product.description}</h5>
                             <h2>Price :₹ {Product.price}</h2>
                             <button>Add To Cart</button>
                           </div>
           </div>
        </div>
       
        </>
    );
}

export default SingleProduct;
