import React from 'react'
import styled from 'styled-components'

const UnderDevelopment = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 6px;
  box-sizing: border-box;
  width: auto;
  margin: 0px;
  height: 19px;
  background: #18a0fb;
  border-radius: 0px 0px 4px 0px;
  color: white;
`

const Avaliable = styled(UnderDevelopment)`
  background: #40bf6a;
`

const UponRequest = styled(UnderDevelopment)`
  background: #ef5e53;
`

const Status = ({ variant }) => {
  switch (variant) {
    case 'under-development':
      return <UnderDevelopment>Under development</UnderDevelopment>
    case 'avaliable':
      return <Avaliable>Avaliable</Avaliable>
    case 'upon-request':
      return <UponRequest>Upon request</UponRequest>
    default:
      return <UnderDevelopment>Unset</UnderDevelopment>
  }
}

export default Status
