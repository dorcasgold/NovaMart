import { useState } from 'react'
import { data } from '../assets/Index'
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi'
function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1)
  }
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className='w-screen h-[650px] relative'>
        <div className='lg:w-[400vw] w-full h-full flex transition-transform duration-1000' style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          <img src={data[0].img} alt="ImgOne" className='lg:w-screen h-1/2 lg:h-full object-cover' loading='priority' />
          <img src={data[1].img} alt="ImgTwo" className='lg:w-screen h-1/2 lg:h-full object-cover' loading='priority' />
          <img src={data[2].img} alt="ImgThree" className='lg:w-screen h-1/2 lg:h-full object-cover' loading='priority' />
          <img src={data[3].img} alt="ImgFour" className='lg:w-screen h-1/2 lg:h-full object-cover' loading='priority' />
        </div>
        <div className=' absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
          <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center rounded-[3rem] justify-center hover:cursor-pointer bg-brown hover:bg-lbrown text-white active:bg-peach duration-300'>
            <HiArrowLeft />
          </div>
          <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center rounded-[3rem] justify-center hover:cursor-pointer bg-brown hover:bg-lbrown text-white active:bg-peach duration-300'>
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner