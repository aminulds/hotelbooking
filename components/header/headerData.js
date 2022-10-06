import { MdLocalHotel, MdFlight } from 'react-icons/md';
import { FaCarAlt } from 'react-icons/fa';


export const navbarData = [
    {
        text: 'Stays',
        icon: <MdLocalHotel />,
        isActive: true
    },
    {
        text: 'Flights',
        icon: <MdFlight />,
        isActive: false
    },
    {
        text: 'Car Rentals',
        icon: <FaCarAlt />,
        isActive: false
    },
    {
        text: 'Attraction',
        icon: <MdLocalHotel />,
        isActive: false
    },
    {
        text: 'Airport Taxis',
        icon: <FaCarAlt />,
        isActive: false
    },
];
