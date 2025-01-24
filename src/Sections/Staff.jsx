import React, { useState } from 'react';

function StaffMember({ name, position, setPosition }) {
    const positions = ['Driver', 'Manager', 'Admin'];

    // Define CSS styles for the component
    const staffMemberStyles = {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        marginBottom: '10px',
    };

    const sliderContainerStyles = {
        flex: 1,  // Make the slider container take up remaining space
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const sliderStyles = {
        width: '300px',  // Adjust the width of the slider
    };

    return (
        <div style={staffMemberStyles}>
            <div>
                <div className="font-bold font-inter text-xl mb-2">{name}</div>
                <div className="text-gray-600 mb-2 font-inter font-bold text-xs">Access Level: <span className="text-red-500">{positions[position - 1]}</span></div>
            </div>
            <div style={sliderContainerStyles}>
                <div style={sliderStyles}>
                    <input
                        type="range"
                        min="1"
                        max="3"
                        value={position}
                        onChange={(e) => setPosition(name, parseInt(e.target.value))}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}

function Staff() {
    const [staffData, setStaffData] = useState([
        { name: 'Ashish', position: 3 },
        { name: 'Vaibhav', position: 2 },
        { name: 'Palak', position: 2 },
        { name: 'Shivam', position: 1 },
        { name: 'Robin', position: 1 },
        { name: 'Karan', position: 1 },
        { name: 'Jatin', position: 1 },
        { name: 'Kiran', position: 1 },
    ]);

    const setPosition = (name, newPosition) => {
        const updatedData = staffData.map((staff) =>
            staff.name === name ? { ...staff, position: newPosition } : staff
        );
        setStaffData(updatedData);
    };

    return (
        <div className="bg-white mx-10 my-5 rounded-xl p-4 ml-72">
            <h1 className="text-2xl text-gray-600 font-inter font-bold mb-4">
                Staff Members
            </h1>            <div className="flex mb-1 ml-[500px] justify-between w-[300px] ">

                <div className=" bg-white text-gray-600 font-inter font-bold text-sm"
                >Driver</div>
                <div className=" bg-white text-gray-600 font-inter font-bold text-sm"
                >Manager</div>
                <div className=" bg-white text-gray-600 font-inter font-bold text-sm"
                >Admin</div>
            </div>
            {staffData.map((staff, index) => (
                <StaffMember
                    key={index}
                    name={staff.name}
                    position={staff.position}
                    setPosition={setPosition}
                />
            ))}

        </div>
    );
}

export default Staff;
