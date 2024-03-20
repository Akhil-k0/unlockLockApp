// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(#161617, #0b0c1e, #3c2940);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const UnlockDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LockImage = styled.img`
  width: 90px;
`

export const LockStatus = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  color: #ffffff;
`

export const LockButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: #e2e8f0;
  background-color: #06b6d4;
  height: 32px;
  width: 80px;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 100px;
`
