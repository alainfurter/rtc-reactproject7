import { styled } from "styled-components";

const SearchBarContainer = styled.div`
    padding: 40px 0px 40px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    /* align-items: center; */
    width: 30%;
    min-width: 180px;
    max-width: 200px;
    @media (max-width: 600px) {
        width: 100%;
        max-width: 100%;
        padding: 40px 0px 40px 0px;
        align-items: center;
    }
`;

export default SearchBarContainer;
