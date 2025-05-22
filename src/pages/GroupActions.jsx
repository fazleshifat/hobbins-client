import React, { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContexts';

const GroupActions = () => {

    const { user } = use(AuthContext);

    return (
        <div className="flex flex-col md:flex-row gap-1 justify-end">
            <button className="btn text-white btn-success w-10 md:w-fit btn-xs md:btn-sm">Info</button>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn text-white btn-warning w-10 md:w-fit btn-xs md:btn-sm"
                onClick={() => document.getElementById('my_modal_4').showModal()}
            >
                Update
            </button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="">
                        <div className="rounded-lg">
                            <form method='dialog' className='bg-gray-600'>
                                <button className="btn text-gray-100 bg-gradient-to-r from-purple-500 to-pink-500 bg-gray-500 text-lg md:text-2xl btn-circle btn-ghost absolute right-4 top-3">✕</button>
                            </form>
                            <h1 className="text-2xl md:text-5xl font-bold text-center md:mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                                Update Group Information
                            </h1>
                            <div className="card-body">
                                <form>
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

                                    <button className="btn bg-primary rounded-xl text-white mt-6 w-full">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </dialog>
            <button onClick={() => handleDeleteGroup(myGroup?._id)} className="btn text-white w-10 md:w-fit btn-error btn-xs md:btn-sm">Delete</button>
        </div>
    );
};

export default GroupActions;