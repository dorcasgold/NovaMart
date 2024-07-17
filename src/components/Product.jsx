import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/novaSlice';

function Product() {
  const dispatch = useDispatch()
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty] = useState(1)
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.item) {
      setDetails(location.state.item);
    }
  }, [location.state]);

  if (!details) {
    return <div>Loading...</div>; // Show loading state while details are being fetched
  }

  function getStars(rating) {
    if (rating === undefined || rating === null) return null;

    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);

    return (
      <>
        {'★'.repeat(fullStars)}
        {halfStars && '☆'}
        {'☆'.repeat(emptyStars)}
      </>
    );
  }
  const stars = getStars(details.rating);

  // Calculate the old price using the discount percentage:
  function calculateOldPrice(price, discountPercentage) {
    return (price / (1 - discountPercentage / 100)).toFixed(2);
  }
  const oldPrice = calculateOldPrice(details.price, details.discountPercentage);

  return (
    <div>
      <div className='className="max-w-screen-xl mx-3 my-5 flex flex-col lg:flex-row gap-10"'>
        <div className="lg:w-2/5 relative">
          <img src={details.images && details.images.length > 2 ? details.images[2] : (details.images && details.images[0])} alt="productImg" />
          <div className="absolute top-8 left-8 -rotate-12">
            <p className="bg-red text-xs text-white px-4 rounded-md py-2 font-semibold">{details.availabilityStatus}</p>
          </div>
        </div>
        <div className="lg:w-3/5 flex flex-col justify-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-3xl Staat-font">{details.title}</p>
            <div className="stars text-red text-2xl font-semibold">{stars}</div>
            <div className="flex gap-3  Staat-font items-center text-2xl">
              <span className="new-price text-red font-medium">${details.price} USD</span>
              <span className="old-price line-through text-gray-400">${oldPrice} USD</span>
            </div>
          </div>
          <div className="text-gray-500">
            <p>{details.description}</p>
          </div>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button onClick={() => setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">-</button>
                <span>{baseQty}</span>
                <button onClick={() => setBaseQty(baseQty + 1)} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">+</button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(addToCart({
                  _id: details.id,
                  title: details.title,
                  image: details.imageUrl,
                  price: details.price,
                  quantity: 1,
                  description: details.description
                })) &
                toast.success(`${details.title} added to cart`)}
              className="bg-red text-white py-3 px-6 active:bg-gray-800">add to cart
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <p className=" font-semibold">Brand:</p>
              <p className="text-gray-600">{details.brand}</p>
            </div>
            <div className="flex gap-3">
              <p className=" font-semibold">SKU:</p>
              <p className="text-gray-600">{details.sku}</p>
            </div>
            <div className="flex gap-3 ">
              <p className=" font-semibold">Warranty Information:</p>
              <p className="text-gray-600">{details.warrantyInformation}</p>
            </div>
            <div className="flex gap-3 ">
              <p className=" font-semibold">Shipping Information:</p>
              <p className="text-gray-600">{details.shippingInformation}</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
        transition:Bounce>

      </ToastContainer>
    </div>
  )
}

export default Product