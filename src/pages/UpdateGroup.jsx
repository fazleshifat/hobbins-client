import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContexts';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateGroup = () => {

    const { user } = use(AuthContext)
    const { _id, name, category, startDate, maxMembers, meetingLocation, image, userName, userEmail, description } = useLoaderData();
    // console.log(group)

    const navigate = useNavigate();

    const handleUpdateGroup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedGroup = Object.fromEntries(formData.entries());
        console.log(updatedGroup)

        // send data to DB
        fetch(`http://localhost:3000/groups/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedGroup)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Group Data updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myGroups')
                }
            })
    }

    return (
        <div className="w-full max-w-4xl min-h-screen flex p-2 md:p-0 items-center mx-auto">
            <div className="bg-base-100 md:p-6 shadow-2xl rounded-lg">
                <h1 className="text-2xl mt-8 md:text-5xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Update Group Information
                </h1>
                <div className="card-body">
                    <form onSubmit={handleUpdateGroup}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="label">Group Name</label>
                                <input type="text" defaultValue={name} name="name" className="input w-full" placeholder="Group name" />

                                <label className="label">Category</label>
                                <select name="category" className="input w-full" >
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
                                <input type='date' defaultValue={startDate} name="startDate" className="input w-full" />

                                <label className="label">Max Members</label>
                                <input type="number" defaultValue={maxMembers} name="maxMembers" className="input w-full" placeholder="Enter max members" />
                            </div>

                            <div>
                                <label className="label">Meeting Location</label>
                                <input type="text" defaultValue={meetingLocation} name="meetingLocation" className="input w-full" placeholder="Location" />

                                <label className="label">Image URL</label>
                                <input type="text" name="image" defaultValue={image} className="input w-full" placeholder="Image URL" />

                                <label className="label">User Name</label>
                                <input defaultValue={user?.displayName} type="text" name="userName" className="input w-full" placeholder="Your name" readOnly />

                                <label className="label">User Email</label>
                                <input defaultValue={user?.email} type="email" name="userEmail" className="input w-full" placeholder="Your email" readOnly />
                            </div>
                        </div>

                        <label className="label mt-4">Description</label>
                        <textarea name="description" defaultValue={description} className="textarea w-full" placeholder="Group description" ></textarea>

                        <button className="btn btn-primary mt-6 w-full">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateGroup;