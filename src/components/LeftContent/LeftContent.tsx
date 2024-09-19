import React, { useState } from 'react';
import { 
    FaHome, FaChartLine, FaHistory, FaCog, FaPaperPlane, 
    FaTools, FaBars, FaTimes, FaTemperatureHigh, FaFan 
} from 'react-icons/fa';

// Define the NavProps interface
interface NavProps {
    name: string;
    link: string;
    icon: JSX.Element;
}

// Create the NavItems array for the sidebar
const SidebarItems: NavProps[] = [
    { name: 'Dashboard', link: '/dashboard', icon: <FaHome /> },
    { name: 'Alerts', link: '/alerts', icon: <FaChartLine /> },
    { name: 'Maintenance Logs', link: '/maintenance-logs', icon: <FaHistory /> },
    { name: 'User Settings', link: '/user-settings', icon: <FaCog /> },
    { name: 'Incident Reports', link: '/incident-reports', icon: <FaPaperPlane /> },
    { name: 'Tools', link: '/tools', icon: <FaTools /> },
    { name: 'HVAC Controls', link: '/hvac-controls', icon: <FaTemperatureHigh /> },
    { name: 'Fan Status', link: '/fan-status', icon: <FaFan /> },
];

// Sidebar component
const LeftContent = () => {
    const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility

    return (
        <aside className={`text-white h-full transition-all duration-300 ${isOpen ? 'w-64' : 'w-10'}`}>
            <div className="flex items-center justify-between mb-4">
                <h2 className={`text-xl font-bold transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>S.E.N.S.E. System</h2>
                
                <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <nav className="flex flex-col space-y-8">
                {SidebarItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="flex text-xl items-center p-2 rounded hover:bg-gray-700 transition-colors"
                    >
                        {item.icon}
                        <span className={`ml-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>{item.name}</span>
                    </a>
                ))}
            </nav>
        </aside>
    );
};

export default LeftContent; // Export at the end
