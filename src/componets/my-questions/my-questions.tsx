import React from 'react'
import styled from 'styled-components'
import { device } from '../../utils/constants'
import { Questions } from '../questions'

export const MyQuestions = () => {
  return (
    <div>
      <Title>Ваши вопросы</Title>
      <WrapperQuestions>
        <Questions editable={true} />
      </WrapperQuestions>
    </div>
  )
}

const Title = styled.h3`
  font-size: 48px;
  line-height: 96.3%;
  color: ${({ theme }) => theme.white};
  max-width: 813px;
  margin: 20px auto 40px auto; 
  @media ${device.tablet} {
    font-size: 42px;
  }
`

const WrapperQuestions = styled.div`
  display: flex;
  justify-content: center;
`
