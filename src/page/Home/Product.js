import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, description, img, available, minimumOrder } = product;

    const navigate = useNavigate();

    const navigateToProductDetail = (id) => {
        navigate(`/purchase/${id}`)
    }

    return (
        <div className="card w-full lg:w-96 bg-base-100 shadow-xl border rounded-none">
            <figure>
                <img src={img} alt="" className="rounded-xl " />
            </figure>
            <div className="card-body">
                <h2 className="card-title uppercase text-secondary font-bold">{name}</h2>
                <p>{description}</p>
                <h3 className='text-lg font-bold'>Price: ${price}</h3>
                <div className='flex justify-between w-full'>
                    <p>Quantity: <span className='font-bold'>{available}</span></p>
                    <p> Minimum Order: <span className='font-bold'>{minimumOrder}</span></p>
                </div>
                <div className="card-actions justify-center mt-3">
                    <button onClick={() => navigateToProductDetail(_id)} className="btn bg-white text-black hover:bg-red-600 hover:text-white rounded-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;