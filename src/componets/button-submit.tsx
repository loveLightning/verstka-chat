import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/constants'

interface Props {
    value: boolean
    title: string
}

export const ButtonSubmit: React.FC<Props> = ({ value, title }) => {
    return (
        <WrapperButton>
            <Button disabled={value} type="submit">{title}</Button>
        </WrapperButton>
    )
}

const Button = styled.button`
    display: block;
    background: #59DB39;
    border-radius: 20px;
    max-width: 637px;
    width: 100%;
    height: 86px;
    font-size: 48px;
    line-height: 96.3%;
    text-align: center;
    color: ${({ theme }) => theme.black};
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: none;
    :disabled {
        background-color: ${({ theme }) => theme.darkGrey};
        color: ${({ theme }) => theme.grey};
    }
    @media ${device.tablet} {
        height: 61px;
        font-size: 34px;
    }
    @media ${device.tabletS} {
        margin-top: 40px;
    }
`

const WrapperButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 100px;
`