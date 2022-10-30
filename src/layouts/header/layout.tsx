import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../../componets/styles'
import search from '../../assets/images/search.svg'
import logo from '../../assets/images/logo.svg'

export const Layout: React.FC = () => {
    return (
        <Wrapper>
            <Header>
                <Container>
                    <nav>
                        <Menu>
                            <Item>
                                <Link to="/"><ImageLogo src={logo} alt="Logo" /></Link>
                                <Link to="/">Вопросы</Link>
                                <Link to="/">О проекте</Link>
                            </Item>
                            <Item>
                                <Link to="/auth/login">Войти</Link>
                                <Link to="/"><img src={search} alt="Search" /></Link>
                            </Item>
                        </Menu>
                    </nav>
                </Container>
            </Header>
            <Outlet />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.black};
`

const Header = styled.header`
    padding-top: 40px;
    margin-bottom: 60px;
`

const ImageLogo = styled.img`
    margin-right: 70px;
`

const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 40px;
`