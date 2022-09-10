import React, {useState} from 'react';
import AddEvent from "./AddEvent";
import Labels from "./Labels";
import s from "./SideBar.module.css";
import calendar from "../../assets/calendar40.png";
import SmallCalendar from "./SmallCalendar";

const SideBar = () => {
    const [openSmallCalendar, setOpenSmallCalendar] = useState(false)

    return (
        <aside className={s.sideBar}>

            <Labels/>
            <div className={s.nav}>
                <AddEvent />

                <button type='button' onClick={() => setOpenSmallCalendar(!openSmallCalendar)} className={s.form__calendar}>
                    <img src={calendar} alt="" />
                </button>
                {openSmallCalendar && <SmallCalendar/>}
            </div>


        </aside>
    );
};

export default SideBar;