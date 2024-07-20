import { Link } from "react-router-dom";
import progress from '../assets/progress.jpg'

function Shop() {
  return (
    <div className='flex justify-center flex-col items-center my-2'>
      <img src={progress} alt="" className='lg:w-1/3 w-[100%]' />
      <p className="text-center text-lg font-semibold text-slate-900 mt-8">
        Under construction. Please go back
        <Link to='/'>
          <span className="text-orange-600 underline ml-1 cursor-pointer hover:text-orange-700">
            home
          </span>
        </Link>
      </p>

    </div>
  )
}

export default Shop