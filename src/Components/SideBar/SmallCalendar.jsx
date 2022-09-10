import React, {useContext, useEffect, useState} from 'react';
import dayjs from "dayjs";
import {GetMonth} from "../../Functions/createCalendarGrid";
import GlobalContext from "../../Context/GlobalContext";
import s from './SideBar.module.css'
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrows.png'


const SmallCalendar = () => {
    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = useState(GetMonth())

    useEffect(() => {
        setCurrentMonth(GetMonth(currentMonthIndex))
    }, [currentMonthIndex])

    const prevMonthClick = () => {
        setCurrentMonthIndex(currentMonthIndex - 1)
    }

    const nextMonthClick = () => {
        setCurrentMonthIndex(currentMonthIndex + 1)
    }

    const {
        monthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        selectedDay,
        setSelectedDay
    } = useContext(GlobalContext)



    useEffect(() => {
        setCurrentMonthIndex(monthIndex)
    }, [monthIndex])

    const getCurrentDay = (day) => {
        const choiceSelectedDay = selectedDay && selectedDay.format('DD-MM-YY')
        if (day.format('DD-MM-YY') === dayjs().format("DD-MM-YY")){
            return s.current_day
        }
        else if (day.format('DD-MM-YY') === choiceSelectedDay){
            return s.current_day
        }
    }

    return (
        <div className={s.smallCalendar__container}>

            <div className={s.navigation}>
                <button onClick={prevMonthClick} type={"button"} className={s.btn_calend}>
                    <img src={leftArrow} alt=""/>
                </button>
                <p>
                    {dayjs(new Date(dayjs().year(), currentMonthIndex)).format('MMMM YYYY')}
                </p>

                <button onClick={nextMonthClick} type={"button"} className={s.btn_calend}>
                    <img src={rightArrow} alt=""/>
                </button>
            </div>

            <div className={s.smallCalendar__row}>
                {currentMonth[0].map((day, index) => (
                    <span key={index}>
                        {day.format('dd')}
                    </span>
                ))}
                {currentMonth.map((row, index) => (
                    <React.Fragment key={index}>
                        {row.map((day, i) => (
                            <button
                                key={i}
                                className={`${s.day__btn} ${getCurrentDay(day)}`}
                                onClick={() => {
                                    setSmallCalendarMonth(currentMonthIndex)
                                    setSelectedDay(day)
                                }}
                                type={'button'}
                            >
                                <span>{day.format('D')}</span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>


        </div>
    );
};

export default SmallCalendar;