import React from 'react'
import Month from "./Month";
import style from "../style/calendar.module.scss"

class Calendar extends React.Component {
    render() {
        return (<div style={{position: "relative"}} className={style.main}>
            <span className={style.title}>КАЛЕНДАРЬ</span>
            <Month />
        </div>);
    }
}

export default Calendar
