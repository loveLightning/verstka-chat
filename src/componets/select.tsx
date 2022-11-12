import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { device } from '../utils/constants';
import { sideBarItem } from './types';

export const SelectComponent = () => {
    const [selectedOption, setSelectedOption] = useState<string>('Все');
    const getValue = () => {
        return selectedOption ? sideBarItem.find(c => c.value === selectedOption) : 's'
    }

    const onChange = (newValue: any) => {
        setSelectedOption(newValue)
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
        border: ${({theme}) => theme.darkGrey} 1px solid ;
        border-radius: 16px;
        cursor: pointer;
        background: ${({theme}) => theme.darkGrey};
        color: ${({theme}) => theme.white} !important;
        text-align: center;
    }
    .Select__menu-list::-webkit-scrollbar {
        width: 4px;
        height: 0px;
    }
    .Select__menu-list::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    .Select__menu-list::-webkit-scrollbar-thumb {
        background: #888;
    }
    .Select__menu-list::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .Select__control:hover {
        border-color: ${({theme}) => theme.darkGrey};
    }

    .Select__control--is-focused {
        box-shadow: 0 0 0 1px black;
        outline: none;
    }

    .Select__indicator-separator {
        display: none;
    }

    .Select__menu {
        color: ${({theme}) => theme.white};
    }

    .Select__option {
        background: ${({theme}) => theme.darkGrey};
    }

`;