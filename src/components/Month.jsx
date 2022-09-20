import React from "react"
import styles from "../style/month.module.scss"
import Day from "./Day";
import {getDaysOfMonth} from "../service/calendar";
import {number} from "prop-types";

class MonthView extends React.Component {


    render() {
        function A() {
            const dayInWeek = [1, 2, 3, 4, 5, 6, 7]
            const weeksInMonth = [1, 2, 3, 4, 5]
            let daysOfMonth = getDaysOfMonth(2022, 9)
            const emptyDay = <Day/>
            const fillDay = (number) => <Day dayInWeek={number}/>
            let firstDay = daysOfMonth[0].getDay()
            const fillWeek = (content) => <div className={styles.dayRow}> {content} </div>
            const getDays = (monthLength) => {
                let content = []
                let weekContent = []
                let printDay=false;
                for (let i=0; i<35; i++) {
                    // alert(i)
                    if (i === firstDay) {
                        printDay = true
                    }
                    // alert(printDay)
                    if (i === firstDay+monthLength) {
                        printDay = false
                    }
                    if (printDay) {
                        weekContent.push(emptyDay)
                    } else {
                        weekContent.push(fillDay(i-firstDay+1))
                    }
                    if(i+1%7 === 0) {
                        content.push(fillWeek(weekContent))
                        weekContent = []
                    }
                }
                content.push(weekContent)
                return content
            }


            alert(daysOfMonth.length)
            return getDays(daysOfMonth.length)
        }

        return (

            <div className={styles.MonthView}>
                <div className={styles.wrapper}>
                    <A/>
                </div>
            </div>);
    }

}


export default MonthView;