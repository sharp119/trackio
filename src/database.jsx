import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../../firebase";

function RDB() {
    const [vehicleFleetList, setVehicleFleetList] = useState([]);

    useEffect(() => {
        const vehicleRef = ref(db, 'vehicles');

        // Create a listener to watch for changes in the "vehicles" endpoint.
        const unsubscribe = onValue(vehicleRef, (snapshot) => {
            const fetchedData = [];
            if (snapshot.exists()) {
                snapshot.forEach((childSnapshot) => {
                    const vehicleDetail = childSnapshot.val();
                    fetchedData.push(vehicleDetail);
                });
                setVehicleFleetList(fetchedData);

                // Log the fetched data to the console.
                console.log('Fetched data:', fetchedData);
            }
        });

        // Clean up the listener when the component unmounts.
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div>
            <h1>Vehicle Fleet List</h1>
            <ul>
                {vehicleFleetList.map((vehicleDetail, index) => (
                    <li key={index}>
                        {/* Render your vehicle details here */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RDB;