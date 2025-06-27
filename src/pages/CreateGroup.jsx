import React, { use, useEffect, useState } from 'react';
import { data, useNavigate, useNavigation } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthContexts';
import { Fade } from 'react-awesome-reveal';
import Spinner from '../components/Spinner';

const CreateGroup = () => {

    const { user, setLoading } = use(AuthContext);
    const navigate = useNavigate();

    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }

    const handleCreateGroup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const groupData = Object.fromEntries(formData.entries());


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
            <div className="flex items-center min-h-[90vh] p-4">
                <div className="w-full max-w-4xl mx-auto">
                    <div className="bg-base-100 dark:bg-gray-900 md:p-8 p-6 rounded-3xl shadow-xl border border-indigo-600">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text select-none">
                            Create a New Group
                        </h1>
                        <form onSubmit={handleCreateGroup} className="text-gray-800 dark:text-gray-200 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="label-text font-semibold text-lg">Group Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="input input-bordered w-full text-lg focus:border-purple-500 focus:ring focus:ring-purple-300 dark:focus:ring-purple-700 transition"
                                        placeholder="Group name"
                                        required
                                    />

                                    <label className="label-text font-semibold text-lg">Category</label>
                                    <select
                                        name="category"
                                        className="input input-bordered w-full text-lg focus:border-purple-500 focus:ring focus:ring-purple-300 dark:focus:ring-purple-700 transition"
                                        required
                                    >
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
                                        <option value="others">Others</option>
                                    </select>

                                    <label className="label-text font-semibold text-lg">Start Date</label>
                                    <input
                                        type="date"
                                        name="startDate"
                                        className="input input-bordered w-full text-lg focus:border-purple-500 focus:ring focus:ring-purple-300 dark:focus:ring-purple-700 transition"
                                        required
                                    />

                                    <label className="label-text font-semibold text-lg">Max Members</label>
                                    <input
                                        type="number"
                                        name="maxMembers"
                                        className="input input-bordered w-full text-lg focus:border-purple-500 focus:ring focus:ring-purple-300 dark:focus:ring-purple-700 transition"
                                        placeholder="Enter max members"
                                        required
                                    />
                                </div>

                                <div className="space-y-4">
                                    <label className="label-text font-semibold text-lg">Meeting Location</label>
                                    <input
                                        type="text"
                                        name="meetingLocation"
                                        className="input input-bordered w-full text-lg focus:border-purple-500 focus:ring focus:ring-purple-300 dark:focus:ring-purple-700 transition"
                                        placeholder="Location"
                                        required
                                    />

                                    <label className="label-text font-semibold text-lg">Group Image URL</label>
                                    <input
                                        type="text"
                                        name="image"
                                        className="input input-bordered w-full text-lg focus:border-purple-500 focus:ring focus:ring-purple-300 dark:focus:ring-purple-700 transition"
                                        placeholder="Group Image URL"
                                        required
                                    />

                                    <label className="label-text font-semibold text-lg">User Name</label>
                                    <input
                                        defaultValue={user.displayName}
                                        type="text"
                                        name="userName"
                                        className="input input-bordered w-full text-lg bg-gray-100 dark:bg-gray-700 cursor-not-allowed"
                                        placeholder="Your name"
                                        readOnly
                                    />

                                    <label className="label-text font-semibold text-lg">User Email</label>
                                    <input
                                        defaultValue={user.email}
                                        type="email"
                                        name="userEmail"
                                        className="input input-bordered w-full text-lg bg-gray-100 dark:bg-gray-700 cursor-not-allowed"
                                        placeholder="Your email"
                                        readOnly
                                    />
                                </div>
                            </div>

                            <label className="label-text font-semibold text-lg">Description</label>
                            <textarea
                                name="description"
                                className="textarea textarea-bordered w-full text-lg focus:border-purple-500 focus:ring focus:ring-purple-300 dark:focus:ring-purple-700 transition"
                                placeholder="Group description"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="btn btn-accent text-white w-full mt-6 py-3 text-xl font-semibold hover:brightness-110 transition"
                            >
                                Create Group
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Fade>

    );
};

export default CreateGroup;