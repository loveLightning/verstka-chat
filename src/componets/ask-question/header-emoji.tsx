import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { emoji, Props } from './types'
import close from '../../assets/images/close.svg'
import closeWhite from '../../assets/images/close-white.svg'
import { Link } from 'react-router-dom'
import { device } from '../../utils/constants'

export const HeaderEmoji = () => {
    const [dataEmoji, setDataEmoji] = useState<Props[]>([])
    const [value, setValue] = useState('0')
    useEffect(() => {
        setDataEmoji(emoji)
    }, [dataEmoji])

    return (
        <Wrapper>
            <WrapperEmoji>
                {dataEmoji && dataEmoji?.map((emoji, id) => (
                    <Label key={emoji.id}>
                        <Input type='radio' checked={emoji.id === value} onChange={() => setValue(emoji.id)} />
                        <InnerLabel>
                            <Emoji key={emoji.id} src={emoji.src} alt={emoji.title} />
                        </InnerLabel>
                    </Label>
                ))}
            </WrapperEmoji>
            <Link to='/'>
                <Close />
            </Link>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 37px 0px 57px 0;
    justify-content: space-between;
    @media ${device.tablet} {
        padding-bottom: 40px;
    }
`

const WrapperEmoji = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    margin-left: 10px;
    @media ${device.tablet} {
        gap: 30px;
    }
`

const Emoji = styled.img`
    position: relative;
    z-index: 1; 
    width: 30px;
    height: 30px;
    user-select: none;
    @media ${device.tablet} {
        height: 20px;
        width: 20px;
    }
`

const Close = styled.div`
    transition: 0.4s ease all;
    background-image: url(${close});
    width: 19px;
    height: 19px;
    background-size: 19px 19px;
    :hover {
        background-image: url(${closeWhite});
    }
`

const Input = styled.input`
    display: none;
    :checked + div::before {
        background-color: ${({theme}) => theme.white}
    }
`

const Label = styled.label`
`

const InnerLabel = styled.div`
    cursor: pointer;
    position: relative;
   
    ::before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -54%);
        border-radius: 50%;
        background-color: ${({ theme }) => theme.darkGrey};
        width: 50px;
        height: 50px;

        @media ${device.tablet} {
            width: 40px;
            height: 40px;
        }
    }
` 