import React, {useContext} from 'react';
import GlobalContext from "../../Context/GlobalContext";
import dayjs from "dayjs";
import s from './Header.module.css'
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrows.png'



const Header = () => {
    const {monthIndex, setMonthIndex} = useContext(GlobalContext)

    const prevMonthClick = () => {
        setMonthIndex(monthIndex - 1)
    }

    const nextMonthClick = () => {
        setMonthIndex(monthIndex + 1)
    }


    return (
        <header>
            <div className={s.header__container}>
                <div className={s.header__buttons}>

                    <button onClick={prevMonthClick} className={s.header__button}><img src={leftArrow} alt=""/></button>
                    <h2>
                        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
                    </h2>
                    <button onClick={nextMonthClick} className={s.header__button}><img src={rightArrow} alt=""/></button>


                </div>




            </div>
        </header>
    );
};

export default Header;