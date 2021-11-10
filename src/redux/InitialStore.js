import { createStore } from 'redux'
import reducer from './reducers/reducer'

const initialStore = {
    users: [
      {name: "w"},
      {name: "k"},
      {
        name: "Patryk Chodacki",
        trainings: []
    }
    ],
    userID: "",
    logIn: false,
    setDay: "",
    setMonth: "",
    setYear: "",
    setWorkout: {},
    selectedMuscle: ""
  }

export const storeDeclaration = createStore( reducer, initialStore );
