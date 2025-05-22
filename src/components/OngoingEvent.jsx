import { useState } from 'react';
import { useLoaderData } from 'react-router';

const OngoingEvent = () => {

    const groups = useLoaderData();
    // console.log(groups)
    const today = new Date();
    // const deadLine = new Date('2025-04-20');
    // console.log(deadLine)
    // console.log(today)

    const ongoingGroup = groups.filter(group => new Date(group.startDate) > today)
    const remainingOngoingGroup = ongoingGroup.slice(0, 6)
    console.log(remainingOngoingGroup)


    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-purple-200 to-indigo-200 py-10 px-6">
                <h2 className="text-4xl font-bold text-center text-indigo-800 mb-10">Join an Ongoing Group</h2>
                <div className="grid gap-6 max-w-11/12 mx-auto">

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            Serial
                                        </label>
                                    </th>
                                    <th>Group Name</th>
                                    <th>Meet up Location</th>
                                    <th>Status</th>
                                    <th>Deadline</th>
                                    <th>Join Group</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    remainingOngoingGroup.map((group, index) => (
                                        <tr key={group._id}>
                                            <th>
                                                <label>
                                                    {index + 1}
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={group?.image}
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{group?.name}</div>
                                                        <div className="text-sm opacity-50">Host: {group?.userName}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {group?.meetingLocation}
                                                <br />
                                                <span className="badge badge-ghost badge-sm">Total Member: {group?.maxMembers}</span>
                                            </td>
                                            <td><small className='bg-green-500 p-1 text-gray-300'>ONGOING</small></td>
                                            <td>{new Date(group?.startDate).toLocaleDateString()}</td>
                                            <th>
                                                <button className="btn btn-primary text-white">Join</button>
                                            </th>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            {/* foot */}
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                </div>
            </div >
        </>
    );
};

export default OngoingEvent;