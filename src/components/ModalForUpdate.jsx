import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthContexts';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';


const ModalForUpdate = ({ group }) => {

    console.log(group)

    const { user } = use(AuthContext);
    // const [groupData, setGroupData] = useState(null); // Store fetched group data
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (id) {
    //         fetch(`https://hobbins-server.vercel.app/groups/${id}`)
    //             .then(res => res.json())
    //             .then(data => setGroupData(data))
    //             .catch(err => console.error(err));
    //     }
    // }, [id]);

    const handleUpdateGroup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedGroup = Object.fromEntries(formData.entries());
        

        fetch(`https://hobbins-server.vercel.app/groups/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedGroup),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Group updated successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/myGroups');
                }
            });
    };

    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-6">
                        Update Group Information
                    </h1>

                    <form onSubmit={handleUpdateGroup} className="dark:text-white space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Left Column */}
                            <div className="space-y-4">
                                <div>
                                    <label className="label">Group Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        // defaultValue={groupData?.name}
                                        className="input w-full"
                                        placeholder="Group name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="label">Category</label>
                                    <select
                                        name="category"
                                        // defaultValue={groupData?.category}
                                        className="input w-full"
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
                                </div>

                                <div>
                                    <label className="label">Start Date</label>
                                    <input
                                        type="date"
                                        name="startDate"
                                        // defaultValue={groupData?.startDate}
                                        className="input w-full"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="label">Max Members</label>
                                    <input
                                        type="number"
                                        name="maxMembers"
                                        defaultValue={group?.maxMembers}
                                        className="input w-full"
                                        placeholder="Enter max members"
                                        min="1"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-4">
                                <div>
                                    <label className="label">Meeting Location</label>
                                    <input
                                        type="text"
                                        name="meetingLocation"
                                        defaultValue={group?.meetingLocation}
                                        className="input w-full"
                                        placeholder="Location"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="label">Image URL</label>
                                    <input
                                        type="text"
                                        name="image"
                                        defaultValue={group?.image}
                                        className="input w-full"
                                        placeholder="Image URL"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="label">User Name</label>
                                    <input
                                        type="text"
                                        name="userName"
                                        defaultValue={user?.displayName || userName}
                                        className="input w-full"
                                        readOnly
                                    />
                                </div>

                                <div>
                                    <label className="label">User Email</label>
                                    <input
                                        type="email"
                                        name="userEmail"
                                        defaultValue={user?.email || userEmail}
                                        className="input w-full"
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="label">Description</label>
                            <textarea
                                name="description"
                                defaultValue={group?.description}
                                className="textarea w-full"
                                placeholder="Group description"
                                required
                            ></textarea>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 mt-6">
                            <button type="submit" className="btn btn-primary w-full md:w-auto">
                                Update
                            </button>
                        </div>
                    </form>
                    <div method="dialog" className="w-fit border-2 flex justify-end">
                        <button onClick={() => document.getElementById('my_modal_4').close()} className="btn btn-warning w-full">Close</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ModalForUpdate;