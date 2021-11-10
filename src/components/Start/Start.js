import React from 'react'
import { connect } from 'react-redux'
import Calendar from '../Calendar/Calendar'
import StartSidebar from './StartSidebar.js/StartSidebar'

const Start = ({userID}) => {
    return (
        <div>
            Witaj, {userID}!
            <div>
                <Calendar />
                <StartSidebar />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userID: state.userID
    }
}

export default connect(mapStateToProps)(Start)
