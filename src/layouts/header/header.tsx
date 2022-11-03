import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../../componets/styles'
import search from '../../assets/images/search.svg'
import logo from '../../assets/images/logo.svg'
import { device } from '../../utils/constants'
import { MenuHeader } from '../../componets'

export const Layout: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <Wrapper>
            <Header >
                <Container>
                    <nav>
                        <Menu>
                            <Item>
                                <Link to="/"><ImageLogo src={logo} alt="Logo" /></Link>
                                <InfoLink>
                                    <StyledNavLink to="/">Вопросы</StyledNavLink>
                                    <StyledNavLink to="/">О проекте</StyledNavLink>
                                </InfoLink>
                            </Item>
                            <Item>
                                <StyledNavLink to="/auth/login">Войти</StyledNavLink>
                                <LinkSearch to="/"><img src={search} alt="Search" /></LinkSearch>
                                <MenuHeader open={open} setOpen={setOpen} />
                            </Item>
                        </Menu>
                    </nav>
                </Container>
            </Header>
            <Outlet />
        </Wrapper>
    )
}

const StyledNavLink = styled(NavLink)`
    position: relative;
    text-decoration: ${(props) => {
        return props.style ? (isActive) => (isActive ? "underline" : "none") : "none";
    }};
    color: ${({ theme }) => theme.grey};
    transition: 0.4s ease all;
    :hover {
        color: ${({ theme }) => theme.white};
    }
    @media ${device.tablet} {
        display: none;
    }
`;

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.black};
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
    @media ${device.mobileL} {

    }
`

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 40px;
`

const InfoLink = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`

const LinkSearch = styled(Link)`
    @media ${device.tablet} {
        position: absolute;
        top: 45px;
        right: 90px;
    }
`