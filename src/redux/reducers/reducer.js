import { 
    LOG_OUT,
    CHECK_LOGIN,
    SET_DAY,
    SET_ACTIVE_MUSCLE
} from '../actions/actions'

function reducer ( state, action ) {
    if( action.type === CHECK_LOGIN ) {
        let login = action.payload.login;
        let user = state.users.find( user => user.name === login );
        if ( user ) return { ...state, logIn: true, userID: login }
    }
    if( action.type === LOG_OUT ) {
        return { ...state, logIn: false }
    }
    if( action.type === SET_DAY ) {
        let month = action.payload.curMonth;
        let year = action.payload.curYear;
        let day = action.payload.cell
        let userWorkout = [...state.users.filter( user => user.name === state.userID )]
        console.log(userWorkout)
        // console.log()
        return { ...state, setDay: day, setMonth: month, setYear: year }
    }
    if( action.type === SET_ACTIVE_MUSCLE ) {
        let muscle = action.payload.selectedMuscle;
        return { ...state, selectedMuscle: muscle }
    }
    return state;
}

export default reducer;