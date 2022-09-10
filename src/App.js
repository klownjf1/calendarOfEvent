import './App.css';
import React, {useContext, useEffect, useState} from "react";
import {GetMonth} from "./Functions/createCalendarGrid";
import SideBar from "./Components/SideBar/SideBar";
import Header from "./Components/Header/Header";
import Month from "./Components/CalendarFragments/Month";
import GlobalContext from "./Context/GlobalContext";
import EventsModalWindow from "./Components/EventModalWindow/EventsModalWindow";


function App() {

    const [currentMonth, setCurrentMonth] = useState(GetMonth())
    const {monthIndex, openEventModal} = useContext(GlobalContext)


    useEffect(() => {
        setCurrentMonth(GetMonth(monthIndex))
    }, [monthIndex])

    return (

            <React.Fragment>
                {openEventModal && <EventsModalWindow/>}

                <div>
                    <Header/>
                    <div>
                        <SideBar/>
                        <Month currentMonth={currentMonth}/>
                    </div>
                </div>
            </React.Fragment>

    );
}

export default App;
