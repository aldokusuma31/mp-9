import React from 'react';
import PriceCard from './Helper/PriceCard';

const Price = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-black'>
            <div className='text-center'>
                <p className='heading__mini'>Pricing</p>
                <h1 className='heading__primary'>Better <span>Price</span> For Your Business</h1>
            </div>
            <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pt-[4rem] md:pt-[7rem]'>
                <PriceCard
                    plane="Basic"
                    price="0$"
                    save="100%"
                    bg="bg-red-900"
                />
            </div>
        </div>
    )
}

export default Price