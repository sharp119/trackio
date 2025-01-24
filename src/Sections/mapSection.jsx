import { useEffect } from "react";
import cargo from "../assets/cargo.svg"
import retrn from "../assets/retrn.svg"
import broken from "../assets/broken.svg"

function MapSection() {
    useEffect(() => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 28.5331, lng: 77.1819 },
            zoom: 16,
        });

        // eslint-disable-next-line no-unused-vars
        const marker = new window.google.maps.Marker({
            position: { lat: 28.5331, lng: 77.1819 },
            map: map,
            title: "Your Marker Title",
        });


    }, []);

    return (
        <div className="rounded-xl  bg-white">
            <div className="flex items-center justify-between p-2">
                <div className="flex items-center">
                    <div
                        className=" bg-white text-gray-600 font-inter font-bold text-xs"
                    >
                        Vehicles On The Road
                    </div>
                </div>
            </div>

            <div className="flex justify-between p-2 gap-2">
                <div className="w-[25%] p-2 border rounded-tl-none rounded-tr-none rounded-lg">
                    <div className="mt-2 text-gray-600 font-inter font-bold text-xs">
                        All
                    </div>
                    <div className=" mt-4 text-gray-600 font-inter font-bold text-2xl">
                        10
                    </div>
                </div>
                <div className="w-[25%] p-2 border rounded-tl-none rounded-tr-none rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className=" text-gray-600 font-inter font-bold text-xs">
                            With Cargo
                        </div>
                        <div className="bg-[#B4C3FF] rounded-md p-1">
                            <img
                                src={cargo}
                                alt="With Cargo Image"
                                className="w-6 h-6"
                            />
                        </div>
                    </div>
                    <div className=" mt-2 text-gray-600 font-inter font-bold text-2xl">
                        3
                    </div>
                </div>
                <div className="w-[25%] p-2 border rounded-tl-none rounded-tr-none rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className=" text-gray-600 font-inter font-bold text-xs">
                            Returning
                        </div>
                        <div className="bg-[#FFDEB6] rounded-md p-1">
                            <img
                                src={retrn}
                                alt="Returning Image"
                                className="w-6 h-6"
                            />
                        </div>
                    </div>
                    <div className=" mt-2 text-gray-600 font-inter font-bold text-2xl">
                        3
                    </div>
                </div>
                <div className="w-[25%] p-2 border rounded-tl-none rounded-tr-none rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className=" text-gray-600 font-inter font-bold text-xs">
                            Broken Down
                        </div>
                        <div className="bg-[#F99] rounded-md p-1">
                            <img
                                src={broken}
                                alt="Broken Down Image"
                                className="w-6 h-6"
                            />
                        </div>
                    </div>
                    <div className=" mt-2 text-gray-600 font-inter font-bold text-2xl">
                        4
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="p-2">
                <div id="map" className="w-full h-[400px]"></div>
            </div>
        </div>
    );
}

export default MapSection;