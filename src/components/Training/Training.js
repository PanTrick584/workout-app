import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { muscles } from '../../constans/muscles'
import { StyledTraining } from '../../styled/styledTraining/styledTraining'
import { SET_ACTIVE_MUSCLE } from '../../redux/actions/actions'
import TrainingMuscle from './TrainingMuscle/TrainingMuscle'

const Training = ({ setDay, setMonth, setYear, activeMuscle }) => {

    return (
        <StyledTraining >
            <h2>{setDay} {setMonth} {setYear }</h2>
            <TrainingMuscle />
            {/* To na dole też do osobnego komponentu */}
            <div>
                Twoje ćwiczenia:
                <div>
                    {muscles.map(muscle => muscle.name === activeMuscle && Array.isArray(muscle.exercises) ? muscle.exercises.map( (exercise, id)  =>{
                        return <div  key={id} style={{ display: "flex" }}>
                            <div>
                                <p>Nazwa ćwiczenia:</p>
                                {exercise.name}
                            </div>
                            <div style={{ width: "15vw" }}>
                                <p>Opis ćwiczenia:</p>
                                {exercise.description}
                            </div>
                            <div>
                                {[ ...Array(exercise.sets).keys() ].map( i => i+1).map( (set, id) => <div key={id}>Set {set}<input placeholder={exercise.repeat} /></div> )}
                            </div>
                            <div>
                                <p>Partia mięśni:</p>
                                {exercise.type}
                            </div>
                         </div>
                         }) : "")}
                </div>
            </div>
        </StyledTraining>
    )
}
const mapStateToProps = state => {
    return {
        setDay: state.setDay,
        setMonth: state.setMonth,
        setYear: state.setYear,
        activeMuscle: state.selectedMuscle
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setActiveMuscle: ( selectedMuscle ) => dispatch( { type: SET_ACTIVE_MUSCLE, payload: { selectedMuscle } } )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Training)
