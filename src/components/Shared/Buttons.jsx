import React from 'react';

const Buttons = ({children}) => {
    return (
        <div>
            <button className='btn border-gray-200 border'>{children}</button>
        </div>
    );
};

export default Buttons;