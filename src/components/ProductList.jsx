import { ToastContainer, toast } from 'react-toastify';

function ProductList({ product }) {
  // Check if product.images exists and has at least three images
  const imageUrl = product.images && product.images.length > 2 ? product.images[2] : (product.images && product.images[0]);

  // convert the rating to stars:
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
  // Convert rating to stars

  // Calculate the old price using the discount percentage:
  function calculateOldPrice(price, discountPercentage) {
    return (price / (1 - discountPercentage / 100)).toFixed(2);
  }
  const oldPrice = calculateOldPrice(product.price, product.discountPercentage);

  return (
    <div className="group relative text-center flex flex-col gap-2 ">
      <div className="w-full h-96 cursor-pointer relative overflow-hidden">
        <img src={imageUrl} className="w-full h-full object-cover group-hover:scale-110 duration-500" alt="productImg" loading='priority' />
        <div className="absolute gap-2 inset-0 flex flex-col items-center justify-center bg-slate-700 bg-opacity-75 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
          <p onClick={() => toast.success(`${product.title} is added`)} className="px-3 font-semibold hover:transition-transform duration-500 py-2 bg-red text-white rounded mb-2 hover:bg-black">Add To Cart</p>
          <p className="px-3 font-semibold hover:transition-transform duration-500 py-2 bg-green-500 text-white rounded hover:bg-black">View Detail</p>
        </div>
      </div>
      <div className="border-gray-300 border-[1px]">
        <div className="flex flex-col gap-2">
          <div className="stars text-red text-3xl font-semibold">{stars}</div>
          <h2 className=" font-semibold text-xl">{product.title.length > 25 ? (product.title.substring(0, 25)) + '...' : product.title}</h2>
        </div>
        <div className="flex justify-center gap-8 items-center">
          <span className="new-price text-red font-semibold text-lg">${product.price} USD</span>
          <span className="old-price font-semibold line-through text-gray-500">${oldPrice} USD</span>
        </div>
      </div>
      <div className="absolute top-4 left-0 -rotate-12">
        <p className="bg-red text-white px-6 py-2 font-semibold">{product.availabilityStatus}</p>
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
  );
}

export default ProductList;
