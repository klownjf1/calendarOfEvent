import React from 'react';
import Day from "./Day";
import s from './CalendarFragments.module.css'


const Month = ({currentMonth}) => {
    return (
        <div className={s.calendar__month}>
            {currentMonth.map((row, index) => (
                <React.Fragment key = {index}>
                    {row.map((day, i) => (
                        <Day day = {day} key = {i} rowIndex = {index}/>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Month;