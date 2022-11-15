import React from "react";
import styled from "styled-components";
import { device } from "../utils/constants";

const StyledHamburger = styled.button<Styled>`
  height: 26px;
  padding: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  outline: none;

  @media ${device.tablet} {
    position: fixed;
    top: 50px;
    right: 30px;
    z-index: ${({ open }) => open ? '3' : '2'};
    display: ${({isActiveSearch}) => !isActiveSearch && 'none'};
  }
  @media ${device.tabletS} {
    top: 25px;
    right: 12px;
  }

  div {
    position: relative;
    width: 26px;
    height: 2px;
    border-radius: 2px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: ${({ theme}) => theme.grey};
    z-index: ${({ open }) => open ? '3' : '2'};
    
    :first-child {
      transform: ${({ open }) =>
    (open ? "rotate(46deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ open }) =>
    (open ? "rotate(-46deg)" : "rotate(0)")};
    }
  }
`;

interface Props {
  open: boolean
  setOpen: (v: boolean) => void
  isActiveSearch?: boolean
}

interface Styled {
  isActiveSearch?: boolean
  open?: boolean
}

export const Hamburger: React.FC<Props> = ({ open, setOpen, isActiveSearch }) => (
  <StyledHamburger
    isActiveSearch={isActiveSearch}
    open={open}
    onClick={() => setOpen(!open)}
  >
    <div />
    <div />
    <div />
  </StyledHamburger>
);