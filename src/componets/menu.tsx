import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
  padding: 10rem 0;
  flex-direction: column;
  background-color: ${({ theme }) => theme.darkGrey};
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
}
const StyledLink = styled(Link)<Styled>`
  width: fit-content;
  font-size: 2rem;
  text-decoration: none;
  margin: 0 auto;
  margin-bottom: 30px; 
  color: ${({ theme, active }) => active ? theme.red : theme.white};
  
  :hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    font-size: 22px;
  }
`;
const MenuWrapper = styled.div<{ open: boolean }>`
  transition: 0.3s ease all;
  opacity: ${({ open }) => open ? 1 : 0};
  position: fixed;
  background-color: rgba(0,0,0,0.9);
  z-index: 2;
`

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export const MenuHeader: React.FC<Props> = ({ open, setOpen }) => {
  const close = () => setOpen(false);
  const [user, setUser] = useContext(UserContext)

  const logout = () => {
    setUser({
        auth: ''
    })
}

  return (
    <Wrapper>
      <MenuWrapper open={open} >
        <StyledMenu open={open} >
          <StyledLink to='/' onClick={() => close()}>Вопросы</StyledLink>
          <StyledLink to='/about-us' onClick={() => close()}>О проекте</StyledLink>

          {user.auth ? <StyledLink to='/profile' onClick={() => close()}>Андрей</StyledLink> : <StyledLink to='/auth' onClick={() => close()}>Войти</StyledLink>}
          
          {user.auth ? <>
            <StyledLink to='/my-questions' onClick={() => close()}>Ваши вопросы</StyledLink>
            <StyledLink to='/profile' onClick={() => close()}>Личные данные</StyledLink>
            <StyledLink active="true"  onClick={logout} to='/'>Выйти</StyledLink>
          </> : ''}
        </StyledMenu>
      </MenuWrapper>
      <Hamburger open={open} setOpen={setOpen} />
    </Wrapper>
  );
};
