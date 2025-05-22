import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthContexts';
import { FaCalendarAlt, FaTag, FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import { MdAttachEmail } from "react-icons/md";
import Swal from 'sweetalert2';

const MyGroup = () => {

    const { user, loading, setLoading } = use(AuthContext);
    const groups = useLoaderData();

    const myAllGroup = groups.filter(group => group.userEmail === user.email)
    const [remainingGroup, setRemainingGroup] = useState(myAllGroup);


    // const [localLoading, setLocalLoading] = useState(true);

    // useEffect(() => {
    //     if (groups) {
    //         setLocalLoading(false);
    //     }
    // }, [groups]);


    // // console.log(remainingGroup)

    // if (localLoading) {
    //     return (
    //         <div className="h-screen bg-base-100  flex justify-center items-center text-xl font-semibold">
    //             <span className="loading loading-circle text-black w-12"></span>
    //         </div>
    //     );
    // }

    const handleDeleteGroup = (id) => {
        // console.log('group delete on going', id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {

                // start deleting group delete
                fetch(`http://localhost:3000/group/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: 'Group been deleted.',
                                icon: "success"
                            });

                            const filterGroup = remainingGroup.filter(group => group._id !== id);
                            setRemainingGroup(filterGroup)
                        }
                    })
            }
            else {
                console.log('delete cancel')
            }
        });
    }

    return (
        <div className="max-w-11/12 min-h-screen mx-auto p-4">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                My Groups
            </h1>

            {/* Table Layout */}
            <div className="overflow-x-auto bg-base-100 rounded-lg shadow-lg">
                <table className="table w-full">
                    <thead>
                        <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                            {
                                remainingGroup.length === 0 ?
                                    <>
                                        <th className='text-center py-7'>
                                            <h1 className='text-xl text-gray-300'>you haven't created any group yet!</h1>
                                            <p className='text-sm underline'><Link to='/createGroup'>Create new group</Link></p>
                                        </th>
                                    </>
                                    : <>
                                        <th></th>
                                        <th className="p-4">Group Info</th>
                                        <th className="p-4 text-right">Actions</th>
                                    </>
                            }
                        </tr>
                    </thead>





                    <tbody>
                        {
                            remainingGroup.map((myGroup, index) => (

                                <tr key={myGroup._id} className="hover:bg-base-200">
                                    {/* Index */}
                                    <td className="p-2 align-top text-xs">
                                        <p>{index + 1}</p>
                                    </td>

                                    {/* Group Info Section */}
                                    <td className="p-2 w-full">
                                        <div className="flex flex-col sm:flex-row gap-2 sm:items-start">
                                            {/* Image */}
                                            <img
                                                src={myGroup?.image}
                                                alt="Group"
                                                className="w-12 h-12 rounded object-cover"
                                            />

                                            {/* Group Info */}
                                            <div className="flex-1">
                                                {/* Group Name */}
                                                <h2 className="text-sm font-semibold text-gray-700">{myGroup?.name}</h2>

                                                {/* Info Items */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mt-1 text-xs text-gray-600">
                                                    {/* Host Name */}
                                                    <p className="flex items-center gap-1">
                                                        <FaUser className="text-purple-500 text-xs" />
                                                        {user?.displayName}
                                                    </p>

                                                    {/* Host Email */}
                                                    <p className="flex items-center gap-1">
                                                        <MdAttachEmail className="text-purple-500 text-xs" />
                                                        {user?.email}
                                                    </p>

                                                    {/* Category */}
                                                    <p className="flex items-center gap-1">
                                                        <FaTag className="text-pink-500 text-xs" />
                                                        {myGroup?.category}
                                                    </p>

                                                    {/* Start Date */}
                                                    <p className="flex items-center gap-1">
                                                        <FaCalendarAlt className="text-blue-500 text-xs" />
                                                        {myGroup?.startDate}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Buttons Section */}
                                    <td className="p-2 align-top">
                                        <div className="flex flex-col md:flex-row gap-1 md:justify-end">
                                            <button className="btn text-white btn-success btn-xs md:btn-sm">Info</button>
                                            <button className="btn text-white btn-warning btn-xs md:btn-sm">Update</button>
                                            <button onClick={() => handleDeleteGroup(myGroup?._id)} className="btn text-white btn-error btn-xs md:btn-sm">Delete</button>
                                        </div>
                                    </td>
                                </tr>


                            ))
                        }
                    </tbody>




                </table>
            </div>
        </div>
    );
};

export default MyGroup;