import React from 'react'
import { questions } from './types'
import msg from '../../assets/images/msg.svg'
import styled from 'styled-components'

export const Questions = () => {
    const str = 'У меня получился такой "мудборд" из парочки моих работ в сравнениис "рефами" - работами моей коллеги, с моими комментами. И подборка стилей иллюстрации, которые мне очень нравятся. Каким может быть задание для'
    console.log(str.length)
    return (
        <Wrapper>
            {questions?.map(el => (
                <Card key={el.id}>
                    <User>
                        <ImageVatar src={el.url} alt="Avatar" />
                        <Name>{el.name}</Name>
                        <img src={el.uriName} alt="Logo-name" />
                    </User>
                    <Desc>
                        <p>{el.desc.length < 209 ? el.desc : el.desc.split('').splice(0, 209).join('')}</p>
                        <Shadow></Shadow>
                    </Desc>
                    <OtherInfo>
                        <div>
                            <p>{el.topic}</p>
                        </div>
                        <WrapperInfo>
                            <Messages>
                                <span>{el.messages}</span>
                                <img src={msg} alt="Message" />
                            </Messages>
                            <Date>
                                <span>{el.date}</span>
                            </Date>
                        </WrapperInfo>
                    </OtherInfo>
                </Card>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Card = styled.div`
    padding: 30px;
    background-color: ${({ theme }) => theme.darkGrey};
    width: 818px;
    border-radius: 30px;
    color: ${({ theme }) => theme.white};
`

const User = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`

const ImageVatar = styled.img`
    margin-right: 12px;
`

const Name = styled.span`
    margin-right: 6px;
`

const Desc = styled.div`
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    position: relative;
`

const Shadow = styled.div`
    position: absolute;
    background: linear-gradient(270deg, #191919 0%, rgba(25, 25, 25, 0) 61.53%, rgba(25, 25, 25, 0) 100%);
    right: 40px;
    width: 57px;
    height: 23px;
    bottom: 4px;
    opacity: 0.6;
`

const OtherInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.grey};
`

const WrapperInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

const Messages = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

const Date = styled.div`
    
`