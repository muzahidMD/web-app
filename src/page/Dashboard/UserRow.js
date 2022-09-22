import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://baker-manufacturer.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Make Admin failed');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Make Admin Successfully ');
                }
            })
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{
                role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-sm bg-red-500 hover:bg-white text-white hover:text-black  rounded-lg">Make Admin</button> : <button disabled className="btn btn-sm rounded-lg">Admin</button>
            }</td>
            <td><button className="btn btn-sm bg-red-500 hover:bg-white text-white hover:text-black  rounded-lg">Delete</button></td>
        </tr>
    );
};

export default UserRow;