import React from "react"
import styles from "../style/month.module.scss"
import Day from "./Day";
import {getDaysOfMonth} from "../service/calendar";
import {number} from "prop-types";

class MonthView extends React.Component {


    render() {
        function GeneratedMonth() {
            let daysOfMonth = getDaysOfMonth(2022, 8)
            const emptyDay = <Day/>
            const fillDay = (number) => <Day dayInWeek={number}/>
            let firstDay = daysOfMonth[0].getDay()
            const getDays = (monthLength) => {
                let content = []
                let printDay = false;
                for (let i = 1; i <= 35; i++) {
                    if (i === firstDay) {
                        printDay = true
                    }
                    if (i === firstDay + monthLength) {
                        printDay = false
                    }
                    if (printDay) {
                        content.push(fillDay(i - firstDay + 1))
                    } else {
                        content.push(emptyDay)
                    }
                }
                return content
            }

            return getDays(daysOfMonth.length)
        }

        return (
            <div className={styles.MonthView}>
                <div className={styles.wrapper}>
                    <GeneratedMonth />
                </div>
            </div>);
    }

}


export default MonthView;