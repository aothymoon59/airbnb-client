import React from 'react';

const Container = ({ children }) => {
    return (
        <div className='max-w-[2520px] mx-auto px-4 sm:px-2 md:px-10 xl:px-20'>
            {children}
        </div>
    );
};

export default Container;