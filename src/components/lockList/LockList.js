import React from 'react'
import './LockList.less'
import LockItem from './lockItem/LockItem'

const LockList = ({locks, onLockClick}) => (
  <div className='lock-list'>
    {locks.map((lock, index) => <LockItem key={index} {...lock} onLockClick={onLockClick}/>)}
  </div>
)

LockList.propTypes = {
  locks: React.PropTypes.array.isRequired,
  onLockClick: React.PropTypes.func.isRequired
}

export default LockList
