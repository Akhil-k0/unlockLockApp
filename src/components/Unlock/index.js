// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  UnlockDetailsContainer,
  LockImage,
  LockStatus,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [statusInfo, setStatusInfo] = useState('Your Device is Locked')
  const [status, setStatus] = useState('Unlock')
  const [imgStatus, setImgStatus] = useState(true)

  const changeLockStatus = () => {
    setStatusInfo(prevState =>
      prevState === 'Your Device is Locked'
        ? 'Your Device is Unlocked'
        : 'Your Device is Locked',
    )
    setStatus(prevState => (prevState === 'Unlock' ? 'Lock' : 'Unlock'))
    setImgStatus(prevState => !prevState)
  }

  return (
    <BgContainer>
      <UnlockDetailsContainer>
        {imgStatus ? (
          <LockImage
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
        ) : (
          <LockImage
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
        )}
        <LockStatus>{statusInfo}</LockStatus>
        <LockButton onClick={changeLockStatus}>{status}</LockButton>
      </UnlockDetailsContainer>
    </BgContainer>
  )
}

export default Unlock
