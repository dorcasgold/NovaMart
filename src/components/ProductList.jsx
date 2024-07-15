import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const api = 'https://dummyjson.com/products?limit=8';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(api).then((res) => {
      setData(res.data.products);
      setLoading(false);
    }).catch((error) => {
      setError("There was an error fetching the data!");
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Products</h1>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-col-4 gap-10">
        {data.map((product) => (
          <div key={product.id} >
            <h2>{product.title}</h2>
            <img src={product.images && product.images[0]} alt={product.title} className='w-1/2' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
