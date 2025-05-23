import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriter = () => {

    return (
        <span className='App'>

            {/* Style will be inherited from the parent element */}
            <Typewriter
                words={['Sketch', 'Photography', 'Drawing', 'Gaming', 'Fishing', 'Coding', 'Swimming']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            />


        </span>
    )
}

export default TypeWriter;