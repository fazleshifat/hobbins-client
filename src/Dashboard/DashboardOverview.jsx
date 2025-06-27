import { use, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthContexts";
import { useLoaderData } from "react-router";

const DashboardOverview = () => {


    const { user } = use(AuthContext);
    const { creationTime } = user;
    const [userProfile, setUserProfile] = useState({});
    const [allGroups, setAllGroups] = useState([]);
    const [myGroups, setMyGroups] = useState([]);
    const [time, setTime] = useState(new Date().toLocaleDateString());
    const [date, setDate] = useState(new Date().toDateString());


    // ⏱️ Live Time
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetch(`https://hobbins-server.vercel.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setUserProfile(data))
    }, [user])
    useEffect(() => {
        fetch(`https://hobbins-server.vercel.app/groups`)
            .then(res => res.json())
            .then(data => setAllGroups(data))
    }, [user])

    useEffect(() => {
        const filtered = allGroups.filter(group => group?.userEmail === user?.email)
        setMyGroups(filtered);
    }, [allGroups])


    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Dashboard Overview</h2>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="p-5 bg-white dark:bg-base-300 shadow rounded-xl border border-gray-200 dark:border-gray-600">
                    <p className="text-gray-600 dark:text-gray-300">📊 Total Groups</p>
                    {
                        allGroups && <h3 className="text-3xl font-bold text-purple-600">{allGroups.length}</h3>
                    }
                </div>
                <div className="p-5 bg-white dark:bg-base-300 shadow rounded-xl border border-gray-200 dark:border-gray-600">
                    <p className="text-gray-600 dark:text-gray-300">👥 My Groups</p>
                    <h3 className="text-3xl font-bold text-purple-600">{myGroups?.length}</h3>
                </div>
                <div className="p-5 bg-white dark:bg-base-300 shadow rounded-xl border border-gray-200 dark:border-gray-600">
                    <p className="text-gray-600 dark:text-gray-300 font-semibold">⌚ Date & Time</p>
                    <h3 className="text-2xl font-bold w-fit py-2 px-6 rounded-3xl text-white bg-black/80">{time}</h3>
                    <h3 className="text-3xl font-bold text-purple-400">{date}</h3>
                </div>
            </div>

            {/* User Profile Summary */}
            <section className="max-w-4xl mx-auto bg-white dark:bg-base-300 shadow-lg rounded-2xl p-6 space-y-6">
                <div className="text-center">
                    <img
                        src={user?.photoURL}
                        alt={userProfile?.name}
                        className="w-28 h-28 mx-auto rounded-full border-4 border-purple-400 shadow"
                    />
                    <h2 className="mt-4 text-2xl font-bold">{user?.displayName || "Anonymous"}</h2>
                    <p className="text-gray-500 dark:text-gray-300">{userProfile?.email}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
                    <div>
                        <p className="font-semibold">📅 Account Created:</p>
                        <p className="text-gray-600 dark:text-gray-300">{userProfile?.creationTime} </p>
                    </div>
                    <div>
                        <p className="font-semibold">🧠 Role / Status:</p>
                        <p className="text-gray-600 dark:text-gray-300">{userProfile?.role || "User"}</p>
                    </div>
                    <div>
                        <p className="font-semibold">📱 Phone:</p>
                        <p className="text-gray-600 dark:text-gray-300">{userProfile?.phone || "Not provided"}</p>
                    </div>
                    <div>
                        <p className="font-semibold">🌍 Location:</p>
                        <p className="text-gray-600 dark:text-gray-300">{userProfile?.location || "Unknown"}</p>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default DashboardOverview;