import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeWriterEffect = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Plan less, achieve more',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Events made effortless',
                1000,
                'Event planning, reimagined',
                1000,
                'We shield your event',
                1000
            ]}
            wrapper="span"
            speed={50}
            className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold'
            repeat={Infinity}
        />
    );
};

export default TypeWriterEffect