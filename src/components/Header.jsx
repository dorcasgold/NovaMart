import { MdShoppingCart } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [nav, setNav] = useState(false)
  const productData = useSelector((state) => state.novamart.productData)
  const userInfo = useSelector((state) => state.novamart.userInfo);

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='  bg-slate-950 text-orange-500 font-sans px-5 border-b-2 border-orange-500 py-4 Staat-font sticky top-0 z-50 '>
      <div className='md:flex justify-between items-center text-xl md:mx-8 lg:mx-32 my-2 hidden'>
        <div className=" font-bold text-2xl">
          <Link to='/'>
            <p>NOVAMART</p>
          </Link>
        </div>
        <div className="flex gap-10">
          <Link to='/'>
            <p className=" cursor-pointer">HOME</p>
          </Link>
          <Link to='shop'>
            <p className=" cursor-pointer">SHOP</p>
          </Link>
        </div>
        <div className="flex gap-8">
          <div className="relative cursor-pointer">
            <Link to='cart'>
              <MdShoppingCart className="text-3xl" />
              <span className="absolute -top-2 -right-3 text-sm text-black font-semibold text-center bg-green-500  px-2 rounded-2xl">{productData.length}</span>
            </Link>
          </div>
          <div className="flex gap-2 items-center">

            {
              userInfo ?
                <Link to='signin'>
                  <img src={userInfo.image} alt="userLogo" className='w-8 h-8 rounded-full object-cover cursor-pointer' />
                </Link>
                :
                <Link to='signin'>
                  <FaUserAstronaut className="cursor-pointer" />
                </Link>

            }

            <Link to='signin'>
              {userInfo ? userInfo.name : <p className=" cursor-pointer">Sign in</p>}
            </Link>
          </div>
        </div>
      </div>
      <div className='md:hidden flex flex-row-reverse justify-between'>
        {nav ? <AiOutlineClose size={20} onClick={handleNav} /> : <AiOutlineMenu size={20} onClick={handleNav} />}
        <div className=" font-bold text-2xl">
          <Link to='/'>
            <p>NOVAMART</p>
          </Link>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed w-full mt-16 left-0 top-0 py-5 bg-red text-white ease-in-out duration-500' : "fixed top-[-100%]"}>
        <div className='flex justify-center gap-12 items-center text-base my-2'>
          <div className="flex gap-2">
            <Link to='/'>
              <p className=" cursor-pointer">HOME</p>
            </Link>
            <Link to='shop'>
              <p className=" cursor-pointer">SHOP</p>
            </Link>
          </div>
          <div className="flex gap-5">
            <div className="relative cursor-pointer">
              <Link to='cart'>
                <MdShoppingCart className="text-3xl" />
              </Link>
              <span className="absolute -top-2 -right-3 text-sm text-center bg-green-500 px-2 py-1 rounded-full">{productData.length}</span>
            </div>
            <div className="flex gap-2 items-center">
              {
                userInfo ?
                  <Link to='signin'>
                    <img src={userInfo.image} alt="userLogo" className='w-8 h-8 rounded-full object-cover cursor-pointer' />
                  </Link>
                  :
                  <Link to='signin'>
                    <FaUserAstronaut className="cursor-pointer" />
                  </Link>

              }
              {
                <Link to='signin'>
                  {userInfo ? userInfo.name : <p className=" cursor-pointer">Sign in</p>}
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header