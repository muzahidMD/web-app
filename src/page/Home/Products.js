import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [products] = useProducts();

    return (
        <div className='my-8 mx-auto w-[90%] lg:w-[85%]'>
            <h2 className='text-2xl text-center lg:text-3xl uppercase font-bold my-10'>Products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-5'>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;