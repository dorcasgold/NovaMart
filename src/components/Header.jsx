import { MdShoppingCart } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className=' text-brown  px-5 border-b-2 border-brown py-4'>
      <div className='md:flex justify-between items-center text-xl md:mx-8 lg:mx-32 my-2 hidden'>
        <div className=" font-bold text-2xl">
          <p>NOVAMART</p>
        </div>
        <div className="flex gap-10">
          <p className=" cursor-pointer">HOME</p>
          <p className=" cursor-pointer">SHOP</p>
        </div>
        <div className="flex gap-8">
          <div className="relative ">
            <MdShoppingCart className="text-3xl" />
            <span className="absolute -top-2 -right-3 text-sm text-black font-bold text-center bg-peach  px-2 rounded-2xl">4</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaUserAstronaut />
            <p>Sign in</p>
          </div>
        </div>
      </div>
      <div onClick={handleNav} className='md:hidden flex flex-row-reverse justify-between'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        <div className=" font-bold text-2xl">
          <p >NOVAMART</p>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed w-full mt-16 left-0 top-0 py-5 bg-lbrown ease-in-out duration-500' : "fixed top-[-100%]"}>
        <div className='flex justify-center gap-12 items-center text-base my-2'>
          <div className="flex gap-2">
            <p className=" cursor-pointer">HOME</p>
            <p className=" cursor-pointer">SHOP</p>
          </div>
          <div className="flex gap-5">
            <div className="relative ">
              <MdShoppingCart className="text-3xl" />
              <span className="absolute -top-2 -right-3 text-sm text-center px-2 py-1 rounded-full">0</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaUserAstronaut />
              <p>Sign in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header