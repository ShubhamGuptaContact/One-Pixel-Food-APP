import { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";

const Footer = () => {
    
    const [dateTime, setDateTime] = useState(new Date());
    const {LoggedInUser} = useContext(UserContext);

    useEffect(() => {
        // Function to update the date and time
        const updateDateTime = () => {
            setDateTime(new Date());
        };

        // Set the interval to update the time every second
        const intervalId = setInterval(updateDateTime, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="border-b-2 p-2 shadow-lg bg-[#ebe5e5] flex justify-between sticky w-[100%] bottom-0">
            <div className="text-left">© 2024 {LoggedInUser}. All rights reserved.</div>
            <p className='font-extrabold shadow-xl shadow-black p-1 bg-[#E6A639] text-white rounded'>{dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()} IST</p>
        </div>
    );
}

export default Footer;
