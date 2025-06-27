import { Link, useLoaderData, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import { Fade } from 'react-awesome-reveal';
import { use, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthContexts';

const AllGroups = () => {


    // const { allGroups, setAllGroups } = use(AuthContext);
    const allGroups = useLoaderData()
    const [availableGroups, setAvailableGroups] = useState([]);
    const [filterType, setFilterType] = useState("all");

    useEffect(() => {
        handleToggleView({ target: { value: filterType } });
    }, [allGroups]); // runs when allGroups are fetched

    const handleToggleView = (e) => {
        const value = e.target.value;
        setFilterType(value);

        if (value === "available") {
            const filtered = allGroups.filter(
                (group) => new Date(group.startDate) >= new Date()
            );
            setAvailableGroups(filtered);
        } else if (value === "unavailable") {
            const filtered = allGroups.filter(
                (group) => new Date(group.startDate) < new Date()
            );
            setAvailableGroups(filtered);
        } else {
            setAvailableGroups(allGroups);
        }
    };

    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }

    return (
        <section className='max-w-[1300px] mx-auto px-5 space-y-4'>
            <h1 className="text-2xl md:text-5xl font-bold text-center mt-10 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                <h1 className="text-2xl md:text-5xl font-bold text-center mt-10 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                    {{
                        available: "Available Groups",
                        unavailable: "Unavailable Groups",
                        all: "All Groups",
                    }[filterType] || "All Groups"}
                </h1>
            </h1>
            <div className="w-fit">
                <select
                    onChange={handleToggleView}
                    value={filterType}
                    name="groupFilter"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                    <option value="all">All Groups</option>
                    <option value="available">Available Groups</option>
                    <option value="unavailable">Unavailable Groups</option>
                </select>
            </div>

            <Fade cascade damping={0.5}>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>



                    {
                        availableGroups?.map(group => (


                            <div
                                key={group._id}
                                className="relative bg-base-300 border border-transparent hover:border-purple-400 transition-all duration-300 rounded-3xl shadow-xl overflow-hidden group"
                            >
                                <Fade cascade damping={0.5}>
                                    {/* Gradient border effect */}
                                    <div className="absolute -inset-[2px] bg-gradient-to-br from-indigo-600 via-pink-400 to-indigo-300 rounded-[inherit] z-0 opacity-30 group-hover:opacity-60 transition-opacity"></div>

                                    {/* Actual content */}
                                    <div className="relative z-10 p-4 space-y-4">
                                        <figure className="rounded-2xl overflow-hidden">
                                            <img
                                                src={group.image}
                                                alt="Group"
                                                className="w-full h-40 md:h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </figure>

                                        <h2 className="text-center text-xl md:text-2xl font-bold dark:text-indigo-100 text-indigo-700">
                                            {group.name}
                                        </h2>

                                        <div className="grid grid-cols-1 gap-1 text-sm md:text-base dark:text-gray-400 font-medium">
                                            <p>📂 <span className="font-semibold">Category:</span> {group.category}</p>
                                            <p>📅 <span className="font-semibold">Start Date:</span> {group.startDate}</p>
                                            <p>📍 <span className="font-semibold">Location:</span> {group.meetingLocation}</p>
                                            <p className='font-light'> <span className="font-semibold">Description:</span> {group.description}</p>
                                        </div>

                                        <div className="text-center mt-4">
                                            <Link
                                                to={`/groups/${group._id}`}
                                                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
                                            >
                                                See More
                                            </Link>
                                        </div>
                                    </div>
                                </Fade>
                            </div>


                        ))
                    }

                </div>
            </Fade>
        </section>
    );
};

export default AllGroups;