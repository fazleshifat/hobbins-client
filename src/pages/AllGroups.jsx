import { Link, useLoaderData, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import { Fade } from 'react-awesome-reveal';
import { use, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthContexts';

const AllGroups = () => {

    const { allGroups, setAllGroups } = use(AuthContext);

    const groupsData = useLoaderData();
    useEffect(() => {
        setAllGroups(groupsData)
    }, [groupsData])

    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }

    return (
        <section className='max-w-[1300px] mx-auto px-5 space-y-4'>
            <h1 className="text-2xl md:text-5xl font-bold text-center mt-10 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                All Group
            </h1>

            <Fade cascade damping={0.5}>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>


                    {
                        allGroups?.map(group => (


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