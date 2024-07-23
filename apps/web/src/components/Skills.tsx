import React from 'react';
import SkillCard from './Helper/SkillCard';

const Skills = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-black'>
        <div className='grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center'>
            <div className='col-span-3'>
                <p className='heading__mini'>My Skills</p>
                <h1 className='heading__primary'>The <span className='text-yellow-300'>Skills</span> that bring it to life</h1>
                <p className='text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quos quod illo iste ducimus fugit adipisci dolor, assumenda minus possimus non nulla totam ipsum cumque numquam tempore eveniet velit optio.
                </p>
                <button className='relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-orange-600 text-white font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180'>
                    <span className='relative z-10'>Details</span>
                </button>
            </div>
            <div className='col-span-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center'>
                    <div>
                        <SkillCard
                        title="React"
                        image="/images/react.svg"
                        percent="90%"
                         />
                    </div>
                    <div>
                        <SkillCard
                        title="HTML"
                        image="/images/html.svg"
                        percent="90%"
                         />
                    </div>
                    <div>
                        <SkillCard
                        title="CSS"
                        image="/images/css.svg"
                        percent="90%"
                         />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills