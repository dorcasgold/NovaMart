import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import Products from "../components/Products"
import { useLoaderData } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProducts(data.data.products)
  }, [data])
  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  )
}

export default Home