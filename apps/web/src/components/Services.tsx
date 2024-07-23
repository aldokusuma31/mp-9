import React from 'react';
import ServiceCard from './Helper/ServiceCard';

const Services = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-[#0b0c13]'>
            <div className='text-center'>
                <p className='heading__mini'>My Services</p>
                <h1 className='heading__primary'>My Best <span className='text-yellow-300'>Services</span></h1>
            </div>
            <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center'>
                <div>
                    <ServiceCard title="React Website" num="01" />
                </div>
                <div>
                    <ServiceCard title="Next JS Website" num="02" />
                </div>
                <div>
                    <ServiceCard title="FullStack Website" num="03" />
                </div>
            </div>
        </div>
    )
}

export default Services