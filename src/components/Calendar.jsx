import React from 'react'
import Month from "./Month";
import style from "../style/calendar.module.scss"

class Calendar extends React.Component {
    render() {
        return (<div>
            <span className={style.title}>КАЛЕНДАРЬ</span>
            <Month className="month" />
        </div>);

    }
}

export default Calendar
