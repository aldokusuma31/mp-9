import { BugAntIcon, CodeBracketIcon, CommandLineIcon, CursorArrowRaysIcon, RocketLaunchIcon, ServerIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface Props {
    title: string;
    num: string;
}

const iconMapping = {
    "01": CommandLineIcon,
    "02": ServerIcon,
    "03": CodeBracketIcon,
    "04": CursorArrowRaysIcon,
    "05": RocketLaunchIcon,
    "06": BugAntIcon,
}

const ServiceCard = ({ num, title }: Props) => {
    const IconComponent = (iconMapping as Record<string, React.ElementType>)[num] || CommandLineIcon;

    return (
        <div className='bg-black custom__service z-[100] relative transform rounded-2xl text-center p-6 shadow-md'>
            <IconComponent className="w-[5rem] relative z-[1] mx-auto h-[5rem] text-yellow-400" />
            <h1 className='text-[25px] relative z-[1] text-white mt-[1rem]'>
                {title}
            </h1>
            <p className='text-[15px] text-white opacity-60 mt-[0.8rem]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi eum, corrupti eius provident laboriosam eveniet nostrum, consectetur dolorum voluptas commodi dolores, itaque totam adipisci praesentium! Reprehenderit cupiditate ducimus possimus delectus!
            </p>
            <p className='text-[1.6rem] text-white font-bold absolute top-3 right-4'>
                {num}
            </p>
        </div>
    )
}

export default ServiceCard