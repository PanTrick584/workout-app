import React from 'react'
import {connect} from 'react-redux'

const StartSidebar = ({ setDay, setMonth, setYear }) => {
    return (
        <h3>
            {setDay} {setMonth} {setYear}
        </h3>
    )
}
const mapStateToProps = state => {
    return {
        setDay: state.setDay,
        setMonth: state.setMonth,
        setYear: state.setYear
    }
}

export default connect(mapStateToProps)(StartSidebar)
