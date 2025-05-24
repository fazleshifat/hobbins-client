import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthContexts';
import { FaCalendarAlt, FaTag, FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import { MdAttachEmail } from "react-icons/md";
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';

const myGroup = () => {

    const { user, loading, setLoading } = use(AuthContext);
    // const [myGroup, setmyGroup] = useState(null);
    const groups = useLoaderData();

    const myAllGroup = groups.filter(group => group.userEmail === user.email)
    const [remainingGroup, setRemainingGroup] = useState(myAllGroup);


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
            if (result.isConfirmed) {

                // start deleting group delete
                fetch(`https://hobbins-server.vercel.app/groups/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: 'Group deleted successfully',
                                icon: "success"
                            });

                            const filterGroup = remainingGroup.filter(group => group._id !== id);
                            setRemainingGroup(filterGroup)
                        }
                    })
            }
            else {
               
            }
        });
    }

    return (

        <Fade cascade damping={0.5}>

            <div className="max-w-11/12 min-h-screen mx-auto md:p-4">
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
                                                <h1 className='md:text-xl text-gray-300'>you haven't created any group yet!</h1>
                                                <p className='text-sm underline'><Link to='/createGroup' className='btn my-4'>Create new group</Link></p>
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

                                    <tr key={myGroup._id} className="">
                                        {/* Index */}
                                        <td className="">
                                            <p className='font-extrabold text-sm mx-auto text-center w-fit rounded-full'>{index + 1}</p>
                                        </td>

                                        {/* Group Info Section */}
                                        <td className="p-2 w-full">
                                            <div className="flex items-center gap-2">
                                                {/* Image */}
                                                <img
                                                    src={myGroup?.image}
                                                    alt="Group"
                                                    className="w-12 h-12 md:w-30 md:h-30 rounded object-cover"
                                                />

                                                {/* Group Info */}
                                                <div className="flex-1">
                                                    {/* Group Name */}
                                                    <h2 className="text-sm md:text-xl font-semibold text-gray-700">{myGroup?.name}</h2>

                                                    {/* Info Items */}
                                                    <div className="flex flex-col md:flex-row md:gap-11 text-xs md:text-lg text-gray-600">
                                                        <div>
                                                            {/* Host Name */}
                                                            <p className="flex items-center gap-1">
                                                                <FaUser className="text-purple-500 text-xs" />
                                                                {user?.displayName}
                                                            </p>

                                                            {/* Host Email */}
                                                            <p className="hidden md:flex items-center gap-1">
                                                                <MdAttachEmail className="text-purple-500 text-xs" />
                                                                {user?.email}
                                                            </p>
                                                        </div>

                                                        <div>
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
                                            </div>
                                        </td>

                                        {/* Buttons Section */}
                                        <td>
                                            <div className="flex flex-col md:flex-row gap-1 justify-end">

                                                <Link to={`/groups/${myGroup?._id}`} className="btn text-white btn-success w-10 md:w-fit btn-xs md:btn-sm">Info</Link>
                                                <Link to={`/updateGroup/${myGroup._id}`} className="btn text-white btn-warning w-10 md:w-fit btn-xs md:btn-sm">Update</Link>
                                                <button onClick={() => handleDeleteGroup(myGroup?._id)} className="btn text-white w-10 md:w-fit btn-error btn-xs md:btn-sm">Delete</button>

                                                {/* all the actions button send to a different button.This component is separatly created specially for (Update button) to reduce code in one single file */}
                                                {/* <UpdateGroupInfo groups={groups} id={myGroup?._id}></UpdateGroupInfo> */}

                                                {/* <UpdateGroupInfo
                                                id={myGroup.id}
                                                myGroup={myGroup}>

                                            </UpdateGroupInfo> */}

                                            </div>
                                        </td>
                                    </tr>


                                ))
                            }
                        </tbody>




                    </table>
                </div>
            </div>
        </Fade>
    );
};

export default myGroup;