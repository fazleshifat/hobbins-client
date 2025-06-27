import React from 'react';
import { Link } from 'react-router';

const TableView = ({ availableGroups = [] }) => {
    return (
        <div className="overflow-x-auto mt-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-200 bg-white dark:bg-base-300 text-sm md:text-base">
                <thead className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white">
                    <tr>
                        <th className="px-4 py-3 text-left font-semibold">Image</th>
                        <th className="px-4 py-3 text-left font-semibold">Name</th>
                        <th className="px-4 py-3 text-left font-semibold">Category</th>
                        <th className="px-4 py-3 text-left font-semibold">Start Date</th>
                        <th className="px-4 py-3 text-left font-semibold">Location</th>
                        <th className="px-4 py-3 text-left font-semibold">Description</th>
                        <th className="px-4 py-3 text-center font-semibold">Action</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    {availableGroups.length === 0 ? (
                        <tr>
                            <td colSpan="7" className="text-center px-4 py-6 text-gray-500">
                                No groups found.
                            </td>
                        </tr>
                    ) : (
                        availableGroups.map((group) => (
                            <tr
                                key={group._id}
                                className="hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all"
                            >
                                <td className="px-4 py-3">
                                    <img
                                        src={group.image}
                                        alt={group.name}
                                        className="w-16 h-16 object-cover rounded-xl border"
                                    />
                                </td>
                                <td className="px-4 py-3 font-semibold text-indigo-700 dark:text-indigo-200">
                                    {group.name}
                                </td>
                                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{group.category}</td>
                                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                                    {new Date(group.startDate).toLocaleDateString()}
                                </td>
                                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{group.meetingLocation}</td>
                                <td className="px-4 py-3 text-gray-500 dark:text-gray-400 line-clamp-2">
                                    {group.description}
                                </td>
                                <td className="px-4 py-3 text-center">
                                    <Link
                                        to={`/groups/${group._id}`}
                                        className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm hover:shadow-md transition"
                                    >
                                        See More
                                    </Link>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TableView;