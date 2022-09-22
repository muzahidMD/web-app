import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn bg-white text-black hover:bg-red-600 hover:text-white rounded-full">{children}</button>
        </div>
    );
};

export default PrimaryButton;