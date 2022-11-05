import React from 'react'
import styled from 'styled-components'
import { Container } from '../componets/styles'
import profileAvatar from '../assets/images/profile-avatar.png'
import { device } from '../utils/constants'

export const StrangerProfileScreen = () => {
    return (
        <Container>
            <Wrapper>
                <div>
                    <img src={profileAvatar} alt='Profile-avatar' />
                </div>
                <WrapperData>
                    <PersonalData>Андрей Колесник</PersonalData>
                    <PersonalData>andkolesik117@yandex.ru</PersonalData>
                    <PersonalData activeColor={'true'}>t.me/kajetsa1</PersonalData>
                </WrapperData>
            </Wrapper>
        </Container>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    @media ${device.laptop} {
        flex-direction: column;
        align-items: center;
    }
`

const WrapperData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-left: 100px;
    @media ${device.laptop} {
        margin-left: 0;
        margin-top: 40px;
    }
`

const PersonalData = styled.p<{activeColor?: string}>`
    font-size: 48px;
    line-height: 96.3%;
    color: ${({theme}) => theme.white};
    color: ${({theme, activeColor}) => activeColor ? '#4FC631' : theme.white};
    @media ${device.tablet} {
        font-size: 30px;
    }
    @media ${device.tabletS} {
        font-size: 25px;
    }
`