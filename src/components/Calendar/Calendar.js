import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'; 
import { monthsCalendar  } from '../../constans/monthsCalendar';
import { monthsTraining } from '../../cons../../constans/monthsTraining'
import { days } from '../../constans/days';
import { StyledCell } from '../../styled/styledCalendar/styledCell';
import { StyledRow } from '../../styled/styledCalendar/styledRow';
import { StyledCalendar } from '../../styled/styledCalendar/styledCalendar';
import { SET_DAY } from '../../redux/actions/actions'

const Calendar = ( { setDay } ) => {

    const [curDay, setCurDay] = useState(0);
    const [curMonth, setCurMonth] = useState(0);
    const [curYear, setCurYear] = useState(0);
    const [today, setToday] = useState(0);

    const [currentMonthLength, setCurrentMonthLength] = useState(0);
    const [calendarCells, setCalendarCells] = useState([]);
    const [calendar, setCalendar] = useState();

    let date = new Date();
    const weekDay = date.getDate();
    const currentDay = date.getDay();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    
    useEffect(() => {
        setCurDay(currentDay);
        setCurMonth(currentMonth);
        setCurYear(currentYear);
        setToday(weekDay);
    }, [])
    useEffect(() => {
        let daysInMonth = 32 - new Date(curYear, curMonth, 32).getDate();
        setCurrentMonthLength(daysInMonth);
    }, [curYear, curMonth]);
    useEffect(() => {
        setCalendarCells([ ...Array(currentMonthLength).keys() ].map( i => i+1));
    }, [currentMonthLength, curMonth])
    useEffect(() => {
        let firstDay = (new Date(curYear, curMonth)).getDay();
        let startZeros = [...calendarCells.map( cell => cell < firstDay ? 0 : null )].filter( cell => cell !== null )
        const newCalendarCells = [...startZeros, ...calendarCells];
        const rows = [...Array( Math.ceil(newCalendarCells.length / 7) )];
        const numsRows = rows.map( (row, idx) => newCalendarCells.slice(idx * 7, idx * 7 + 7));
        setCalendar(numsRows)
    }, [calendarCells])
    
    
    const next = () => {
        setCurYear( curMonth === 11 ? curYear + 1 : curYear )
        setCurMonth( curMonth === 11 ? 0 : curMonth + 1 )
    }
    const previous = () => {
        setCurYear( curMonth < 1 ? curYear -1 : curYear )
        setCurMonth( curMonth < 1 ? 11 : curMonth -1 )
    }
    // console.log( "Rok: " + curYear ) 
    // console.log( "Miesiąc: " + months[curMonth], curMonth )
    // console.log( "Dzień miesiąca: " + curDay )
    return (
        <div>
            Workout Plan Here! Do YOUR WORK MAN!
            <button onClick={previous}>PREV</button>
            <button onClick={next}>NEXT</button>
            <h2>{monthsCalendar[curMonth]} {curYear}</h2>
            <div style={{display: "flex"}}>{days.map( (day, id) => <StyledCell key={id}>{ day }</StyledCell> )}</div>
            <StyledCalendar>
            {calendar?.map( (row, id) => {
                return <StyledRow key={id}>{row.map( (cell, id) => <StyledCell key={id} active={ cell === curDay && curMonth === currentMonth ? true : false } onClick={() => setDay(cell, monthsTraining[curMonth], curYear) }>{cell === 0 ? null : cell}</StyledCell> )}</StyledRow>
            
            } )}
            </StyledCalendar>
        </div>
    )
}
const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        setDay: (cell, curMonth, curYear) => dispatch( {type: SET_DAY, payload: { cell, curMonth, curYear }  } )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
