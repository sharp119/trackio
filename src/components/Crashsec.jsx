import dummyCrashData from "../Sections/CrashReport/dummy";

function Crashsec() {
    const groupedData = dummyCrashData.reduce((acc, crash) => {
        const { vehicleName, ...rest } = crash;
        if (!acc[vehicleName]) {
            acc[vehicleName] = [];
        }
        acc[vehicleName].push(rest);
        return acc;
    }, {});

    return (
        <div className="rounded-xl bg-white max-h-[200px] overflow-auto scrollbar-hide ">
            <div
                className="bg-white text-gray-600 font-inter font-bold text-xs"
            >
                Crash Report
            </div>
            {Object.keys(groupedData).map((vehicleName) => (
                <div key={vehicleName} className="my-4">
                    <h2 className="text-red-500 mb-2 font-inter font-bold text-xs">{vehicleName}</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border ">
                            <tbody>
                                {groupedData[vehicleName].map((crash) => (
                                    <tr key={crash.id} className="border-b border-red-500">
                                        <td className="px-4 py-2 text-gray-600 font-inter font-bold text-xs">{crash.faultCode}</td>
                                        <td className="px-4 py-2 text-[#233ca1] font-inter font-bold text-xs">{crash.description}</td>
                                        <td className="px-4 py-2 text-gray-600 font-inter font-bold text-xs">{crash.dateTime}</td>
                                        <td className="px-4 py-2 text-gray-600 font-inter font-bold text-xs">{crash.location}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Crashsec;
