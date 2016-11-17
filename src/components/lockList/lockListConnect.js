import {connect} from 'react-redux'
import LockList from './LockList'
import * as actions from 'actions'
import * as fromReducer from 'reducer'

const mapStateToProps = state => ({
  locks: fromReducer.getLocks(state)
})

const mapDispatchToProps = dispatch => ({
  onLockClick: id => dispatch(actions.unlock(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(LockList)
