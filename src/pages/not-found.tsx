import React from 'react'
import styled from 'styled-components'

export const NotFound = () => {
    return (
        <Wrapper>
            <Title>
                Страница не найдена
            </Title>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
`

const Title = styled.h2`
    text-align: center;
    color: ${({ theme }) => theme.white};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`