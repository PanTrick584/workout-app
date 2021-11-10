import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { muscles } from '../../../constans/muscles'
import { SET_ACTIVE_MUSCLE } from '../../../redux/actions/actions'


const TrainingMuscle = ( { setActiveMuscle } ) => {

    const [selectedMuscle, setSelecedMuscle] = useState("");
    useEffect(() => {
        setActiveMuscle(selectedMuscle)
    }, [selectedMuscle])

    return (
        <form action="/">
            <div style={{display: "flex", flexDirection: "column"}}>
                <label htmlFor="muscles">Co dziś trenujesz?</label>
                <select name="muscles" onChange={ e => setSelecedMuscle(e.target.value)}>
                    <option value="wybierz" >Wybierz co dziś trenujesz</option>
                    {muscles.map( (muscle, id) => <option value={muscle.name} key={ id } >{muscle.name}</option> )}
                </select>
                
            </div>
                { selectedMuscle !== "" ? <div>Dziś trenujemy {selectedMuscle}</div> : null}
        </form>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        setActiveMuscle: ( selectedMuscle ) => dispatch( { type: SET_ACTIVE_MUSCLE, payload: { selectedMuscle } } )
    }
}

export default connect(null, mapDispatchToProps)(TrainingMuscle)
