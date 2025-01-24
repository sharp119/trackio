import { useState } from 'react';
import { BiSolidBell, BiMenu } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useUserAuth } from './context/UserAuthContext';
import { FaUserCircle } from 'react-icons/fa';

const SearchBar = ({ sidebarOpen, toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useUserAuth();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

 const handleToggleSidebar = (e) => {
  e.stopPropagation(); // Stop the event from propagating to the document click event
  // Call the toggleSidebar function to open/close the sidebar
  toggleSidebar();
};

  return (
    <div className="flex justify-between items-center bg-white p-2 px-4 sm:px-10 shadow-md sm:ml-64">
      <div className="relative flex items-center focus-within:text-gray-600 border rounded-3xl overflow-hidden max-w-full">
        <AiOutlineSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
        <input
          type="text"
          className="pr-3 pl-10 py-2 w-full focus:outline-none placeholder-[#4E4E4E] font-semibold placeholder-font-inter placeholder-font-semibold placeholder-text-xs"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>

      <button onClick={handleToggleSidebar} className="mobile-toggle-button">
        <BiMenu size={24} /> {/* Use the BiMenu icon as the hamburger menu */}
      </button>

      <div className="flex items-center space-x-2">
        <BiSolidBell className="text-black text-xl sm:mr-5" size="25px" />

        <div>
          {user.photoURL ? (
            <img src={user.photoURL} alt="User Image" className="w-8 h-8 rounded-full" />
          ) : (
            <FaUserCircle size="25px" />
          )}
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-black font-inter font-semibold">
            {user.displayName ? user.displayName : "Guest User"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
