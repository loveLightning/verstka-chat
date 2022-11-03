import styled from "styled-components";
import { device } from '../utils/constants';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    @media ${device.desktopL} {
        max-width: 1200px;
    }

    @media ${device.desktop} {
        max-width: 1200px;
    }

    @media ${device.laptopL} {
        max-width: 1050px;
    }

    @media ${device.laptopM} {
        max-width: 950px;
    }

    @media ${device.laptop} {
        max-width: 700px;
    }

    @media ${device.tablet} {
        width: 100%;
        padding: 0px 30px;
    }

    @media ${device.tabletS} {
        width: 100%;
        padding: 0px 15px;
    }

    @media ${device.mobileL} {

    }

    @media ${device.mobileS} {
        
    }



 


 


` 
