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
        display: none;
    }
`

const WrapperItem = styled.div<Styled>`
    transition: 0.4s ease all;
    border-radius: 10px;
    padding-bottom: 10px;
    color: ${({ isActive, theme }) => isActive ? theme.white : theme.grey};
`

const Item = styled.p`
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    transition: 0.1s ease all;
    :hover {
        color: ${({theme}) => theme.white};
    }

    @media ${device.laptop} {
        font-size: 25px
    }
`