import React from "react"
import style from '../style/day.module.scss'

class Day extends React.Component {
    render() {
        let dayNumber = this.props.dayInWeek
        return <div className={style.day}>
            {dayNumber}
        </div>
    }
}

export default Day