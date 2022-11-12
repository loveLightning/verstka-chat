import React from 'react'
import msg from '../assets/images/msg.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { questions } from './types'
import trash from '../assets/images/trash.svg'
import edit from '../assets/images/edit.svg'
import { device } from '../utils/constants'
import { useWindowDimension } from '../hooks'

interface Props {
    topicTitle?: string
    editable?: boolean
}

export const Questions: React.FC<Props> = ({ topicTitle = 'Все', editable = false }) => {
    const { width } = useWindowDimension()

    return (
        <Wrapper>
            {questions?.map((el, id) => (
                <WrapperCard key={el.id}>
                    <Card>
                        {editable && <WrapperEditable>
                            <Link to='/edit-question'>
                                <ImageEditable src={edit} alt='Edit' />
                            </Link>
                            <ImageTrash src={trash} alt='Trash' />
                        </WrapperEditable>}
                        <LinkCard to={`/question/${id}`} state={{ topic: topicTitle }}>
                            <Wrap>
                                <User>
                                    <WrapperUser>
                                        <ImageVatar src={el.url} alt="Avatar" />
                                        <Name>{el.name}</Name>
                                        <LogoName src={el.uriName} alt="Logo-name" />
                                    </WrapperUser>
                                </User>
                                <Desc>
                                    {width && width > 575 ? <TextQuestion>{el.desc.length < 209 ? el.desc : el.desc.split('').splice(0, 209).join('')}...</TextQuestion> : <TextQuestion>{el.desc.length < 137 ? el.desc : el.desc.split('').splice(0, 137).join('')}...</TextQuestion>}
                                </Desc>
                                <OtherInfo>
                                    <div>
                                        <div>
                                            {topicTitle && <Topic>#{topicTitle}</Topic>}
                                        </div>
                                    </div>
                                    <WrapperInfo>
                                        <Messages>
                                            <span>{el.messages}</span>
                                            <img src={msg} alt="Message" />
                                        </Messages>
                                        <Date>
                                            <DateSpan>{el.date}</DateSpan>
                                        </Date>
                                    </WrapperInfo>
                                </OtherInfo>
                            </Wrap>
                        </LinkCard>
                    </Card>
                </WrapperCard>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 100px;
`

const WrapperCard = styled.div`
    max-width: 818px;
`

const Wrap = styled.div`
    padding: 30px;
    @media ${device.tabletS} {
        padding: 20px;
    }
    @media ${device.mobileL} {
        padding: 16px;
    }
`

const LinkCard = styled(Link)`
    color: ${({ theme }) => theme.white};
`

const Card = styled.div`
    background-color: ${({ theme }) => theme.darkGrey};
    border-radius: 30px;
    color: ${({ theme }) => theme.white};
    width: 100%;
    position: relative;
    transition: 0.4s ease all;
    :hover {
        background-color: #1D1D1D;
    }
    @media ${device.tabletS} {
        border-radius: 16px;
    }
`

const User = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    justify-content: space-between;
`

const ImageVatar = styled.img`
    margin-right: 12px;
`

const Name = styled.span`
    margin-right: 6px;
    font-size: 20px;
    font-weight: 500;
    @media ${device.tabletS} {
        font-size: 15px;
        white-space: nowrap;
    }
`

const LogoName = styled.img`

`

const Desc = styled.div`
    margin-bottom: 12px;
    position: relative;
`

const Topic = styled.p`
    color: ${({ theme }) => theme.grey};
    z-index: 12;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    @media ${device.mobileL} {
        font-size: 13px;
    }
`

const OtherInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.grey};
    @media ${device.tablet} {
        font-size: 13px;
    }
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
    @media ${device.mobileL} {
        font-size: 13px;
    }
`

const Date = styled.div`
    
`

const WrapperEditable = styled.div`
    display: flex; 
    align-items: center;
    gap: 24px;
    @media ${device.tablet} {
        gap: 15px;
    }
`

const WrapperUser = styled.div`
    display: flex;
    align-items: center;
`

const ImageEditable = styled.img`
    position: absolute;
    right: 60px;
    z-index: 1;
    top: 40px;
`

const ImageTrash = styled.img`
    position: absolute;
    right: 30px;
    z-index: 1;
    top: 40px;
`

const DateSpan = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.grey};
    @media ${device.mobileL} {
        font-size: 13px;
    }
`

const TextQuestion = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: ${({ theme }) => theme.white};
    @media ${device.tablet} {
        font-size: 17px;
    }
`