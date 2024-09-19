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
        icon: <FaHome/>
    },
    {
        name: 'Analytics',
        link: '/analytics',
        icon: <FaChartLine />
    },
    {
        name: 'History',
        link: '/history',
        icon: <FaHistory/>
    },
    {
        name: 'Settings',
        link: '/settings',
        icon: <FaCog />
    },
    {
        name: 'Send Report',
        link: '/send-report',
        icon: <FaPaperPlane/>
    },
    {
        name: 'Apps',
        link: '/apps',
        icon: <FaTh/>
    },
];


export default NavItems; // Export the NavItems array