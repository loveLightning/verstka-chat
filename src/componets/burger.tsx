import React from "react";
import styled from "styled-components";
import { device } from "../utils/constants";

const StyledHamburger = styled.button<{ open: boolean }>`
  height: 2rem;
  padding: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  outline: none;

  @media ${device.tablet} {
    width: 2rem;
    position: absolute;
    top: 45px;
    right: 30px;
    z-index: ${({open}) => open ? '0' : '1'};
  }

  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: ${({ theme }) => theme.grey};
    
    :first-child {
      transform: ${({ open }) =>
    (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ open }) =>
    (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export const Hamburger: React.FC<Props> = ({ open, setOpen }) => (
  <StyledHamburger
    open={open}
    onClick={() => setOpen(!open)}
  >
    <div />
    <div />
    <div />
  </StyledHamburger>
);