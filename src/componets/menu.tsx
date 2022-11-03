import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useOnClickOutside } from "../hooks";
import { device } from "../utils/constants";

import { Hamburger } from "./burger";

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
  width: 50vw;
  position: fixed;
  z-index: 1;
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
    background-color: ${({theme}) => theme.darkGrey};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.grey};
    border-radius: 10px;
  }
`;
const StyledLink = styled(Link)`
  width: fit-content;
  margin-bottom: 30px; 
  font-size: 2rem;
  text-decoration: none;
  margin-right: auto;
  margin-right: 16px;
  margin-left: 30px;
  color: ${({theme}) => theme.white};
  
  :hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    font-size: 22px;
  }
`;
const MenuWrapper = styled.div<{open: boolean}>`
  transition: 0.3s ease all;
  opacity: ${({open}) => open ? 1 : 0};
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0,0,0,0.9);
  z-index: 1;
`

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export const MenuHeader: React.FC<Props> = ({ open, setOpen }) => {
  const close = () => setOpen(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Wrapper>
      <MenuWrapper open={open} >
        <StyledMenu open={open}  ref={node}>
          <StyledLink to='/' onClick={() => close()}>Вопросы</StyledLink>
          <StyledLink to='/' onClick={() => close()}>О проекте</StyledLink>
          <StyledLink to='/' onClick={() => close()}>Войти</StyledLink>
        </StyledMenu>
      </MenuWrapper>
      <Hamburger open={open} setOpen={setOpen} />
    </Wrapper>
  );
};
