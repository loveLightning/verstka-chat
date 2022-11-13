import React, { useContext, useState, useRef } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../../componets/styles'
import logo from '../../assets/images/logo.svg'
import { device } from '../../utils/constants'
import { MenuHeader } from '../../componets'
import search from '../../assets/images/search.svg'
import activeSearch from '../../assets/images/active-search.svg'
import { UserContext } from '../../componets/context/user'

export const Layout: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false)
    const [user, setUser] = useContext(UserContext)
    const menuRef = useRef<HTMLDivElement>(null)
    const openMenuProfile = () => {
        setIsActive(!isActive)
    }

    const logout = () => {
        setUser({
            auth: ''
        })
    }

    const onMouseEnter = () => {
        if (menuRef.current !== null) {
            menuRef.current.style.display = 'flex'
        }
    }

    const onMouseLeave = () => {
        if (menuRef.current !== null) {
            menuRef.current.style.display = 'none'
        }
    }


    const closeMenu = () => {
        if (menuRef.current !== null) {
            menuRef.current.style.display = 'none'
        }
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
                                {user.auth ? <Wrap>
                                    <StyledNavLinkProfile onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} to='/profile' state={{ from: isActive }} onClick={openMenuProfile} >Андрей</StyledNavLinkProfile>
                                    <MenuProfile onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} ref={menuRef}>
                                        <LinkProfile onClick={closeMenu} to='/my-questions'>Ваши вопросы</LinkProfile>
                                        <LinkProfile onClick={closeMenu} to='/profile'>Личные данные</LinkProfile>
                                        <LinkProfile logout={"true"} onClick={logout} to='/'>Выйти</LinkProfile>
                                    </MenuProfile>
                                </Wrap> : <StyledNavLinkLogin to="/auth">Войти</StyledNavLinkLogin>}

                                <LinkSearch to="/search"></LinkSearch>
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
    font-size: 20px;
    font-weight: 500;
    &.active {
        color: ${({ theme }) => theme.white};
    }
    :hover {
        color: ${({ theme }) => theme.white};
    }
    @media ${device.tablet} {
        display: none;
    }
`;

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
    display: none;
    &:hover {
        display: flex;
    }
    @media ${device.tablet} {
        display: none !important;
    }
`

const StyledNavLinkLogin = styled(StyledNavLink)`
`

const Wrap = styled.div`
   &:hover ${MenuProfile} {
        display: flex;
    }
`
const StyledNavLinkProfile = styled(StyledNavLink)`
    :hover::before {
        height: 40px;
        position: absolute;
        width: 90px;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
    ::before {
        content: '';
        :hover ${MenuProfile} {
            display: flex !important;
        }
    }
`

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.black};
`

const Header = styled.header`
    padding-top: 40px;
    margin-bottom: 60px;
    @media ${device.tablet} {
        margin-bottom: 40px;
    }
    @media ${device.tabletS} {
        margin-bottom: 26px;
        padding-top: 20px;
    }
`

const ImageLogo = styled.img`
    margin-right: 70px;
    width: 169px;
    height: 44px;
    @media ${device.tablet} {
        width: 135px;
        height: 35px;
    }
`

const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
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

const LinkSearch = styled(StyledNavLink)`
    background: url(${search});
    width: 32px;
    height: 44px;
    background-size: 32px 44px;
    &.active {
        background-image: url(${activeSearch});
    }
    :hover {
        background-image: url(${activeSearch});
    }

    @media ${device.tablet} {
        position: absolute;
        top: 45px;
        right: 90px;
    }

`

interface Styled {
    logout?: string
}

const LinkProfile = styled(Link) <Styled>`
    font-size: 30px;
    line-height: 36px;
    color: ${({ theme, logout }) => !logout ? theme.black : theme.red};
`