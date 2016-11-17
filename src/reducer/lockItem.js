import * as actionTypes from 'constants/actionTypes'

const lockItem = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.UNLOCK_SUCCESS:
      return action.lockId === state.id ? {...state, status: 'success'} : state
    case actionTypes.UNLOCK_ERROR:
      return action.lockId === state.id ? {...state, status: 'error'} : state
    case actionTypes.UNLOCK_RESET:
      return action.lockId === state.id ? {...state, status: undefined} : state
    default:
      return state
  }
}

export default lockItem
