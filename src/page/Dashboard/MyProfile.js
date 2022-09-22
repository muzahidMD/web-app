import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);


    const handleUpdateProduct = e => {
        e.preventDefault();

        const profile = {
            address: e.target.address.value,
            education: e.target.education.value,
            phone: e.target.phone.value,
            img: e.target.img.value,
        }

    };

    return (
        <div className='min-h-screen bg-base-100'>
            <h2 className='text-center text-2xl mt-2'>My Profile</h2>

            <form onSubmit={handleUpdateProduct}>
                <div className="form-control mx-auto text-left w-full max-w-xs">
                    <label htmlFor="name" className='my-2'>Name</label>
                    <input type="text" name='name' id='name' value={user?.displayName} disabled className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control mx-auto text-left w-full max-w-xs">
                    <label htmlFor="email" className='mb-2'>Email</label>
                    <input type="email" name='email' id='email' value={user?.email} disabled className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control mx-auto text-left w-full max-w-xs">
                    <label htmlFor="address" className='my-2'>Address</label>
                    <input type="text" name='address' placeholder="Address" id='address' className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control mx-auto text-left w-full max-w-xs">
                    <label htmlFor="education" className='my-2'>Education</label>
                    <input type="text" name='education' placeholder="Education" id='education' className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control mx-auto text-left w-full max-w-xs">
                    <label htmlFor="Phone" className='my-2'>Phone</label>
                    <input type="number" name='phone' placeholder="Phone Number" id='phone' className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control mx-auto text-left w-full max-w-xs">
                    <label htmlFor="Image" className='my-2'>Photo URL</label>
                    <input type="text" name='img' placeholder="Photo URL" id='img' className="input input-bordered w-full max-w-xs" required />
                </div>

                <input type="submit" value="Update Profile" className='btn form-control mx-auto w-full max-w-xs hover:bg-white hover:text-black bg-secondary text-white rounded-full my-4' />
            </form>
        </div>
    );
};

export default MyProfile;