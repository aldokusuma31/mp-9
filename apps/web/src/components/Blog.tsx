import React from 'react';
import BlogCard from './Helper/BlogCard';

const Blog = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-black'>
            <div className='text-center'>
                <p className='heading__mini'>My Blog</p>
                <h1 className='heading__primary'>
                    Latest <span className='text-yellow-300'>Blog</span> & News
                </h1>
            </div>
            <div className='w-[80%] mx-auto pt-[3rem] md:pt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[2rem]'>
                <div>
                    <BlogCard
                        title="Fullstack Developer Journey"
                        comment="4"
                        date="1 June 2024"
                        image="/images/b1.png"
                    />
                </div>
                <div>
                    <BlogCard
                        title="Blogging Pictures! Photo by Kenny Eliason on Unsplash"
                        comment="10"
                        date="4 June 2024"
                        image="/images/b2.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Blog