import { useEffect, useState } from 'react';
import { FiHome, FiTruck, FiAlertTriangle, FiFileText, FiUsers, FiLogOut } from 'react-icons/fi';
import logo from "../src/assets/logo-white.png"
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from './context/UserAuthContext';

// eslint-disable-next-line react/prop-types
function SideNavbar({ sidebarOpen }) {
    const [selectedItem, setSelectedItem] = useState(() => {
        return localStorage.getItem('selectedItem') || 'Dashboard';
    });
    const { logOut } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };


    useEffect(() => {
        localStorage.setItem('selectedItem', selectedItem);
    }, [selectedItem]);

    const handleItemClick = (item, route) => {
        setSelectedItem(item);
        navigate(route);
    };


    return (
        <div className={`fixed bg-[#233ca1] text-white w-64 p-4 flex flex-col h-screen ${sidebarOpen ? 'fixed-sidebar' : 'fixed-sidebar-closed'}`} style={{ zIndex: 1000 }} onClick={(e) => {
            // Prevent clicks in the sidebar from propagating to the document click event
            e.stopPropagation();
        }}>
            <div>
                <h2 className="text-2xl font-semibold mb-4 p-5">
                    <img src={logo} alt="Track.io Logo" className="w-12 h-12 mr-2 inline-block" />
                    Track.io
                </h2>
                <ul className="space-y-2 mt-10">
                    <li
                        className={`py-2 px-4 flex font-semibold items-center cursor-pointer ${selectedItem === "Dashboard" ? 'bg-[#d3d8ec] text-blue-600 rounded-full' : ''}`}
                    >
                        <Link to="/" onClick={() => handleItemClick("Dashboard", "/dashboard")} className="flex items-center">
                            <span className="text-xl mr-2"><FiHome /></span>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li
                        className={`py-2 px-4 flex font-semibold items-center cursor-pointer ${selectedItem === "Fleet" ? 'bg-[#d3d8ec] text-blue-600 rounded-full' : ''}`}
                    >
                        <Link to="fleet" onClick={() => handleItemClick("Fleet", "/fleet")} className="flex items-center">
                            <span className="text-xl mr-2"><FiTruck /></span>
                            <span>Fleet</span>
                        </Link>
                    </li>
                    <li
                        className={`py-2 px-4 flex font-semibold items-center cursor-pointer ${selectedItem === "Crash Reports" ? 'bg-[#d3d8ec] text-blue-600 rounded-full' : ''}`}
                    >
                        <Link to="/crash-reports" onClick={() => handleItemClick("Crash Reports", "/crash-reports")} className="flex items-center">
                            <span className="text-xl mr-2"><FiAlertTriangle /></span>
                            <span>Crash Reports</span>
                        </Link>
                    </li>
                    <li
                        className={`py-2 px-4 flex font-semibold items-center cursor-pointer ${selectedItem === "Reports" ? 'bg-[#d3d8ec] text-blue-600 rounded-full' : ''}`}
                    >
                        <Link to="reports" onClick={() => handleItemClick("Reports", "/reports")} className="flex items-center">
                            <span className="text-xl mr-2"><FiFileText /></span>
                            <span>Reports</span>
                        </Link>
                    </li>
                    <li
                        className={`py-2 px-4 flex font-semibold items-center cursor-pointer ${selectedItem === "Staff" ? 'bg-[#d3d8ec] text-blue-600 rounded-full' : ''}`}
                    >
                        <Link to="staff" onClick={() => handleItemClick("Staff", "/staff")} className="flex items-center">
                            <span className="text-xl mr-2"><FiUsers /></span>
                            <span>Staff</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <hr className="my-4 mt-60" />
                <button
                    onClick={handleLogout}
                    className="flex items-center cursor-pointer text-white hover:text-gray-300"
                >
                    <span className="text-xl mr-2"><FiLogOut /></span>
                    <span className="font-semibold">Logout</span>
                </button>
            </div>
        </div>
    );
}

export default SideNavbar;
