import "/src/assets/fonts/General-Sans/css/general-sans.css";

import { styled } from "styled-components";

const HeaderTitle = styled.h1`
    position: absolute;
    top: 0;
    left: 0;
    color: rgb(250,250,250);
    font-family: "GeneralSans-Variable";
    font-size: 22px;
    text-align: center;
    height: 80px;
    width: 100%;
    padding-top: 25px;
    @media (max-width: 820px) {
        margin-left: 50px;
    }
    @media (max-width: 820px) {
        margin-left: 70px;
    }
    @media (max-width: 580px) {
        margin-left: 90px;
    }
    @media (max-width: 580px) {
        visibility: hidden;
    }
`;

export default HeaderTitle;