import {combineReducers} from 'redux'
import locks, * as fromLocks from './locks'

const reducer = combineReducers({
  locks
})

export default reducer

/*
* Selectors
*/

export const getLocks = state => fromLocks.getLocks(state.locks)
