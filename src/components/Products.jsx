import { RiCustomerService2Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import ProductList from '../components/ProductList'

function Products({ products }) {

  return (
    <div className="my-4 flex flex-col gap-3 ">
      <div className='lg:flex-row hidden lg:flex items-baseline ml-10 lg:ml-0 my-5 md:grid md:grid-cols-2 justify-center lg:gap-14 gap-8'>
        <div className="flex items-center gap-3 text-brown">
          <RiCustomerService2Line className="text-3xl" />
          <div className="text-black flex flex-col gap-1">
            <p className=" font-bold">ONLINE SUPPORT</p>
            <p>Support online 24 hours a day</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-brown">
          <TbTruckDelivery className="text-3xl font-bold" />
          <div className="text-black flex flex-col gap-1">
            <p className=" font-bold">Free Delivery</p>
            <p>Enjoy free shipping on all orders</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-brown">
          <RiSecurePaymentLine className="text-3xl" />
          <div className="text-black flex flex-col gap-1">
            <p className=" font-bold">SECURE PAYMENT</p>
            <p>All your transactions are protected</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-brown">
          <FaMoneyCheckDollar className="text-3xl" />
          <div className="text-black flex flex-col gap-1">
            <p className=" font-bold">MONEY RETURN</p>
            <p>Your satisfaction is our priority</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-baseline">
        <p className="bg-red h-1 lg:w-[33rem] w-20 md:w-52"></p>
        <div className="flex flex-col items-center Staat-font gap-3 justify-center">
          <p className="bg-red text-white px-8 py-2 text-xl lg:text-2xl rounded-tl-[35px] rounded-br-[35px] font-semibold">Flash Sale</p>

          <p className="text-2xl">On Sale <span className="text-red">Products</span></p>

        </div>
        <p className="bg-red h-1 lg:w-[33rem] w-20 md:w-52"></p>
      </div>

      <div className="max-w-screen-xl mx-8 py-10 grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-10">
        {products.map((item) => (
          <ProductList key={item._id} product={item} />
        ))
        }
      </div>
    </div>
  )
}

export default Products