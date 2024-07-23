import React from 'react';

const Contact = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto'>
                <div>
                    <p className='heading__mini'>Contact Us</p>
                    <h1 className='heading__primary'>
                        <span className='text-yellow-400'></span>
                    </h1>
                    <p className='text-[15px] text-white mt-[1rem] opacity-75'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, perferendis laudantium, aliquam provident similique saepe necessitatibus sunt libero nihil at vero corporis nostrum maxime modi praesentium cumque? Blanditiis, aperiam distinctio.
                    </p>
                    <h1 className='mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold'>
                        +62 899664421
                    </h1>
                </div>
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center'>
                        <input
                            type="text"
                            placeholder='Name'
                            className='py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4'
                        />
                        <input
                            type="email"
                            placeholder='Email Address'
                            className='py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4'
                        />
                    </div>
                    <input
                        type="text"
                        placeholder='Subject'
                        className='py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4'
                    />
                    <textarea
                        placeholder='Message'
                        className='py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4'
                        rows={4}>
                    </textarea>
                    <button className='py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-md px-4'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact;