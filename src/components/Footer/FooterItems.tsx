

import { FaHome, FaChartLine, FaHistory, FaCog, FaPaperPlane, FaTools, FaBars, FaTimes, FaTemperatureHigh } from 'react-icons/fa';
interface FooterProps {
    name: string;
    status: string;
    icon: JSX.Element;
}

const FooterItems: FooterProps[] = [
    {
        name: 'Connection',
        status: 'active',
        icon: <FaHome />
    },
    {
        name: 'H',
        status: '',
        icon: <FaChartLine/>
    },
    {
        name: 'Contact',
        status: '',
        icon: <FaHistory/>
    },
    {
        name: 'Terms',
        status: '',
        icon: <FaCog/>
    },
    {
        name: 'Privacy',
        status: '',
        icon: <FaPaperPlane />
    },
    {
        name: 'Services',
        status: '',
        icon: <FaTools />
    },
    {
        name: 'Support',
        status: '',
        icon: <FaBars />
    },
    {
        name: 'Logout',
        status: '',
        icon: <FaTimes />
    },
    {
        name: 'Temperature',
        status: '',
        icon: <FaTemperatureHigh />
    },
]

export default FooterItems;