import React, {useContext} from 'react';
import GlobalContext from "../../Context/GlobalContext";
import add from '../../assets/add.png'
import s from './SideBar.module.css'

const AddEvent = () => {

    const {setOpenEventModal, openEventModal} = useContext(GlobalContext)

    return (
        <div>
            <button onClick={() => setOpenEventModal(!openEventModal)} className={s.add__btn}>
                <img src={add} alt=""/>
            </button>
        </div>
    );
};

export default AddEvent;