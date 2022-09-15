import React, {useContext, useState} from 'react';
import s from './EventsModal.module.css'
import GlobalContext from "../../Context/GlobalContext";
import x from '../../assets/x.png'
import calendar from '../../assets/calendar.png'
import SmallCalendar from "../SideBar/SmallCalendar";


const EventsModalWindow = () => {

    const {setOpenEventModal, selectedDay, dispatchEvents, selectedEvent} = useContext(GlobalContext)
    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title: '')
    const [description, setDescription] = useState(selectedEvent ? selectedEvent.description: '')
    const [openSmallCalendar, setOpenSmallCalendar] = useState(false)


    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const calendarEvent = {
            title,
            description,
            day: selectedDay.valueOf(),
            id: selectedEvent? selectedEvent.id : Date.now()
        }

        if (selectedEvent){
            dispatchEvents({type: 'UPDATE-EVENT', payload: calendarEvent})
        } else{
            dispatchEvents({type: 'PUSH-EVENT', payload: calendarEvent})
        }

        setOpenEventModal(false)
    }

    return (
        <div className={s.modal__form}>
            <form action="" className={s.form__container}>
                <button className={s.close__btn} onClick={() => {
                    setOpenEventModal(false)
                }}><img src={x} alt=""/>
                </button>
                <div>
                    <div className={s.item}>
                        <p>Add title</p>
                        <input
                            type="text"
                            name={title}
                            value={title}
                            onChange={onChangeTitle}
                            required={true}
                            className={s.form__input}
                            placeholder={'Title'}

                        />
                    </div>
                    <div className={s.item}>
                        <p>{selectedDay.format('dddd, MMMM DD')}</p>

                        <button type='button' onClick={() => setOpenSmallCalendar(!openSmallCalendar)} className={s.form__calendar}>
                            <img src={calendar} alt="" />
                        </button>
                        {openSmallCalendar && <SmallCalendar/>}
                    </div>

                    <div className={s.item}>
                        <p>Description</p>


                    <input
                        type="text"
                        name={description}
                        value={description}
                        onChange={onChangeDescription}
                        className={s.form__input}
                        placeholder={'Description'}
                    />
                    </div>

                </div>
                <div className={s.item}>
                {selectedEvent && (
                    <button className = {s.cal__btn} onClick={() => {
                        dispatchEvents({type:'DELETE-EVENT', payload: selectedEvent})
                        setOpenEventModal(false)

                    }}
                    >
                        delete
                    </button>
                )}

                <button type={"submit"} onClick={handleSubmit} className={s.cal__btn}>
                    save
                </button>
                </div>
            </form>
        </div>
    );
};

export default EventsModalWindow;