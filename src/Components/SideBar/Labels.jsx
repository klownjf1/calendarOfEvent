import React, {useContext} from 'react';
import GlobalContext from "../../Context/GlobalContext";
import dayjs from "dayjs";
import s from './SideBar.module.css'


const Labels = () => {
    const {saveEvents} = useContext(GlobalContext)

    return (
        <div>
            {saveEvents.map((e, index) => (
                <span key = {index} className={s.label}>
                    <div className={s.label__item}>
                        {dayjs(e.day).format('DD-MM-YY')}
                    </div>
                    <div className={s.label__item}>
                       {e.title}
                    </div>


                </span>
            ))}

        </div>
    );
};

export default Labels;