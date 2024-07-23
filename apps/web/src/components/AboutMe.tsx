import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const AboutMe = () => {
    return (
        <div className='mt-[-4rem] bg-black pb-[3rem]'>
            <div className='w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
                <div>
                    <p className='heading__mini'>About Me</p>
                    <h1 className='heading__primary'>Great quality <span className='text-yellow-400'>
                        Website</span> for your company
                    </h1>
                    <p className='text-[15px] mt-[1.3rem] text-white opacity-75'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ea quibusdam veritatis dolores ratione, vitae officiis molestiae quo nostrum voluptatem, quaerat, voluptatibus quisquam asperiores reprehenderit dolorem. Culpa totam iure laboriosam.
                    </p>
                    <div className='mt-[2rem] space-y-3'>
                        <div className='flex items-center space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>Frontend Development</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>Web Development</p>
                        </div>
                    </div>
                </div>
                <div className='lg:ml-auto'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]'>
                        <div className='p-6 text-center bg-yellow-500'>
                            <p className='text-[50px] text-black font-bold'>1</p>
                            <p className='text-[20px] text-black font-600'>Year of experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe