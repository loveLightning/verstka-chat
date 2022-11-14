import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/constants'
import { sideBarItem } from './types'
import arrow from '../assets/images/arrow.svg'
import arrowFocus from '../assets/images/arrow-focus.svg'

interface Props {
    setTopicTitle: (topicTitle: string) => void
    topicTitle: string
}

export const SelectComponent: React.FC<Props> = ({ setTopicTitle, topicTitle }) => {

    const changeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTopicTitle(e.target.value);
    }

    return (
        <Wrapper>
            <Select value={topicTitle} onChange={(e) => changeSelect(e)}>
                {sideBarItem?.map(el => (
                    <Option key={el.id}>{el.title}</Option>
                ))}
            </Select>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: none;
    border-radius: 16px;
    background: ${({theme}) => theme.darkGrey};
    @media ${device.tablet} {
        display: block;
        margin-bottom: 20px;
    }
`

const Select = styled.select`
    width: 100%;
    height: 55px;
    border: none;
    outline: none;
    color: ${({theme}) => theme.white};
    appearance: none;
    text-align: left;
    background: url(${arrow}) no-repeat right;
    padding : 0 16px;
    background-position: calc(100% - 0.75rem) center !important;
    cursor: pointer;
`
const Option = styled.option`
    color: ${({theme}) => theme.white};
    background: ${({theme}) => theme.darkGrey};
`


// const StyledSelect = styled(Select)`
//     .Select__control {
//         height: 55px;
//         width: 100%;
//         border-radius: 16px;
//         cursor: pointer;
//         background: ${({ theme }) => theme.darkGrey};
//         text-align: center;
//         outline: none;
//         box-shadow: none;
//         border: none;
//     }
//     .Select__single-value {
//         color: ${({ theme }) => theme.white};
//     }

//     .Select__value-container {
//         padding: 0;
//     }
//     .Select__control:hover {
//         outline: none;
//         border: none;
//     }
//     .Select__menu-list::-webkit-scrollbar {
//         width: 4px;
//         height: 0px;
//     }
//     .Select__menu-list::-webkit-scrollbar-track {
//         background: ${({ theme }) => theme.grey};
//     }
//     .Select__menu-list::-webkit-scrollbar-thumb {
//         background: ${({ theme }) => theme.white};
//     }
//     .Select__menu-list::-webkit-scrollbar-thumb:hover {
//         background: #555;
//     }

//     .Select__indicators {
//         color: ${({ theme }) => theme.grey};
//     }

//     .Select__dropdown-indicator {
//         color: ${({ theme }) => theme.grey};
//     }

//     .Select__dropdown-indicator:hover {
//         color: ${({ theme }) => theme.grey};
//     }

//     .Select__menu {
//         margin: 0;
//     }
//     .Select__menu-list {
//         padding: 0;
//     }

//     .Select__control--menu-is-open {
//         border-radius: 16px 16px 0 0;
//     }

//     .Select__control--is-focused {
//         box-shadow: 0 0 0 1px black;
//         outline: none;
//     }

//     .Select__indicator-separator {
//         display: none;
//     }

//     .Select__menu {
//         color: ${({ theme }) => theme.white};
//     }

//     .Select__option {
//         background: ${({ theme }) => theme.darkGrey};
//     }
//     .Select__option:hover {
//         background: ${({ theme }) => theme.grey};
//     }
// `;