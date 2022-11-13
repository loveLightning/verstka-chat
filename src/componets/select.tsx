import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { device } from '../utils/constants';
import { sideBarItem } from './types';

interface Props {
    setTopicTitle: (topicTitle: string) => void
    topicTitle: string
}

export const SelectComponent: React.FC<Props> = ({ setTopicTitle, topicTitle }) => {
    const getValue = () => {
        return topicTitle ? sideBarItem.find(c => c.value === topicTitle) : ''
    }

    const onChange = (newValue: any) => {
        setTopicTitle(newValue.value)
    }

    return (
        <Wrapper>
            <StyledSelect
                isSearchable={false}
                value={getValue()}
                options={sideBarItem}
                onChange={onChange}
                classNamePrefix={'Select'}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: none;
    @media ${device.tablet} {
        display: block;
        margin-bottom: 20px;
    }
`
const StyledSelect = styled(Select)`
    .Select__control {
        height: 55px;
        width: 100%;
        border-radius: 16px;
        cursor: pointer;
        background: ${({ theme }) => theme.darkGrey};
        text-align: center;
        outline: none;
        box-shadow: none;
        border: none;
    }
    .Select__single-value {
        color: ${({ theme }) => theme.white};
    }

    .Select__value-container {
        padding: 0;
    }
    .Select__control:hover {
        outline: none;
        border: none;
    }
    .Select__menu-list::-webkit-scrollbar {
        width: 4px;
        height: 0px;
    }
    .Select__menu-list::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.grey};
    }
    .Select__menu-list::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.white};
    }
    .Select__menu-list::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .Select__indicators {
        color: ${({ theme }) => theme.grey};
    }

    .Select__dropdown-indicator {
        color: ${({ theme }) => theme.grey};
    }

    .Select__dropdown-indicator:hover {
        color: ${({ theme }) => theme.grey};
    }

    .Select__menu {
        margin: 0;
    }
    .Select__menu-list {
        padding: 0;
    }

    .Select__control--menu-is-open {
        border-radius: 16px 16px 0 0;
    }

    .Select__control--is-focused {
        box-shadow: 0 0 0 1px black;
        outline: none;
    }

    .Select__indicator-separator {
        display: none;
    }

    .Select__menu {
        color: ${({ theme }) => theme.white};
    }

    .Select__option {
        background: ${({ theme }) => theme.darkGrey};
    }
    .Select__option:hover {
        background: ${({ theme }) => theme.grey};
    }
`;