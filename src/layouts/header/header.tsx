import React, { useContext, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../../componets/styles'
import search from '../../assets/images/search.svg'
import logo from '../../assets/images/logo.svg'
import { device } from '../../utils/constants'
import { MenuHeader } from '../../componets'
import { UserContext } from '../../componets/context/user'

export const Layout: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false)
    const [user,setUser] = useContext(UserContext)
    const openMenuProfile = () => {
        setIsActive(!isActive)
    }

    
    const logout = () => {
        console.log(user)
        setUser({
            auth: ''
        })
    }

    return (
        <Wrapper>
            <Header >
                <Container>
                    <nav>
                        <Menu>

                            <Item>
                                <Link to="/"><ImageLogo src={logo} alt="Logo" /></Link>
                                <InfoLink>
                                    <StyledNavLink end to="/">Вопросы</StyledNavLink>
                                    <StyledNavLink to="/about-us">О проекте</StyledNavLink>
                                </InfoLink>
                            </Item>

                            <Item>
                                {user.auth ? <StyledNavLinkProfile to='/profile' state={{ from: isActive }} onClick={openMenuProfile} >Андрей</StyledNavLinkProfile> : <StyledNavLinkLogin to="/auth/login">Войти</StyledNavLinkLogin>}

                                <LinkSearch to="/search"><img src={search} alt="Search" /></LinkSearch>
                                <MenuHeader open={open} setOpen={setOpen} />

                            </Item>

                            {user.auth ? <MenuProfile>
                                <LinkProfile to='/my-questions'>Ваши вопросы</LinkProfile>
                                <LinkProfile to='/profile'>Личные данные</LinkProfile>
                                <LinkProfile logout={"true"} onClick={logout} to='/'>Выйти</LinkProfile>
                            </MenuProfile> : ''}
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
    font-size: 20px;
    &.active {
        color: ${({ theme }) => theme.white};
    }
    &.active:hover {

    }
    :hover {
        color: ${({ theme }) => theme.white};
    }
    @media ${device.tablet} {
        display: none;
    }
`;

const StyledNavLinkLogin = styled(StyledNavLink)``
const StyledNavLinkProfile = styled(StyledNavLink)`

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
    position: relative;
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

const MenuProfile = styled.div`
    z-index: 2;
    position: absolute;
    right: 0;
    top: 110px;
    padding: 20px;
    width: 266px;
    height: 188px;
    background: ${({ theme }) => theme.white};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: -50px;
`

interface Styled {
    logout?: string
}


const LinkProfile = styled(Link)<Styled>`
    font-size: 30px;
    line-height: 36px;
    color: ${({ theme, logout }) => !logout ? theme.black : theme.red};
`