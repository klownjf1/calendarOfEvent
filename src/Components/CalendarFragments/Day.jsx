import React, {useContext, useEffect, useState} from 'react';
import s from './CalendarFragments.module.css'
import dayjs from "dayjs";
import GlobalContext from "../../Context/GlobalContext";
import {number,object} from "prop-types";



const Day = ({day, rowIndex}) => {

    Day.propTypes = {
        day: object,
        rowIndex: number
    };

    const [dayEvents, setDayEvents] = useState([])
    const {setSelectedDay, setOpenEventModal, saveEvents, setSelectedEvent} = useContext(GlobalContext)


    useEffect(() => {
        const events = saveEvents.filter(e => dayjs(e.day).format("DD-MM-YY") === day.format("DD-MM-YY"))
        setDayEvents(events)

    }, [saveEvents, day])


    const getCurrentDay = () => {
        return day.format('DD-MM-YY') === dayjs().format("DD-MM-YY") ? s.current_day : ''
    }
    return (
        <div className={`${s.calendar__day}`} onClick={() => {
            setSelectedDay(day)
            setOpenEventModal(true)
        }}>
            {rowIndex === 0 && (
                <p className={`${s.calendar__day__title}` } >{day.format('ddd').toUpperCase()}</p>
            )}
            <p className={`${s.calendar__day__number} ${getCurrentDay()}`}>{day.format('DD')}</p>
            {dayEvents.map((e, index) => (
                <div key={index} className = {s.title} onClick={() => setSelectedEvent(e)}>
                    {e.title}
                </div>
            ))}

        </div>
    );
};

export default Day;