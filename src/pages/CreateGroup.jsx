import React from 'react';
import { data } from 'react-router';

const CreateGroup = () => {

    const handleCreateGroup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const groupData = Object.fromEntries(formData.entries());

        console.log(groupData);
        // You can POST this to your backend here

        fetch('http://localhost:3000/groups', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(groupData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };


    return (
        <div className="flex items-center bg-base-200 min-h-screen">
            <div className="w-full max-w-4xl mx-auto">
                <div className="bg-base-100 p-6 shadow-2xl rounded-lg">
                    <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
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
                                        <option value="photography">Photography</option>
                                        <option value="video gaming">Video Gaming</option>
                                        <option value="fishing">Fishing</option>
                                        <option value="running">Running</option>
                                        <option value="cooking">Cooking</option>
                                        <option value="reading">Reading</option>
                                        <option value="writing">Writing</option>
                                    </select>

                                    <label className="label">Start Date</label>
                                    <input type="date" name="startDate" className="input w-full" required />

                                    <label className="label">Max Members</label>
                                    <input type="number" name="maxMembers" className="input w-full" placeholder="Enter max members" required />
                                </div>

                                <div>
                                    <label className="label">Meeting Location</label>
                                    <input type="text" name="meetingLocation" className="input w-full" placeholder="Location" required />

                                    <label className="label">Image URL</label>
                                    <input type="text" name="image" className="input w-full" placeholder="Image URL" required />

                                    <label className="label">User Name</label>
                                    <input type="text" name="userName" className="input w-full" placeholder="Your name" required />

                                    <label className="label">User Email</label>
                                    <input type="email" name="userEmail" className="input w-full" placeholder="Your email" required />
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
    );
};

export default CreateGroup;