import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContexts';

const Profile = () => {

    const { user } = use(AuthContext);
    const userProfile = useLoaderData();

    return (
        <section className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-6 dark:bg-base-300">
            <div className="text-center">
                <img
                    src={user?.photoURL}
                    alt={userProfile?.name}
                    className="w-32 h-32 mx-auto rounded-full border-4 border-purple-400"
                />
                <h2 className="mt-4 text-2xl font-bold">{userProfile?.name}</h2>
                <p className="text-gray-500 dark:text-gray-300">{userProfile?.email}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                <div>
                    <p className="font-semibold">🆔 userProfile ID:</p>
                    <p className="text-gray-600 dark:text-gray-300 break-words">{userProfile?._id}</p>
                </div>
                <div>
                    <p className="font-semibold">📅 Account Created:</p>
                    <p className="text-gray-600 dark:text-gray-300">{userProfile?.creationTime}</p>
                </div>
                <div>
                    <p className="font-semibold">⏰ Last Login:</p>
                    <p className="text-gray-600 dark:text-gray-300">{userProfile?.lastSignInTime}</p>
                </div>
            </div>
        </section>
    );
};

export default Profile;