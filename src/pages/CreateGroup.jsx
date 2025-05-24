import React, { use, useEffect, useState } from 'react';
import { data, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthContexts';
import { Fade } from 'react-awesome-reveal';

const CreateGroup = () => {

    const { user, setLoading } = use(AuthContext);
    const navigate = useNavigate();



    const handleCreateGroup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const groupData = Object.fromEntries(formData.entries());

        // setLoading(false)

        // posting data into DB 

        fetch('https://hobbins-server.vercel.app/groups', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(groupData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        // position: "top-end",
                        icon: "success",
                        title: "Group created successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    navigate('/all-groups');
                    form.reset();
                }
            })
            .catch((error) => {

            })
            .finally(() => {
                // setLoading(false);
            });
    };


    return (
        <Fade cascade damping={0.5}>
            <div className="flex items-center  min-h-screen p-2">
                <div className="w-full max-w-4xl mx-auto">
                    <div className="bg-base-100 md:p-6 shadow-2xl rounded-lg">
                        <h1 className="text-2xl pt-3 md:text-5xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                            Create a New Group
                        </h1>
                        <div className="card-body">
                            <form onSubmit={handleCreateGroup}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="label">Group Name</label>
                                        <input type="text" name="name" className="input w-full" placeholder="Group name" required />

                                        <label className="label">Category</label>
                                        <select name="category" className="input w-full" required>
                                            <option value="">Select category</option>
                                            <option value="drawing">Drawing</option>
                                            <option value="painting">Painting</option>
                                            <option value="singing">Singing</option>
                                            <option value="photography">Photography</option>
                                            <option value="video gaming">Video Gaming</option>
                                            <option value="fishing">Fishing</option>
                                            <option value="running">Running</option>
                                            <option value="cooking">Cooking</option>
                                            <option value="reading">Reading</option>
                                            <option value="writing">Writing</option>
                                        </select>

                                        <label className="label">Start Date</label>
                                        <input type='date' name="startDate" className="input w-full" required />

                                        <label className="label">Max Members</label>
                                        <input type="number" name="maxMembers" className="input w-full" placeholder="Enter max members" required />
                                    </div>

                                    <div>
                                        <label className="label">Meeting Location</label>
                                        <input type="text" name="meetingLocation" className="input w-full" placeholder="Location" required />

                                        <label className="label">Image URL</label>
                                        <input type="text" name="image" className="input w-full" placeholder="Image URL" required />

                                        <label className="label">User Name</label>
                                        <input defaultValue={user.displayName} type="text" name="userName" className="input w-full" placeholder="Your name" readOnly />

                                        <label className="label">User Email</label>
                                        <input defaultValue={user.email} type="email" name="userEmail" className="input w-full" placeholder="Your email" readOnly />
                                    </div>
                                </div>

                                <label className="label mt-4">Description</label>
                                <textarea name="description" className="textarea w-full" placeholder="Group description" required></textarea>

                                <button className="btn btn-neutral mt-6 w-full">Create Group</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>

    );
};

export default CreateGroup;