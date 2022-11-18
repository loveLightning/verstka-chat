import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../utils/constants";

import { Hamburger } from "./burger";
import { UserContext } from "./context/user";

const Wrapper = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`

const StyledMenu = styled.div<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 3;
  background-color: ${({ theme }) => theme.extra_black};
  overflow-y: auto;
  display: ${({ open }) => (open ? "flex" : "none")};
  transition: transform 0.3s ease;
  transform: ${({ open }) =>
    (open ? "translateX(0)" : "translateX(-100%)")};
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.darkGrey};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.grey};
    border-radius: 10px;
  }
`;
interface Styled {
  active?: string
  activeGrey?: string
}
const StyledLink = styled(NavLink)<Styled>`
  width: fit-content;
  font-size: 2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  &.active{
    color: ${({theme}) => theme.green};
  }
  font-size: 34px;
  line-height: 96.3%;
  :hover {
    cursor: pointer;
  }
  @media ${device.mobileM} {
    font-size: 32px;
  }
`;
const StyledLinkClose = styled(StyledLink)`
  color: ${({theme, activeGrey}) => activeGrey && theme.placeholder} !important;
`
const MenuWrapper = styled.div<{ open: boolean }>`
  transition: 0.3s ease all;
  opacity: ${({ open }) => open ? 1 : 0};
  position: fixed;
  background-color: rgba(0,0,0,0.9);
  z-index: 2;
`
const Separator = styled.div`
  border: 1px solid ${({theme}) => theme.separator};
  width: 100%;
  height: 1px;
  width: 255px;
  ${device.mobileM} {
    width: 240px;
  }
`
const Wrap = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  position: absolute;
  gap: 40px;
  top: 50%;
  left: 50^;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  padding-left: 60px;
  padding-right: 60px;
  @media ${device.mobileM} {
    padding-left: 20px;
    padding-right: 20px;
  }
`

type Props = {
  open: boolean
  setOpen: (v: boolean) => void
  isActiveSearch?: boolean
};

export const MenuHeader: React.FC<Props> = ({ open, setOpen, isActiveSearch }) => {
  const close = () => setOpen(false);
  const [user, setUser] = useContext(UserContext)

  const logout = () => {
    setUser({
      auth: ''
    })
    setOpen(false)
  }

  return (
    <Wrapper>
      <MenuWrapper open={open} >
        <StyledMenu open={open} >
          
          {user.auth ? <Wrap>
            <StyledLink end to='/' onClick={() => close()}>Вопросы</StyledLink>
            <StyledLink to='/about-us' onClick={() => close()}>О проекте</StyledLink>
            <Separator />
            <StyledLink to='/my-questions' onClick={() => close()}>Ваши вопросы</StyledLink>
            <StyledLink to='/profile' onClick={() => close()}>Личные данные</StyledLink>
            <StyledLinkClose activeGrey="true" onClick={logout} to='/'>Выйти</StyledLinkClose>
          </Wrap> : <Wrap>
            <StyledLink to='/auth' onClick={() => close()}>Вход</StyledLink>
            <StyledLink end to='/' onClick={() => close()}>Вопросы</StyledLink>
            <StyledLink to='/about-us' onClick={() => close()}>О проекте</StyledLink>
          </Wrap>}
        </StyledMenu>
      </MenuWrapper>
      <Hamburger isActiveSearch={isActiveSearch} open={open} setOpen={setOpen} />
    </Wrapper>
  );
};
