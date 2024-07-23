import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/20/solid';

const Footer = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-black'>
            <div className=' w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40'>
                <div>
                    <div className='font-logo text-white text-[18px]'>
                        <span className='text-[30px] md:text-[40px] text-yellow-400'>WD</span>Pirates
                    </div>
                    <h1 className='text-[14px] mt-[0.5rem] text-white opacity-70'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio blanditiis voluptates corrupti esse dignissimos iure quibusdam harum culpa aspernatur, quisquam minus ea voluptatem expedita, dolorem placeat eos repellendus laborum. Iste?
                    </h1>
                    <p className='mt-[1.3rem] text-yellow-300 underline font-semibold'>
                        zackrozaq36@gmail.com
                    </p>
                </div>
                <div className='md:mx-auto'>
                    <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>
                        Quick Link
                    </h1>
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
                        About
                    </p>
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
                        Services
                    </p>
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
                        Project
                    </p>
                    <p className='text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'>
                        Contact
                    </p>
                </div>
                <div className='lg:mx-auto'>
                    <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>
                        Address
                    </h1>
                    <div className='flex items-center mt-[1rem] space-x-2'>
                        <MapIcon className='w-[1rem] h-[1rem] text-yellow-300' />
                        <p className='text-[17px] font-normal text-white opacity-75'>Jakarta, Indonesia</p>
                    </div>
                    <div className='flex items-center mt-[1rem] space-x-2'>
                        <EnvelopeIcon className='w-[1rem] h-[1rem] text-yellow-300' />
                        <p className='text-[17px] font-normal text-white opacity-75'>zackrozaq36@gmail.com</p>
                    </div>
                    <div className='flex items-center mt-[1rem] space-x-2'>
                        <PhoneIcon className='w-[1rem] h-[1rem] text-yellow-300' />
                        <p className='text-[17px] font-normal text-white opacity-75'>+62 8899775521</p>
                    </div>
                </div>
            </div>
            <div className='mt-[1.4rem] w-[80%] mx-auto text-white opacity-70'>
                &#169; Copyright Web Developer Pirates 2024
            </div>
        </div>
    )
}

export default Footer;