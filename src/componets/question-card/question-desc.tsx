import React from 'react'
import styled from 'styled-components'
import { IQuestions } from '../types'
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
                            <TextQuestion>{item.desc}</TextQuestion>
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
    @media ${device.tabletS} {
        border-radius: 16px;
    }
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
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.grey};
`

const Name = styled.span`
    margin-right: 6px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    @media ${device.mobileL} {
        font-size: 17px;
    }
`

const Desc = styled.div`
    margin-bottom: 12px;
    position: relative;
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
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    @media ${device.mobileL} {
        font-size: 13px;
    }
`

const WrapperInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

const Date = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    @media ${device.mobileL} {
        font-size: 13px;
    }
`

const Gallery = styled.div`
    margin: 30px 0;
    display: flex;
    gap: 14px;
    display: flex;
    flex-wrap: wrap;
    @media ${device.mobileL} {
        margin: 16px 0;
        gap: 10px;
    }
`

const ImageGallery = styled.img`
    border-radius: 10px;
    cursor: pointer;
    @media ${device.mobileL} {
        width: 90px;
        height: 90px;
    }
    @media ${device.mobileM} {
        width: 79px;
        height: 79px;
    }
`

const TextQuestion = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: ${({ theme }) => theme.white};
    @media ${device.tablet} {
        font-size: 17px;
        line-height: 134.3%;
    }
`