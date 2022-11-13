import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import community from '../../assets/images/community.png'
import { device } from '../../utils/constants'
import { Container } from '../styles'
import { Questions } from '../questions'
import { SideBar } from './side-bar'
import { SelectComponent } from '../select'

export const HomePage = () => {

  const [isActiveTopic, setIsActiveTopic] = useState<number>(0)
  const [topicTitle, setTopicTitle] = useState<string>('Все');
  const [activeCategories, setActiveCategories] = useState<boolean>(false)

  const selectItem = (id: number, el: string): void => {
    setIsActiveTopic(id)
    setTopicTitle(el)
    setActiveCategories(false)
  }

  return (
    <Container>
      <WrapperTitle>
        <TitleLink to="/ask-question">
          <Title><Fragment>Задайте вопрос</Fragment> уютному сообществу дизайнеров, <Image></Image> вместе проще разобраться</Title>
        </TitleLink>
      </WrapperTitle>
      <SelectComponent topicTitle={topicTitle} setTopicTitle={setTopicTitle} />
      <Content>
        <SideBar activeCategories={activeCategories} isActive={isActiveTopic} selectItem={selectItem} />
        <Questions topicTitle={topicTitle} />
      </Content>
    </Container>
  )
}

const Fragment = styled.span`
  color: ${({ theme }) => theme.grey};
  position: relative;
  ::before {
    transition: 0.4s ease all;
    content: '';
    border-bottom: ${({ theme }) => theme.grey} 1px solid;
    display: block;
    position: absolute;
    bottom: 5px;
    width: 100%;
  }
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 64px;
  line-height: 62px;
  color: ${({ theme }) => theme.white};
  position: relative;
  margin-bottom: 70px;
  transition: 0.4s ease all;
  @media ${device.tablet} {
    font-size: 40px;
    line-height: 102.3%;
    margin-bottom: 40px;
  }
  @media ${device.tabletS} {
    margin-bottom: 26px;
    font-size: 37px;
  }
  :hover {
    ${Fragment} {
      ::before {
        transition: 0.4s ease all;
        opacity: 0;
      }
    }
  }
`

const WrapperTitle = styled.div`
  max-width: 950px;
`

const TitleLink = styled(Link)`
  color: ${({ theme }) => theme.white};
`

const Image = styled.span`
  ::before {
    content: '';
    background-image: url(${community});
    background-size: 146px 58px;
    width: 146px;
    height: 58px;
    display: inline-block;
    margin-bottom: -15px;
    @media ${device.tablet} {
      background-size: 110px 44px;
      width: 110px;
      height: 44px;
    }
  }
`

const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    gap: 40px;
`