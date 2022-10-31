import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import community from '../../assets/images/community.png'
import { device } from '../../utils/constants'
import { Container } from '../styles'
import { Questions } from './questions'
import { SideBar } from './side-bar'
import list from '../../assets/images/list.svg'

export const HomePage = () => {

  const [isActiveTopic, setIsActiveTopic] = useState<number>(0)
  const [topicTitle, setTopicTitle] = useState<string>('Все')
  const [activeCategories, setActiveCategories] = useState<boolean>(false)

  const selectItem = (id: number, el: string): void => {
    setIsActiveTopic(id)
    setTopicTitle(el)
    setActiveCategories(false)
  }

  return (
    <Container>
      <WrapperTitle>
        <Link to="/new-question">
          <Title><Fragment>Задайте вопрос</Fragment> уютному сообществу <Image></Image> дизайнеров, вместе проще разобраться</Title>
        </Link>
      </WrapperTitle>
      <AllCategories onClick={() => setActiveCategories(!activeCategories)}>
        <WrapperCategories>
          <TitleCategories>{topicTitle === 'Все' ? 'Все категории' : topicTitle}</TitleCategories>
          <img src={list} alt="list" />
        </WrapperCategories>
      </AllCategories>
      <Content>
        <SideBar activeCategories={activeCategories} isActive={isActiveTopic} selectItem={selectItem} />
        <Questions topicTitle={topicTitle} />
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

const AllCategories = styled.div`
  display: none;
  width: 100%;
  background-color: ${({ theme }) => theme.darkGrey};
  margin: 0 auto;
  height: 55px;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 40px;
  cursor: pointer;
  @media ${device.mobileS} {
    display: block;
  }
  @media ${device.laptop} {
    display: none;
  }
`

const WrapperCategories = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  
`

const TitleCategories = styled.p`
  color: ${({theme}) => theme.white};
  font-size: 17px;
  line-height: 134.3%;
`

const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    @media ${device.tablet} {
      
    }
    @media ${device.laptop} {
      gap: 40px;

    }
    @media ${device.laptopL} {
      gap: 20px;
    }
`