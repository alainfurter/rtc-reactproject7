import { styled } from "styled-components";

const ImageViewerContainer = styled.div`
    padding: 40px 40px 40px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-align: center;
    width: 70%;

    @media (max-width: 600px) {
        padding: 40px;
    }
    @media (max-width: 600px) {
        width: 100%;
    }
`;

export default ImageViewerContainer;