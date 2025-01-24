import PropTypes from "prop-types";
import car from "../../assets/car.png";
import { FiX } from "react-icons/fi";

function VehicleDetailsPopup({ vehicle, onClose }) {
    VehicleDetailsPopup.propTypes = {
        vehicle: PropTypes.object.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    const {
        vehiclesFuelLeft,
        totalDistanceTravelled,
        tripLength,
        batteryVoltage,
        fuelConsumption,
        fuelTrim,
        massAirFlow,
        troubleCodes,
        intakeAirTemp,
        fuelPressure,
        catalyticConverterEfficiency,
        drivingBehaviour,
        throttlePosition,
        vehicleSpeed,
        engineRpm,
        coolantTemp,
        oxygenSensor,
        online,
    } = vehicle;

    return (
        <div className="bg-[#c1cdff] rounded-xl p-2 absolute right-5 w-[500px]">
            <button
                className="text-black  absolute top-2 right-2"
                onClick={onClose}
            >
                <FiX size="20px" />
            </button>
            <div className="flex pl-5 items-center">
                <img
                    src={car}
                    alt="Car"
                    className="w-6 h-6 mr-2"
                />
                <div>
                    <h2 className="text-[#363636] font-inter text-[12px] font-bold mb-1">
                        {vehicle.vehicleNumber}
                    </h2>
                    <p className="text-gray-500 text-xs">Vehicle Description</p>
                </div>
            </div>
            <div className="flex justify-center space-x-2 mt-2">
                <div className="bg-white rounded-xl p-1 ">
                    <div className="text-gray-600 font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Fuel Left:</span> {online === 0 ? 0 : vehiclesFuelLeft}
                    </div>
                    <div className="text-gray-600  font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Total Distance Travelled:</span> {online === 0 ? 0 : totalDistanceTravelled}
                    </div>
                    <div className="text-gray-600  font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Trip Length:</span> {online === 0 ? 0 : tripLength}
                    </div>
                    <div className="text-gray-600  font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Battery Voltage:</span> {online === 0 ? 0 : batteryVoltage}
                    </div>
                    <div className="text-gray-600  font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Fuel Consumption:</span> {online === 0 ? 0 : fuelConsumption}
                    </div>
                    <div className="text-gray-600  font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Fuel Trim:</span> {online === 0 ? 0 : fuelTrim}
                    </div>
                </div>
                <div className="bg-white rounded-xl p-2 ">
                    <div className="text-gray-600  font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Mass Air Flow:</span> {online === 0 ? 0 : massAirFlow}
                    </div>
                    <div className="text-gray-600  font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Trouble Codes:</span> {online === 0 ? 0 : troubleCodes}
                    </div>
                    <div className="text-gray-600  font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Intake Air Temperature:</span> {online === 0 ? 0 : intakeAirTemp}
                    </div>
                    <div className="text-gray-600  font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Fuel Pressure:</span> {online === 0 ? 0 : fuelPressure}
                    </div>
                    <div className="text-gray-600  font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Catalytic Converter Efficiency:</span> {online === 0 ? 0 : catalyticConverterEfficiency}
                    </div>
                    <div className="text-gray-600  font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Driving Behaviour:</span> {online === 0 ? 0 : drivingBehaviour}
                    </div>
                </div>
                <div className="bg-white rounded-xl p-2 ">
                    <div className="text-gray-600  font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Throttle Position:</span> {online === 0 ? 0 : throttlePosition}
                    </div>
                    <div className="text-gray-600  font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Vehicle Speed:</span> {online === 0 ? 0 : vehicleSpeed}
                    </div>
                    <div className="text-gray-600  font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Engine RPM:</span> {online === 0 ? 0 : engineRpm}
                    </div>
                    <div className="text-gray-600  font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Coolant Temperature:</span> {online === 0 ? 0 : coolantTemp}
                    </div>
                    <div className="text-gray-600  font-bold font-inter border p-1 rounded mb-1">
                        <span className="font-semibold text-xs">Oxygen Sensor:</span> {online === 0 ? 0 : oxygenSensor}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VehicleDetailsPopup;
