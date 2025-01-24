import { FaArrowDown, FaSearch } from 'react-icons/fa';
import dummyCrashData from './dummy'; // Import the dummy data
import React from 'react';
function CrashReport() {
    // Group the data by vehicle name
    const groupedData = dummyCrashData.reduce((acc, crash) => {
        const { vehicleName, ...rest } = crash;
        if (!acc[vehicleName]) {
            acc[vehicleName] = [];
        }
        acc[vehicleName].push(rest);
        return acc;
    }, {});

    return (
        <div className='bg-white mx-10 my-5 rounded-xl p-4 sm:ml-72'>
            <div className="p-4 flex flex-col shadow-md">
                <h1 className="text-2xl text-red-500 font-inter font-bold mb-4">
                    Crash Reports
                </h1>
                <div className="font-inter font-normal text-sm mb-2 flex items-center">
                    <span className="text-blue-500">
                        <FaArrowDown />
                    </span>{"\u00A0"}
                    <span className="text-blue-500 font-semibold">
                        60% decrease
                    </span>{"\u00A0"}
                    in crashes from last month
                </div>
                <div className="flex items-center mt-4">
                    <button className="bg-[#D2DBFF] text-[#363636] px-4 py-2 rounded-md mr-2">
                        Sort by
                    </button>
                    <div className="flex items-center border border-[#B4C2FF] w-[300px] rounded-2xl p-2">
                        <FaSearch className="text-[#363636] mx-2" />
                        <input
                            type="text"
                            placeholder="Search Plate Number..."
                            className="bg-transparent border-none focus:outline-none placeholder:text-[#4e4e4e] font-inter font-semibold text-xs"
                        />
                    </div>
                </div>
            </div>
            <table className="w-full mt-6 border-collapse border border-[#B4C2FF]">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-[#D2DBFF]">Fault Code</th>
                        <th className="px-4 py-2 bg-[#D2DBFF]">Description</th>
                        <th className="px-4 py-2 bg-[#D2DBFF]">Date/Time</th>
                        <th className="px-4 py-2 bg-[#D2DBFF]">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(groupedData).map((vehicleName) => (
                        <React.Fragment key={vehicleName}>
                            <tr>
                                <th className="px-4 py-2 text-left" colSpan="4">
                                    {vehicleName}
                                </th>
                            </tr>
                            {groupedData[vehicleName].map((crash) => (
                                <tr key={crash.id}>
                                    <td className="px-4 py-2">{crash.faultCode}</td>
                                    <td className="px-4 py-2">{crash.description}</td>
                                    <td className="px-4 py-2">{crash.dateTime}</td>
                                    <td className="px-4 py-2">{crash.location}</td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CrashReport;
