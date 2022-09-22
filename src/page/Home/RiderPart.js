import React from 'react';
import { Link } from 'react-router-dom';

const RiderPart = () => {
    return (
        <div className="lg:mx-28 my-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                < div>
                    <img src="https://i.ibb.co/1mpJJzb/breadcrumb-bg.jpg" alt='' className="w-full" />
                </div>
                <div className='bg-gray-100 p-10 flex items-center'>
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-bold">RIDER THRILLING EFFECT</h1>
                        <p className="py-6">Magna fringilla urna porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Aliquam id diam maecenas ultricies mi eget. Nulla aliquet enim tortor at.</p>
                        <Link to={'/'} className="uppercase font-bold">Read More <i class="fa-solid fa-arrow-right-long"></i></Link >
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className='bg-gray-100 p-10 flex items-center'>
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-bold">ADVENTURES BIKE ENGINE</h1>
                        <p className="py-6">Orci ac auctor augue mauris augue neque gravida in. Aliquet risus feugiat in ante metus. Quisque egestas diam in arcu cursus. Massa tincidunt nunc pulvinar sapien. Neque sodales ut etiam sit amet nisl purus in. Arcu dictum varius duis at consectetur lorem donec.</p>
                        <Link to={'/'} className="uppercase font-bold">Read More <i class="fa-solid fa-arrow-right-long"></i></Link >
                    </div>
                </div>
                < div>
                    <img src="https://i.ibb.co/dfSCp5s/Rayz-1-970x.webp" alt='' className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default RiderPart;