import { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
  const api = 'https://dummyjson.com/products?limit=1';
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(api).then((res) => {
      setData(res.data.products);
    }).catch((error) => {
      console.error("There was an error fetching the data!", error);
    });
  }, []);

  return (
    <div>

    </div>
  );
}

export default Api;
