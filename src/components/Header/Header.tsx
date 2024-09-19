import React from 'react';
import { FaHome, FaChartLine, FaHistory, FaCog, FaPaperPlane, FaTh } from 'react-icons/fa';

// Define the NavProps interface
interface NavProps {
    name: string;
    link: string;
    icon: JSX.Element; // The icon is a JSX element
}

// Create the NavItems array
const NavItems: NavProps[] = [
    {
        name: 'Dashboard',
        link: '/',
        icon: <FaHome />,
    },
    {
        name: 'Analytics',
        link: '/analytics',
        icon: <FaChartLine />,
    },
    {
        name: 'History',
        link: '/history',
        icon: <FaHistory />,
    },
    {
        name: 'Settings',
        link: '/settings',
        icon: <FaCog />,
    },
    {
        name: 'Send Report',
        link: '/send-report',
        icon: <FaPaperPlane />,
    },
    {
        name: 'Apps',
        link: '/apps',
        icon: <FaTh />,
    },
];

// Header component
const Header = () => {
    return (
        <header className="text-white text-white flex justify-between items-center p-2 shadow-md">
        <nav className="flex flex-grow justify-between sm:space-x-4 space-x-2">

                {NavItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="flex items-center p-2 rounded hover:bg-gray-700 transition-colors"
                    >
                        {item.icon}
                        <span className="ml-2">{item.name}</span>
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Header; // Export at the end
