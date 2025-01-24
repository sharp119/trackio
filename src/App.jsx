import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNavbar from './sidenavbar';
import SearchBar from './search';
import Dashboard from './dashboard';
import CrashReport from './Sections/CrashReport/CrashReport';
import Login from './components/login';
import Fleet from './Sections/fleet/Fleet';
import Signup from './components/signup';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './ProtectedRoute';
import Staff from './Sections/Staff';
import Report from './Sections/Report';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prevSidebarOpen) => {
      const newSidebarOpen = !prevSidebarOpen;
      console.log('toggleSidebar called. Setting sidebarOpen to:', newSidebarOpen);
      return newSidebarOpen;
    });
  }; const closeSidebar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeSidebar);
    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, [sidebarOpen]);

  return (
    <Router>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div className="flex flex-col min-h-screen bg-[#D2D6EA]">
                  <SearchBar
                    sidebarOpen={sidebarOpen}
                    toggleSidebar={toggleSidebar}
                  />
                  <SideNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/fleet" element={<Fleet />} />
                    <Route path="/crash-reports" element={<CrashReport />} />
                    <Route path="/reports" element={<Report />} />
                    <Route path="/staff" element={<Staff />} />
                  </Routes>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
