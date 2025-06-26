const DashboardOverview = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 bg-white shadow rounded-xl border">
                    <p className="text-gray-600">Total Groups</p>
                    <h3 className="text-2xl font-bold">12</h3>
                </div>
                <div className="p-5 bg-white shadow rounded-xl border">
                    <p className="text-gray-600">My Groups</p>
                    <h3 className="text-2xl font-bold">4</h3>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;