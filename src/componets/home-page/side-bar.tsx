import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../utils/constants'
import { sideBarItem } from '../types'

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
    display: block;

    @media ${device.tablet} {
    display: ${({ activeCategories }) => activeCategories ? 'block' : 'none'};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    background: ${({theme}) => theme.light_black};
    z-index: 1;
    top: -40px;
    border-radius: 10px;
    overflow-y: auto;
    max-height: 400px;

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: ${({theme}) => theme.grey};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.darkGrey};
        border-radius: 10px;
    }
    }
`

const WrapperItem = styled.div<Styled>`
    transition: 0.4s ease all;
    border-radius: 10px;
    padding: 3px 10px 3px 10px;
    :hover {
        background-color: ${({ theme }) => theme.darkGrey};
    }
    color: ${({ isActive, theme }) => isActive ? theme.white : theme.grey};
`

const Item = styled.p`
    font-weight: 600;
    font-size: 25px;
    line-height: 36px;
`