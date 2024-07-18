import { useDispatch } from "react-redux";
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from "../redux/novaSlice";
import { ToastContainer, toast } from 'react-toastify';
import { MdDeleteForever } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

function CartItem({ productData }) {
  const dispatch = useDispatch();

  return (
    <div className='lg:w-2/3 w-full pr-10'>
      <div className="w-full">
        <h2 className="font-titleFont text-2xl font-semibold text-brown">Shopping Cart</h2>
      </div>
      <div>
        {
          productData.map((item) => (
            <div key={item._id} className="flex items-center justify-between lg:mt-6 border-gray-500 border-b">
              <div className="flex items-center gap-2">
                <MdDeleteForever
                  onClick={() => {
                    dispatch(deleteItem(item._id));
                    toast.error(`${item.title} is removed`);
                  }}
                  className="text-3xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                />
                {item.image ? (
                  <img
                    className="w-32 h-32 object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                ) : (
                  <div className="w-32 h-32 flex items-center justify-center bg-gray-200 text-gray-600">
                    No Image
                  </div>
                )}
              </div>
              <div className="flex lg:flex-row flex-col items-center justify-between gap-6 mt-6">
                <h2 className="lg:w-52 w-60 font-semibold">{item.title}</h2>
                <p className="w-10">${item.price}</p>
                <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                  <p className="text-sm">Quantity</p>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <span
                      onClick={() =>
                        dispatch(
                          decrementQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      -
                    </span>
                    {item.quantity}
                    <span
                      onClick={() =>
                        dispatch(
                          incrementQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      +
                    </span>
                  </div>
                </div>
                <p className="w-14">${item.quantity * item.price}</p>
              </div>

            </div>
          ))
        }
      </div>
      <button
        onClick={() => {
          dispatch(resetCart());
        }}
        className="bg-red rounded-lg text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
      >
        Reset Cart
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          Go Shopping
        </button>
      </Link>

      <ToastContainer
        position="top-right"
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

export default CartItem;
