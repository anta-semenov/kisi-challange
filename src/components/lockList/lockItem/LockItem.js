import React from 'react'
import classnames from 'classnames'
import './LockItem.less'

const LockItem = ({id, name, status, onLockClick}) => {
  const buttonClass = classnames({
    'lock-button': true,
    'success': status === 'saccess',
    'error': status === 'error'
  })
  const unlockButton = <div className={buttonClass} onClick={() => onLockClick(id)}/>
  return (
    <div className='lock-item'>
      <div>{name}</div>
      <div className='unlock-container'>
        {status === 'error' && <div className='unlock-error'>error</div>}
        {unlockButton}
      </div>
    </div>
  )
}

LockItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  status: React.PropTypes.string,
  onLockClick: React.PropTypes.func.isRequired
}

export default LockItem
