import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/constants'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    styles?: React.CSSProperties;
    value?: any
    title?: string | undefined
    fixed?: boolean | undefined
  }

export const ButtonSubmit: React.FC<ButtonProps> = ({ value, title, fixed = false, ...styles }) => {
    return (
        <WrapperButton>
            <Button fixed={fixed} {...styles} disabled={value} type="submit">{title}</Button>
        </WrapperButton>
    )
}

interface Styled {
    fixed: boolean | undefined 
}

const Button = styled.button<Styled>`
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
    font-family: 'Gilroy';
    :disabled {
        background-color: ${({ theme }) => theme.darkGrey};
        color: ${({ theme }) => theme.grey};
    }
    @media ${device.tablet} {
        height: 61px;
        font-size: 34px;
        width: ${({fixed}) => fixed && '90%'};
    }
    @media ${device.tabletS} {
        margin-top: 40px;
    }
`

const WrapperButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
`