import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";
import { AiFillCar } from "react-icons/ai";
import VehicleDetailsPopup from "./VehicleDetailsPopup";

function Fleet() {
  const [vehicleFleetList, setVehicleFleetList] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

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
        console.log('Fetched data:', fetchedData);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 28.5331, lng: 77.1819 },
      zoom: 16,
      disableDefaultUI: true,
    });

    const marker = new window.google.maps.Marker({
      position: { lat: 28.5331, lng: 77.1819 },
      map: map,
      title: "Your Marker Title",
    });
  }, []);

  const handleVehicleClick = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const closePopup = () => {
    setSelectedVehicle(null);
  };

  return (
    <div className="bg-[#D2D6EA] sm:ml-64 p-2 px-5 relative">
      <div id="map" className="w-full min-h-screen rounded-[7px]"></div>
      {selectedVehicle && (
        <div className="overlay absolute top-20 left-0 right-10 bottom-0 z-50">
          <VehicleDetailsPopup vehicle={selectedVehicle} onClose={closePopup} />
        </div>
      )}
      <div className="sm:absolute top-10 left-10 right-0 bottom-0 z-50 bg-white rounded-xl h-96 w-96">
        <div className="flex flex-col p-7">
          <div className="text-[#363636] font-inter text-2xl font-bold mb-5">
            My Fleet
          </div>
          <div className="flex flex-row text-xs">
            <div className="font-bold mb-5 whitespace-nowrap">
              <AiFillCar className="text-[#363636] text-4xl inline-block mr-2" />
              <span className="text-blue-700">
                {vehicleFleetList.length} cars
              </span>{" "}
              in my fleet
            </div>
          </div>

          <table className="flex flex-col gap-x-10 max-h-[500px]  ">
            <tr className="flex flex-row border-b border-gray-500 p-2">
              <th className="font-medium p-2 text-left">Plate Number</th>
              <th className="font-medium p-2 text-left">Status</th>
              <th className="font-medium p-2 text-left">Battery%</th>
              <hr className="w-180 h-0 my-4 text-[rgba(75, 75, 75, 0.20)]"></hr>
            </tr>

            {vehicleFleetList.map((vehicle, index) => (
              <tr
                className={`flex flex-row gap-10 border-b border-gray-500 p-2 ${selectedVehicle === vehicle ? "bg-[#B4C3FF]" : ""
                  }`}
                key={vehicle.vehicleNumber}
                onClick={() => handleVehicleClick(vehicle)}
              >
                <td className="text-gray-600 font-inter font-bold text-xs text-left">
                  {vehicle.vehicleNumber}
                </td>
                <td
                  className={`font-inter font-bold text-xs ${vehicle.online === 1 ? "text-green-500" : "text-pink-500"
                    } text-left`}
                >
                  {vehicle.online === 1 ? "Online" : "Offline"}
                </td>
                <td className="text-gray-600 font-inter font-bold text-xs text-left">
                  {vehicle.batteryVoltage}%
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Fleet;
