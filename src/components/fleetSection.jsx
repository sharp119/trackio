import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../firebase";

function FleetSection() {
    const [vehicleFleetList, setVehicleFleetList] = useState([]);

    useEffect(() => {
        const vehicleRef = ref(db, 'vehicles');

        const unsubscribe = onValue(vehicleRef, (snapshot) => {
            const fetchedData = [];
            if (snapshot.exists()) {
                snapshot.forEach((childSnapshot) => {
                    const vehicleDetail = childSnapshot.val();
                    fetchedData.push(vehicleDetail);
                });
                setVehicleFleetList(fetchedData);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div className=" bg-white max-h-[200px]  overflow-auto scrollbar-hide">
            <div className=" bg-white text-gray-600 font-inter font-bold text-xs">
                My Fleet
            </div>

            <div className="min-h-[100px] mt-3">
                <table className="w-full">
                    <thead>
                        <tr className="border text-gray-700">
                            <th className="py-2 px-4 text-left">Plate Number</th>
                            <th className="py-2 px-4 text-left">Status</th>
                            <th className="py-2 px-4 text-left">Battery</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicleFleetList.map((vehicle) => (
                            <tr className="bg-white hover:bg-gray-100" key={vehicle.vehicleNumber}>
                                <td className="px-4 py-2 text-gray-600 font-inter font-bold text-xs">
                                    {vehicle.vehicleNumber}
                                </td>
                                <td className={`px-4 py-2 text-gray-600 font-inter font-bold text-xs ${vehicle.online === 1 ? "text-green-500" : "text-pink-500"}`}>
                                    {vehicle.online === 1 ? "Online" : "Offline"}
                                </td>
                                <td className="px-4 py-2 text-gray-600 font-inter font-bold text-xs">
                                    {vehicle.batteryVoltage}%
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default FleetSection