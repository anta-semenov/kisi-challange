import * as actionTypes from 'constants/actionTypes'
import lockItem from './lockItem'

const locks = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOCKS_RECEIVE:
      return action.locks
    default:
      return state.map(item => lockItem(item, action))
  }
}

export default locks

export const getLocks = state => state
