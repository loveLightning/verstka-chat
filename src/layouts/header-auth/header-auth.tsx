import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import close from '../../assets/images/close.svg'
import closeWhite from '../../assets/images/close-white.svg'
import { Container } from '../../componets/styles'
import { device } from '../../utils/constants'

export const HeaderAuth = () => {
    return (
        <Container>
            <Header>
                <Links>
                    <HeaderLink to='/auth/login'>Войти</HeaderLink>
                    <HeaderLink to='/auth/register'>Регистрация</HeaderLink>
                    <HeaderLink to='/auth/forgot'>Не помню пароль</HeaderLink>
                </Links>
                <div>
                    <Link to='/'>
                        <Close />
                    </Link>
                </div>
            </Header>
            <Outlet />
        </Container>
    )
}

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

const HeaderLink = styled(NavLink)`
    color: ${({ theme }) => theme.grey};
    font-size: 20px;
    line-height: 24px;
    transition: 0.4s ease all;
    font-weight: 500;
    &.active {
        color: ${({theme}) => theme.white};
    }
    :hover {
        color: ${({theme}) => theme.white};
    }
`