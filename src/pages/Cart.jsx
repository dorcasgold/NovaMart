import { MdShoppingCartCheckout } from "react-icons/md";
import CartItem from '../components/CartItem';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import emptycart from '../assets/EmptyCart.png'
import { Link } from "react-router-dom";

function Cart() {
  const productData = useSelector((state) => state.novamart.productData);
  const [totalAmt, setTotalAmt] = useState("");
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);
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
              <div className="lg:w-1/4 w-full border-gray-300 border-[1px] px-3 h-full py-2">
                <div className="flex flex-col gap-8">
                  <div className="border-b-[1px] gap-4 border-b-gray-400 py-4">
                    <p className="text-center font-bold text-2xl -translate-y-4">Order Totals</p>
                    <div className='flex justify-between px-2 font-semibold'>
                      <p>Total</p>
                      <p className="font-bold">${totalAmt}</p>
                    </div>
                  </div>
                  <div className="flex cursor-pointer hover:transition-transform duration-500 items-center justify-center gap-2 hover:rounded-md bg-slate-800 hover:bg-slate-700 py-3 text-orange-300 text-xl font-semibold">
                    <MdShoppingCartCheckout />
                    <p>Checkout</p>
                  </div>
                </div>
              </div>
            </div>
          </div >
      }

    </div>

  );
}

export default Cart;
