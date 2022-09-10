import React from "react";

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (index) => {},
    selectedDay: 0,
    setSelectedDay: (day) => {},
    openEventModal: false,
    setOpenEventModal: () => {},
    dispatchEvents: ({type, payload}) => {},
    saveEvents: [],
    selectedEvent: null,
    setSelectedEvent: () => {}
})

export default GlobalContext