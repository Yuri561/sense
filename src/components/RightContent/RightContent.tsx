import React, { useState } from 'react';
import { 
    FaHome, FaChartLine, FaHistory, FaCog, FaPaperPlane, 
    FaTools, FaBars, FaTimes, FaTemperatureHigh, FaFan, 
    FaRegLightbulb, FaNetworkWired, FaClipboardCheck, FaRegQuestionCircle,
    FaUserShield, FaClipboardList, FaThermometerHalf, FaSignal, 
    FaRegWindowMaximize, FaHistory as FaHistoryIcon, FaRegCheckCircle 
} from 'react-icons/fa';

// Define the NavProps interface
interface NavProps {
    name: string;
    link: string;
    icon: JSX.Element;
}

// Create the NavItems array for the sidebar
const RightSidebarItems: NavProps[] = [
    { name: 'Lighting Control', link: '/lighting-control', icon: <FaRegLightbulb /> },
    { name: 'Network Status', link: '/network-status', icon: <FaNetworkWired /> },
    { name: 'Compliance Checks', link: '/compliance-checks', icon: <FaClipboardCheck /> },
    { name: 'Help & Support', link: '/help-support', icon: <FaRegQuestionCircle /> },
    { name: 'Security Settings', link: '/security-settings', icon: <FaUserShield /> },
    { name: 'Energy Usage Reports', link: '/energy-usage', icon: <FaClipboardList /> },
    { name: 'Temperature Monitoring', link: '/temperature-monitoring', icon: <FaThermometerHalf /> },
];

// Sidebar component
const RightContent = () => {
    const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility

    return (
        <aside className={` text-white w-64 p-4 h-full transition-all duration-300 ${isOpen ? 'block' : 'hidden md:block'}`}>
            <div className="flex items-center justify-between mb-4">
                <h2 className={`text-xl font-bold transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>S.E.N.S.E. System</h2>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <nav className="flex flex-col space-y-2">
                {RightSidebarItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors"
                    >
                        {item.icon}
                        <span className={`ml-2 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>{item.name}</span>
                    </a>
                ))}
            </nav>
        </aside>
    );
};

export default RightContent; // Export at the end
