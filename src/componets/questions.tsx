import React from 'react'
import msg from '../assets/images/msg.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { questions } from './types'
import trash from '../assets/images/trash.svg'
import edit from '../assets/images/edit.svg'
import { device } from '../utils/constants'

interface Props {
    topicTitle?: string
    editable?: boolean
}

export const Questions: React.FC<Props> = ({ topicTitle = 'Все', editable = false }) => {

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
                                        <img src={el.uriName} alt="Logo-name" />
                                    </WrapperUser>
                                </User>
                                <Desc>
                                    <p>{el.desc.length < 209 ? el.desc : el.desc.split('').splice(0, 209).join('')}</p>
                                    <Shadow></Shadow>
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
                                            <span>{el.date}</span>
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
    @media ${device.tabletS} {
        font-size: 15px;
        width: 65px;
    }
`

const Desc = styled.div`
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    position: relative;
    @media ${device.tablet} {
        font-size: 17px;
    }
`

const Topic = styled.p`
    color: ${({ theme }) => theme.grey};
    z-index: 12;
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