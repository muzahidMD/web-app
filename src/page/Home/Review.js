import React from 'react';

const Review = () => {
    return (
        <div className='my-10'>
            <h2 className='text-2xl text-center lg:text-3xl uppercase font-bold'>REACH OUT OUR CUSTOMER</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-16 lg:mx-28'>
                <div className='flex justify-center items-center shadow rounded-md'>
                    <div className=''>
                        <div className="avatar flex justify-center items-center my-5">
                            <div className="w-24 rounded-full">
                                <img src="https://i.ibb.co/vX1Q6T7/Anjelina.png" alt='' />
                            </div>
                        </div>
                        <div className=''>
                            <h3 className='text-center'><span className='uppercase font-semibold '>Anjelina</span> - Developer</h3>
                            <p className='mt-2 p-4'>Orci ac auctor augue mauris augue neque gravida in. Aliquet risus feugiat in ante metus. Quisque egestas diam in arcu cursus.</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center shadow rounded-md'>
                    <div className=''>
                        <div className="avatar flex justify-center items-center my-5">
                            <div className="w-24 rounded-full">
                                <img src="https://i.ibb.co/VTm0dhJ/Piesertin.png" alt='' />
                            </div>
                        </div>
                        <div className=''>
                            <h3 className='text-center'><span className='uppercase font-semibold '>Piesertin</span> - Designer</h3>
                            <p className='mt-2 p-4'>Orci ac auctor augue mauris augue neque gravida in. Aliquet risus feugiat in ante metus. Quisque egestas diam in arcu cursus.</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center shadow rounded-md'>
                    <div className=''>
                        <div className="avatar flex justify-center items-center my-5">
                            <div className="w-24 rounded-full">
                                <img src="https://i.ibb.co/7K8w1ym/Andersen.png" alt='' />
                            </div>
                        </div>
                        <div className=''>
                            <h3 className='text-center'><span className='uppercase font-semibold '>Andersen</span> - Marketer</h3>
                            <p className='mt-2 p-4'>Orci ac auctor augue mauris augue neque gravida in. Aliquet risus feugiat in ante metus. Quisque egestas diam in arcu cursus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;