import Crashsec from './components/Crashsec';
import GraphSection from './Sections/GraphSection';
import NewsSection from './Sections/NewsSection';
import Stats from './Sections/Stats';
import FleetSection from './components/fleetSection';
import MapSection from './Sections/mapSection';

function Dashboard() {
    return (
        <div className="flex-1 p-5 sm:ml-64">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                    <MapSection />
                </div>
                <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                    <div className="grid grid-cols-1 gap-4">
                        <GraphSection />
                        <Stats />
                        <NewsSection />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="col-span-1 sm:col-span-1">
                    <div className="min-h-[100px] rounded-xl bg-white p-4">
                        <Crashsec />
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-1">

                    <div className="min-h-[100px] rounded-xl bg-white p-4">
                        <FleetSection />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
