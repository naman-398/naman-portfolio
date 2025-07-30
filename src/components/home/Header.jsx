import React from 'react'
import { GitHub, LInkedIn } from '../common/Icon'
import my_pic from "../../assets/images/webp/my-pic.webp";
const Header = () => {
    return (
        <div className='container mt-7 pb-16 sm:pb-20'>
            <div className="flex flex-wrap flex-row -mx-3 items-center">
                <div className='lg:w-5/12 w-full px-3'>
                    <h1 className=' font-bebas-neue font-normal text-[56px] md:text-6xl lg:text-76 xl:text-101 leading-[90%] text-white'>hi, i am <span className='block'>
                        naman bishnoi
                    </span></h1>
                    <p className='mt-2 mb-8 sm:mb-10 font-manrope font-normal text-base sm:text-lg leading-normal text-chinese-silver'>A Sydney based front-end developer passionate about building accessible and user friendly websites.</p>
                    <div className='flex items-center gap-4'>
                        <a href='tel:+91 7404215521' className='p-[17px] sm:p-[19px] rounded-[100px] bg-crayola flex items-center gap-6'>
                            <span className='font-manrope font-bold text-sm sm:text-base leading-none uppercase text-vampire-black'>Contact Me</span>
                            <span className='size-2 bg-vampire-black rounded-full'></span>
                        </a>
                        <a href="https://www.linkedin.com/in/naman-jyani-3b89362a9/" target='blank' className='p-3 sm:p-[14px] rounded-full bg-raisin-black hover:border-crayola border-2 border-transparent duration-500'>
                            <LInkedIn />
                        </a>
                        <a href="https://github.com/naman-398" target='blank' className='sm:p-[14px] p-3 rounded-full bg-raisin-black hover:border-crayola border-2 border-transparent duration-500'>
                            <GitHub />
                        </a>
                    </div>
                </div>
                <div className='lg:w-7/12 w-full px-3 mt-16'>
                    <img src={my_pic} alt="my-pic" className='max-w-[600px] max-h-[700px] w-full h-full lg:mx-auto rounded-[16px]' />
                </div>
            </div>
        </div>
    )
}

export default Header