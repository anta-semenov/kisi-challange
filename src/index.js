require('./l10n.min')
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root/Root'
import configureStore from './store/configureStore'
import {loadLocks} from 'actions'

const store = configureStore()
store.dispatch(loadLocks())

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
