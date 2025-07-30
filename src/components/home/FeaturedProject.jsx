import React from 'react'

const FeaturedProject = () => {
    return (
        <div className='border-outer-space border-t-[1px] border-b-[1px] py-20'>
            <div className='container'>
                <h2 className='text-white font-bebas-neue font-normal text-76 leading-none'>Featured Projects</h2>
                <p className='font-normal text-base sm:text-lg leading-normal text-chinese-silver mt-2'>Here are some of the selected projects that showcase my passion for <span className='block'> front-end development. </span></p>
                <div className='flex flex-row flex-wrap -mx-3 mt-20'>
                    <div className='w-1/2 px-3'>
                        <div className='p-[126px_57px] rounded-[12px] bg-eerie-black'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProject