import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../utils/constants'
import { sideBarItem } from './types'

interface Props {
    selectItem: (id: number, el: string) => void
    isActive: number
    activeCategories: boolean
}

export const SideBar: React.FC<Props> = ({ selectItem, isActive, activeCategories }) => {
    return (
        <Wrapper activeCategories={activeCategories}>
            {sideBarItem?.map((el, id) => (
                <Link key={el.id} to='/'>
                    <WrapperItem onClick={() => selectItem(id, el.title)} isActive={isActive === id}>
                        <Item>
                            {el.title}
                        </Item>
                    </WrapperItem>
                </Link>
            ))}
        </Wrapper>
    )
}

interface Styled {
    isActive: boolean
}

interface StyledWrapper {
    activeCategories: boolean
}

const Wrapper = styled.div<StyledWrapper>`

    @media ${device.mobileS} {
        display: ${({ activeCategories }) => activeCategories ? 'block' : 'none'};
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        background: ${({theme}) => theme.darkGrey};
        z-index: 1;
        top: -40px;
        border-radius: 10px;
        overflow-y: auto;
        max-height: 400px;
    }

    @media ${device.laptop} {
        display: block;
        position: static;
        transform: translateX(0);
        width: auto;
        background-color: transparent;
        overflow-y: hidden;
        max-height: 800px;
        overflow-x: hidden;
    }

`

const WrapperItem = styled.div<Styled>`
    transition: 0.4s ease all;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    :hover {
        background-color: ${({ theme }) => theme.darkGrey};
    }
    color: ${({ isActive, theme }) => isActive ? theme.white : theme.grey};
`

const Item = styled.span`
    font-weight: 600;
    font-size: 25px;
    line-height: 36px;
    margin-bottom: 12px;
`