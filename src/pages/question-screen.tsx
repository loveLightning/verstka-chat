import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { QuestionDesc } from '../componets/question-card'
import { useLocation } from 'react-router-dom'
import { IQuestions, questions } from '../componets/types'
import { Container } from '../componets/styles'

type Params = {
  id: string
};

export const QuestionScreen = () => {
  const { id } = useParams<Params>()
  const location = useLocation()
  const [item, setItem] = useState<IQuestions>()
  const { topic } = location.state


  useEffect(() => {
    if (id) {
      setItem(questions[Number(id)])
    }
  }, [id])

  return (
    <Container>
      {item && <QuestionDesc topic={topic} item={item}></QuestionDesc>}
    </Container>
     
  )
}
