import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import community from '../../assets/images/community.png'
import { Container } from '../styles'
import { Questions } from './questions'
import { SideBar } from './side-bar'

export const HomePage = () => {

    const selectQuestions = (id: number, el: string): void => {
        console.log(id, el)
    }

    return (
        <Container>
            <WrapperTitle>
                <Link to="/new-question">
                    <Title><Fragment>Задайте вопрос</Fragment> уютному сообществу <Image></Image> дизайнеров, вместе проще разобраться</Title>
                </Link>
            </WrapperTitle>
            <Content>
                <SideBar selectQuestions={selectQuestions} />
                <Questions />
            </Content>

        </Container>
    )
}

const Title = styled.h1`
  font-weight: 600;
  font-size: 64px;
  line-height: 62px;
  color: ${({ theme }) => theme.white};
  position: relative;
  margin-bottom: 70px;
`

const Fragment = styled.span`
  color: ${({ theme }) => theme.grey};
  position: relative;
  ::before {
    content: '';
    border-bottom: ${({ theme }) => theme.grey} 1px solid;
    display: block;
    position: absolute;
    bottom: 5px;
    width: 489px;
  }
`

const WrapperTitle = styled.div`
  max-width: 950px;
`

const Image = styled.span`
  ::before {
    content: '';
    background-image: url(${community});
    width: 146px;
    height: 58px;
    display: inline-block;
    margin-bottom: -15px;
  }
`

const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`