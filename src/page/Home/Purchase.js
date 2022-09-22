import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const { _id, name, price, description, img, minimumOrder, available } = product;
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId]);

    const quantityRef = useRef('')
    const [quantity, setQuantity] = useState(minimumOrder)
    const [btnDisable, setBtnDisable] = useState(false)
    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newQuantity = quantityRef.current.value || minimumOrder;
        if (newQuantity < minimumOrder) {
            setBtnDisable(true)
            toast.error(`Minimum order ${minimumOrder} pieces`)
            return;
        }
        const order = {
            name: e.target.name.value,
            email: e.target.email.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            productName: name,
            quantity: newQuantity
        }
        fetch('https://baker-manufacturer.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Order Placed')
                e.target.reset();
            })

    }
    useEffect(() => {
        if (quantity >= minimumOrder) {
            setBtnDisable(false)
        }
    }, [quantity, minimumOrder])



    return (
        <div>
            <div className='px-16 flex-row lg:flex lg:justify-around '>
                <div className="w-3/5 bg-base-100 shadow-xl">
                    <div className="px-10 pt-10 flex justify-center">
                        <img src={img} alt="" className="rounded-xl" />
                    </div>
                    <div className="card-body  ">
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                        <p><strong>Price:</strong> ${price}</p>
                        <div className='flex justify-between w-full'>
                            <p>Quantity: <span className='font-bold'>{available}</span></p>
                            <p> Minimum Order: <span className='font-bold'>{minimumOrder}</span></p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-2xl text-center text-secondary mb-3'>Order Now</h2>
                            <form onSubmit={handleSubmit} >
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
                                    <label htmlFor="Phone" className='my-2'>Phone</label>
                                    <input type="number" name='phone' placeholder="Phone Number" id='phone' className="input input-bordered w-full max-w-xs" required />
                                </div>
                                <div className="form-control mx-auto text-left w-full max-w-xs">
                                    <label htmlFor="quantity" className='my-2'>Order Quantity <span style={{ color: "gray" }}>(minimum {minimumOrder} pcs.)</span></label>
                                    <input onChange={handleQuantity} placeholder={minimumOrder} ref={quantityRef} type="number" name='quantity' id='quantity' className="input input-bordered w-full max-w-xs" />
                                </div>

                                <input disabled={btnDisable} type="submit" value="PLACE ORDER" className='btn form-control mx-auto w-full max-w-xs hover:bg-white hover:text-black bg-secondary text-white rounded-full my-4' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Purchase;