import  { useState, useEffect } from "react";

const getProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map(item => (
          <div className="ProductCart" key={item.key}>
            <h1>{item.brand}</h1>
            <h1>{item.description}</h1>
            <h2>{item.price}</h2>
          </div>
        ))
      )}
    </div>
  );
}

export default getProduct;
