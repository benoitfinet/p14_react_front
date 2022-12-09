import { createSlice } from '@reduxjs/toolkit'

const inputSlice = createSlice({
  // le nom du slice
  name: 'createEmployee',
  // le state initial
  initialState: {
    inputState: []
  },
  // reducers permet de définir les actions et le reducer
  reducers: {
    // l'action set ('page/set')
    validate: (state, action) => {
      state.inputState.push(action.payload)
    }
  },
})

// on extrait les actions et le reducer
const { actions, reducer } = inputSlice
// on export chaque action individuellement
export const { validate } = actions
// on export le reducer comme default export
export default reducer