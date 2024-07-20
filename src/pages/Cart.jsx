import { MdShoppingCartCheckout } from "react-icons/md";
import CartItem from '../components/CartItem';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import emptycart from '../assets/EmptyCart.png'
import { Link } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

function Cart() {
  const productData = useSelector((state) => state.novamart.productData);
  const userInfo = useSelector((state) => state.novamart.userInfo);
  const [payNow, setPayNow] = useState(false)

  const [totalAmt, setTotalAmt] = useState("");
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleChcekout = () => {
    if (userInfo) {
      setPayNow(true)
    } else (
      toast.error("Please Log in to continue")
    )
  }
  const payment = async (token) => {
    await axios.post("http://localhost:8000./pay", {
      amount: totalAmt * 100,
      token: token,
    });
  }
  return (
    <div>
      {
        productData.length === 0 ?
          <div className="w-full flex flex-col justify-center items-center mt-28 lg:mt-0">
            <img src={emptycart} alt="" className="lg:w-1/4 w-1/2" />
            <div className="flex flex-col gap-2 my-2">
              <p className="text-2xl text-center font-bold">Empty Cart?</p>
              <div className="flex">
                <p className=" font-semibold">Let&apos;s fill it up </p>
                <Link to='/'>
                  <span className="underline font-bold cursor-pointer px-2">start shopping!</span>
                </Link>
              </div>
            </div>
          </div>
          :
          < div >
            <div className="max-w-screen-xl lg:mx-10 py-2 lg:py-20 flex flex-col gap-5 lg:flex-row">
              <CartItem productData={productData} />
              <div className="lg:w-1/4 w-full border-gray-300 box lg:fixed right-8 border-[1px] px-3 h-1/3 py-2">
                <div className="flex flex-col gap-8">
                  <div className="border-b-[1px] gap-4 border-b-gray-400 py-4">
                    <p className="text-center font-bold text-2xl -translate-y-4">Order Totals</p>
                    <div className='flex justify-between px-2 font-semibold'>
                      <p>Total</p>
                      <p className="font-bold">${totalAmt}</p>
                    </div>
                  </div>
                  <div
                    onClick={handleChcekout}
                    className="flex cursor-pointer hover:transition-transform duration-500 items-center justify-center gap-2 hover:rounded-md bg-slate-800 hover:bg-slate-700 py-3 text-orange-300 text-xl font-semibold">
                    <MdShoppingCartCheckout />
                    <p>Checkout</p>
                  </div>
                  {
                    payNow && (
                      <div className="w-full mt-6 flex items-center justify-center">
                        <StripeCheckout
                          stripeKey="pk_test_51PcBCTAg00tmyCg7ECgCGuXl1xKM9EtP4vQqWbeL8nK2WjNNehWF2nBW4859nZ9rc1Alh1ItOhFT8b3P6xHgBCkG00ynktayQn"
                          name="Novamart Online Shopping"
                          amount={totalAmt * 100}
                          label="Pay to Novamart"
                          description={`Your Payment amount is $${totalAmt}`}
                          token={payment}
                          email={userInfo.email}
                        />
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div >
      }
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

export default Cart;
