import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { sideBarItem } from './types'

interface Props {
    selectQuestions: (id: number, el: string) => void
}

export const SideBar: React.FC<Props> = ({ selectQuestions }) => {

    const [isActive, setIsActive] = useState<boolean>(false)

    const selectItem = (id: number, elId: number) => {
        setIsActive(id === elId)
    }

    return (
        <div>
            {sideBarItem?.map((el, id) => (
                <Link key={el.id} to='/'>
                    <WrapperItem>
                        <Item onClick={() => selectItem(id, el.id)} isActive={isActive}>
                            {el.title}
                        </Item>
                    </WrapperItem>
                </Link>
            ))}
        </div>
    )
}

interface IIsActive {
    isActive: boolean
}

const WrapperItem = styled.div`
    
`

const Item = styled.span<IIsActive>`
    font-weight: 600;
    font-size: 25px;
    line-height: 36px;
    margin-bottom: 12px;
`