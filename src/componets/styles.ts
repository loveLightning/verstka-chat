import styled from "styled-components";
import { device } from '../utils/constants';

export const Container = styled.div`
    margin: 0 auto;

    @media ${device.mobileS} {
        max-width: 320px;
    }

    @media ${device.mobileM} {
        max-width: 350px;
    }

    @media ${device.mobileL} {
        max-width: 380px;
    }

    @media ${device.tablet} {
        max-width: 600px;
    }

    @media ${device.laptop} {
        max-width: 800px;
    }

    @media ${device.laptopL} { 
        max-width: 900px;
    }

    @media ${device.desktopL} {
        max-width: 1200px;
    }
` 
