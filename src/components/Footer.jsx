import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-slate-950 text-orange-500 font-sans flex flex-col z-50'>
      <div className='flex justify-between mx-2 items-center lg:items-start gap-2 lg:mx-40 py-10 flex-col lg:flex-row'>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">NovaMart</p>
          <p className="w-[18rem] text-orange-600">Elevate your shopping experience with our amazing selection of products.</p>
          <div className="flex gap-2">
            <div className="bg-orange-500 text-black px-3 cursor-pointer py-2 text-2xl rounded-md">
              <FaTwitter />
            </div>
            <div className="bg-orange-500 text-black px-3 cursor-pointer py-2 text-2xl rounded-md">
              <FaFacebookF />
            </div>
            <div className="bg-orange-500 text-black px-3 cursor-pointer py-2 text-2xl rounded-md">
              <FaInstagram />
            </div>
            <div className="bg-orange-500 text-black px-3 cursor-pointer py-2 text-2xl rounded-md">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">Useful Links</p>
          <p>Find a Store</p>
          <p>Order Tracking</p>
          <p> Size Guide</p>
          <p>FAQs</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">Legal</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">Company</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Support</p>
          <p>Careers</p>
        </div>
      </div>
      <div className="lg:mx-40">
        <p className="bg-orange-500 w-[24rem] lg:w-[58rem] h-[2px]"></p>
        <div className="flex justify-between my-2">
          <p>© 2024, NovaMart</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer