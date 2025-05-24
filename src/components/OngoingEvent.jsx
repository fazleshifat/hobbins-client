import { Fade } from 'react-awesome-reveal';
import { Link, useLoaderData } from 'react-router';

const OngoingEvent = () => {

    const groups = useLoaderData();
    // console.log(groups)
    const today = new Date();
    // const deadLine = new Date('2025-04-20');
    // console.log(deadLine)
    // console.log(today)

    const ongoingGroup = groups.filter(group => new Date(group.startDate) > today)
    const remainingOngoingGroup = ongoingGroup.slice(0, 6)
    // console.log(remainingOngoingGroup)


    return (
        <>
            <Fade cascade damping={0.5}>

                <div className="dark:bg-none dark:bg-gray-800 bg-gradient-to-br from-indigo-purple-200 to-indigo-200 py-10 px-6 rounded-3xl my-8">
                    <Fade cascade damping={0.1}>
                        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-10">Join an Ongoing Group</h2>
                    </Fade>
                    <div className="grid gap-6 max-w-11/12 mx-auto">

                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th className='hidden md:flex'>
                                            <label>
                                                Serial
                                            </label>
                                        </th>
                                        <th>Group Name</th>
                                        <th className='hidden md:table-cell'>Meet up Location</th>
                                        <th className='hidden md:table-cell'>Status</th>
                                        <th className='hidden md:table-cell'>Deadline</th>
                                        <th>Join Group</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        remainingOngoingGroup.map((group, index) => (
                                            <tr key={group._id}>
                                                <th className='hidden md:table-cell'>
                                                    <label className='text-black dark:text-gray-300'>
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
                                                            <div className="font-bold text-black dark:text-gray-300">{group?.name}</div>
                                                            <div className="text-sm opacity-50 text-black dark:text-gray-300">Host: {group?.userName}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='hidden md:table-cell text-black dark:text-gray-300'>
                                                    {group?.meetingLocation}
                                                    <br />
                                                    <span className="badge badge-ghost badge-sm">Total Member: {group?.maxMembers}</span>
                                                </td>
                                                <td className='hidden md:table-cell'><small className='bg-green-500 p-1 text-gray-300'>ONGOING</small></td>
                                                <td className='hidden md:table-cell text-black dark:text-gray-300'>{new Date(group?.startDate).toLocaleDateString()}</td>
                                                <th className='flex flex-col md:flex-row gap-1'>
                                                    <Link to={`/groups/${group?._id}`} className="btn btn-primary text-white">Info</Link>
                                                    <Link to={`/groups/${group?._id}`} className="btn bg-green-500 text-white">Join</Link>

                                                </th>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                                {/* foot */}
                                {/* <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </tfoot> */}
                            </table>
                        </div>

                    </div>
                </div >
            </Fade>
        </>
    );
};

export default OngoingEvent;