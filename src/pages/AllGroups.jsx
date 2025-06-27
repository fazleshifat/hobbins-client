import { Link, useLoaderData, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import { Fade } from 'react-awesome-reveal';
import { use, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthContexts';
import CardView from './CardView';
import TableView from './TableView';

const AllGroups = () => {


    // const { allGroups, setAllGroups } = use(AuthContext);
    const allGroups = useLoaderData()
    const [availableGroups, setAvailableGroups] = useState([]);
    const [filterType, setFilterType] = useState("all");
    const [filterView, setFilterView] = useState(() => {
        return localStorage.getItem("view") || "table";
    });

    useEffect(() => {
        localStorage.setItem("view", filterView);
    }, [filterView]);

    useEffect(() => {
        handleToggleAvailable({ target: { value: filterType } });
    }, [allGroups]); // runs when allGroups are fetched

    const handleToggleAvailable = (e) => {
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
                {{
                    available: "Available Groups",
                    unavailable: "Unavailable Groups",
                    all: "All Groups",
                }[filterType] || "All Groups"}
            </h1>
            <div className='flex justify-between'>
                <div className="w-fit">
                    <select
                        onChange={handleToggleAvailable}
                        value={filterType}
                        name="groupFilter"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        <option value="all">All Groups</option>
                        <option value="available">Available Groups</option>
                        <option value="unavailable">Unavailable Groups</option>
                    </select>
                </div>
                <div className="w-fit">
                    <select
                        onChange={(e) => setFilterView(e.target.value)}
                        value={filterView}
                        name="groupFilter"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        <option value="table">Table View</option>
                        <option value="card">Card View</option>
                    </select>
                </div>
            </div>

            <Fade cascade damping={0.5}>

                {filterView === "table" ? (
                    <TableView availableGroups={availableGroups} />
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {availableGroups?.map(group => (
                            <CardView group={group} key={group._id} />
                        ))}
                    </div>
                )}
            </Fade>
        </section>
    );
};

export default AllGroups;