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
import close from '../../assets/images/close.svg'
import closeWhite from '../../assets/images/close-white.svg'

interface Styled {
    isActiveSearch?: boolean
    logout?: string
}

export const Layout: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false)
    const [user, setUser] = useContext(UserContext)
    const [isActiveSearch, setIsActiveSearch] = useState<boolean>(true)
    const menuRef = useRef<HTMLDivElement>(null)
    const [inputValue, setInputValue] = useState('')
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

    const startSearch = () => {
        setIsActiveSearch(!isActiveSearch)
    }

    return (
        <Wrapper>
            <Header >
                <Container>
                    <nav>
                        <Menu>
                            <Item isActiveSearch={isActiveSearch}>
                                {isActiveSearch ? <><LinkLogo isActiveSearch={isActiveSearch} to="/"><ImageLogo src={logo} alt="Logo" /></LinkLogo>
                                    <InfoLink>
                                        <StyledNavLink isActiveSearch={isActiveSearch} end to="/">Вопросы</StyledNavLink>
                                        <StyledNavLink isActiveSearch={isActiveSearch} to="/about-us">О проекте</StyledNavLink>
                                    </InfoLink></> : <InputSearch autoFocus placeholder='Поиск вопросов' onChange={(e) => setInputValue(e.target.value)} value={inputValue} type='text' />}
                            </Item>

                            <Item isActiveSearch={isActiveSearch}>
                                {user.auth ? <Wrap>
                                    <StyledNavLinkProfile isActiveSearch={isActiveSearch} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} to='/profile' state={{ from: isActive }} onClick={openMenuProfile} >Андрей</StyledNavLinkProfile>
                                    <MenuProfile onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} ref={menuRef}>
                                        <LinkProfile onClick={closeMenu} to='/my-questions'>Ваши вопросы</LinkProfile>
                                        <LinkProfile onClick={closeMenu} to='/profile'>Личные данные</LinkProfile>
                                        <LinkProfile logout={"true"} onClick={logout} to='/'>Выйти</LinkProfile>
                                    </MenuProfile>
                                </Wrap> : <StyledNavLinkLogin isActiveSearch={isActiveSearch} to="/auth">Войти</StyledNavLinkLogin>}
                                {isActiveSearch ? <LinkSearch onClick={startSearch}></LinkSearch> : <Close onClick={startSearch} />}

                                <MenuHeader isActiveSearch={isActiveSearch} open={open} setOpen={setOpen} />

                            </Item>
                        </Menu>
                    </nav>
                </Container>
            </Header>
            <Outlet />
        </Wrapper>
    )
}

const StyledNavLink = styled(NavLink) <Styled>`
    display: ${({ isActiveSearch }) => isActiveSearch ? 'block' : 'none'};
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

const InputSearch = styled.input`
    font-family: 'Gilroy';
    color: ${({ theme }) => theme.white};
    height: 36px;
    background: ${({ theme }) => theme.black};
    border: none;
    outline: none;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    width: 100%;
    ::placeholder {
        color: ${({ theme }) => theme.placeholder};
        @media ${device.tablet} {
            font-size: 24px;
            line-height: 29px;
        }
    }
    @media ${device.tablet} {
        font-size: 24px;
        line-height: 29px;
        margin-top: -10px;
    }
`

const StyledNavLinkLogin = styled(StyledNavLink) <Styled>`
    @media ${device.tablet} {
        display: none;
    }
`

const Wrap = styled.div`
   &:hover ${MenuProfile} {
        display: flex;
    }
`
const StyledNavLinkProfile = styled(StyledNavLink) <Styled>`
    display: ${({ isActiveSearch }) => isActiveSearch ? 'flex' : 'none'};
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
    @media ${device.tablet} {
        display: none;
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

const LinkLogo = styled(Link) <Styled>`
    display: ${({ isActiveSearch }) => isActiveSearch ? 'block' : 'none'};
`

const ImageLogo = styled.img`
    margin-right: 70px;
    width: 169px;
    height: 44px;
    @media ${device.tablet} {
        width: 135px;
        height: 35px;
    }
    @media ${device.tabletS} {
        margin-top: -10px;
    }
`

const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 48px;
`

const Item = styled.li<Styled>`
    display: flex;
    align-items: center;
    gap: 40px;
    :nth-child(1) {
        width: ${({ isActiveSearch }) => !isActiveSearch && '80%'}; 
    }
    :nth-child(2) {
        width: ${({ isActiveSearch }) => !isActiveSearch && '18%'}; 
    }

    @media ${device.tablet} {
        gap: 0;
    }
`

const InfoLink = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`

const LinkSearch = styled.p`
    background: url(${search});
    width: 32px;
    height: 44px;
    background-size: 32px 44px;
    transition: 0.4s ease all;
    cursor: pointer;
    :hover {
        background-image: url(${activeSearch});
    }
    @media ${device.tablet} {
        display: block;
        position: absolute;
        right: 62px;
        height: 28px;
        width: 28px;
        background-size: 26px 26px;
        top: 11px;
    }

    @media ${device.tabletS} {
        top: 6px;
    }

`

const LinkProfile = styled(Link) <Styled>`
    font-size: 30px;
    line-height: 36px;
    color: ${({ theme, logout }) => !logout ? theme.black : theme.red};
    transition: 0.4s ease all;
    :hover {
        color: ${({ theme, logout }) => !logout && theme.menu};
    }
`

const Close = styled.div`
    transition: 0.4s ease all;
    background-image: url(${close});
    width: 19px;
    height: 19px;
    background-size: 19px 19px;
    margin-right: 5px;
    cursor: pointer;
    margin-left: auto;
    :hover {
        background-image: url(${closeWhite});
    }
    @media ${device.tabletS} {
        margin-top: -10px;
    }
`