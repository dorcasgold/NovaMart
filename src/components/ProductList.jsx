/* eslint-disable react/prop-types */
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/novaSlice';

function ProductList({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  // Check if product.images exists and has at least one image
  const imageUrl = product.images && product.images.length > 1 ? product.images[1] : (product.images && product.images[0]);

  // Convert the rating to stars
  function getStars(rating) {
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
  const stars = getStars(product.rating);

  // Calculate the old price using the discount percentage
  function calculateOldPrice(price, discountPercentage) {
    return (price / (1 - discountPercentage / 100)).toFixed(2);
  }
  const oldPrice = calculateOldPrice(product.price, product.discountPercentage);

  return (
    <div className="group relative text-center flex flex-col gap-2">
      <div className="w-full h-64 md:h-80 lg:h-72 cursor-pointer relative overflow-hidden">
        <img
          src={imageUrl}
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          alt="productImg"
          loading="lazy"
          onClick={handleDetails}
        />
        <div className="absolute gap-2 inset-0 text-sm flex flex-col items-center justify-center -z-0 transform translate-x-full group-hover:translate-x-16 group-hover:translate-y-16 transition-transform duration-500">
          <p
            onClick={() => {
              dispatch(
                addToCart({
                  _id: product.id,
                  title: product.title,
                  image: imageUrl,
                  price: product.price,
                  quantity: 1,
                  description: product.description,
                })
              );
              toast.success(`${product.title} added to cart`);
            }}
            className="px-3 font-semibold hover:transition-transform duration-500 py-2 bg-rose-500 text-white rounded mb-2 hover:bg-black"
          >
            Add To Cart
          </p>
          <p
            className="px-3 font-semibold hover:transition-transform duration-500 py-2 bg-green-500 text-white rounded hover:bg-black"
            onClick={handleDetails}
          >
            View Detail
          </p>
        </div>
      </div>
      <div className="border-gray-300 border-[1px]">
        <div className="flex flex-col gap-2">
          <div className="stars text-red text-2xl font-semibold">{stars}</div>
          <h2 className="font-semibold text-lg">
            {product.title.length > 25 ? product.title.substring(0, 25) + '...' : product.title}
          </h2>
        </div>
        <div className="flex justify-center gap-8 items-center text-base">
          <span className="new-price text-red font-semibold">${product.price} USD</span>
          <span className="old-price font-semibold line-through text-gray-500">${oldPrice} USD</span>
        </div>
      </div>
      <div className="absolute top-4 left-0 -rotate-12">
        <p className="bg-red text-xs text-white px-4 rounded-md py-2 font-semibold">
          {product.availabilityStatus}
        </p>
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
      />
    </div>
  );
}

export default ProductList;
