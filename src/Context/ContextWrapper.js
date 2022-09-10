import React, {useEffect, useReducer, useState} from 'react';
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
const pushEvent = 'PUSH-EVENT'
const updateEvent = 'UPDATE-EVENT'
const deleteEvent = 'DELETE-EVENT'

const saveEventReducer = (state, {type, payload}) => {
    switch (type){
        case pushEvent:
            return [...state, payload]
        case updateEvent:
            return state.map(e => e.id === payload.id? payload : e )
        case deleteEvent:
            return state.filter(e => e.id !== payload.id)
        default:
            throw new Error()
    }
}

const initEvents = () => {
    const storageEvents = localStorage.getItem('saveEvents')
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : []
    return parsedEvents
}


const ContextWrapper = (props) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null)
    const [selectedDay, setSelectedDay] = useState(dayjs())
    const [openEventModal, setOpenEventModal] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [labels, setLabels] = useState([])
    const [saveEvents, dispatchEvents] = useReducer(saveEventReducer, [], initEvents)


    useEffect(() => {
        localStorage.setItem('saveEvents', JSON.stringify(saveEvents))
    },[saveEvents])



    useEffect(() => {
        if(smallCalendarMonth !== null){
            setMonthIndex(smallCalendarMonth)
        }
    }, [smallCalendarMonth])

    useEffect(() => {
        if(!openEventModal){
            setSelectedEvent(null)
        }
    }, [openEventModal])

    return (
        <GlobalContext.Provider value={{
                monthIndex,
                setMonthIndex,
                smallCalendarMonth,
                setSmallCalendarMonth,
                selectedDay,
                setSelectedDay,
                openEventModal,
                setOpenEventModal,
                dispatchEvents,
                saveEvents,
                selectedEvent,
                setSelectedEvent,
                labels,
                setLabels
            }}>
            {props.children}
        </GlobalContext.Provider>

    );
};

export default ContextWrapper;