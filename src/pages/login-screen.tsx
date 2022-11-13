import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import close from '../assets/images/close.svg'
import closeWhite from '../assets/images/close-white.svg'
import { Container } from '../componets/styles'
import { device } from '../utils/constants'
import { LoginAuthScreen } from './login-auth-screen'
import { RegAuthScreen } from './reg-auth-screen'
import { ForgotPasswordScreen } from './forgot-password-screen'

export const LoginScreen = () => {
    const navigate = useNavigate()
    const [activePage, setActivePage] = useState('Войти')

    const choosePage = (value: string) => {
        setActivePage(value)
    }
    return (
        <Wrapper>
            <Container>
                <Header>
                    <Links>
                        <HeaderLink active={activePage === 'Войти'} onClick={() => choosePage('Войти')}>Войти</HeaderLink>
                        <HeaderLink active={activePage === 'Регистрация'} onClick={() => choosePage('Регистрация')}>Регистрация</HeaderLink>
                        <HeaderLink active={activePage === 'Не помню пароль'} onClick={() => choosePage('Не помню пароль')}>Не помню пароль</HeaderLink>
                    </Links>
                    <div>
                        <Close onClick={() => navigate(-1)} />
                    </div>
                </Header>
                {activePage === 'Войти' && <LoginAuthScreen />}
                {activePage === 'Регистрация' && <RegAuthScreen />}
                {activePage === 'Не помню пароль' && <ForgotPasswordScreen />}
                <></>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`

const Header = styled.div`
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${device.tabletS} {
        padding-top: 20px;
        align-items: flex-start;
    }
`

const Close = styled.div`
    transition: 0.4s ease all;
    background-image: url(${close});
    width: 19px;
    height: 19px;
    background-size: 19px 19px;
    cursor: pointer;
    :hover {
        background-image: url(${closeWhite});
    }
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    @media ${device.tabletS} {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
`

interface Styled {
    active: boolean
}

const HeaderLink = styled.p<Styled>`
    cursor: pointer;
    color: ${({ theme }) => theme.grey};
    font-size: 20px;
    line-height: 24px;
    transition: 0.4s ease all;
    font-weight: 500;

    color: ${({ theme, active }) => active ? theme.white : theme.grey};
    :hover {
        color: ${({ theme }) => theme.white};
    }
`