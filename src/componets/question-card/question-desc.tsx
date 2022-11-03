import React from 'react'
import styled from 'styled-components'
import { IQuestions } from '../types'
import msg from '../../assets/images/msg.svg'
import { galleyImages } from './types'
import { device } from '../../utils/constants'
import { Link } from 'react-router-dom'

interface Props {
    topic: string
    item: IQuestions | undefined
}

export const QuestionDesc: React.FC<Props> = ({ topic, item }) => {
    return (
        <>
            {item && (
                <Card>
                    <Content>
                        <User>
                            <AvatarWrapper>
                                <ImageAvatar src={item.url} alt="Avatar" />
                            </AvatarWrapper>
                            <Wrap>
                                <NameWrapper>
                                    <Name>{item.name}</Name>
                                </NameWrapper>
                                <FaceWrapper>
                                    <Face src={item.uriName} alt="Logo-name" />
                                    <Asked>спрашивает</Asked>
                                </FaceWrapper>
                            </Wrap>
                        </User>
                        <Desc>
                            <p>{item.desc}</p>
                            <Shadow></Shadow>
                        </Desc>
                        <Gallery>
                            {galleyImages?.map(img => (
                                <div key={img.id}>
                                    <ImageGallery src={img.src} alt={img.title} />
                                </div>
                            ))}
                        </Gallery>
                        <OtherInfo>
                            <div>
                                <Link to='/'>
                                    {item && <Topic>#{topic}</Topic>}
                                </Link>
                            </div>
                            <WrapperInfo>
                                <Messages>
                                    <span>{item.messages}</span>
                                    <img src={msg} alt="Message" />
                                </Messages>
                                <Date>
                                    <span>{item.date}</span>
                                </Date>
                            </WrapperInfo>
                        </OtherInfo>
                    </Content>
                </Card>
            )}
        </>
    )
}

const Card = styled.div`
    background: ${({ theme }) => theme.darkGrey};
    border-radius: 30px;
    max-width: 858px;
    width: 100%;
    color: ${({ theme }) => theme.white};
    margin: 0 auto;
`

const Content = styled.div`
    padding: 30px 50px;
    margin-bottom: 40px;
    @media ${device.tabletS} {
        padding: 16px;
    }
`

const Wrap = styled.div`
    display: flex;
    align-items: center;
    @media ${device.tabletS} {
        flex-direction: column;
        align-items: flex-start;
    }
`

const AvatarWrapper = styled.div`
    
`

const NameWrapper = styled.div`
    display: flex;
    align-items: center;
`

const FaceWrapper = styled.div`
    display: flex;
    align-items: center;
`

const Face = styled.img`
    margin-right: 5px;
`

const User = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`

const ImageAvatar = styled.img`
    margin-right: 12px;
`

const Asked = styled.p`
    color: ${({ theme }) => theme.grey};
`

const Name = styled.span`
    margin-right: 6px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    @media ${device.mobileL} {
        font-size: 16px;
    }
`

const Desc = styled.div`
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    position: relative;
    @media ${device.mobileL} {
        font-size: 14px;
    }
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
    font-size: 16px;
    line-height: 19px;
    z-index: 12312;
`

const Topic = styled.p`
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

const Date = styled.div``

const Gallery = styled.div`
    margin: 30px 0;
    display: flex;
    gap: 14px;
    display: flex;
    flex-wrap: wrap;
`

const ImageGallery = styled.img`
    border-radius: 10px;
    cursor: pointer;
`