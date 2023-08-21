import "/src/assets/fonts/General-Sans/css/general-sans.css";

import { styled } from "styled-components";

const SearchBarDateInput = styled.input.attrs({
    type: 'date'
    })`
    width: 150px;
    padding: 5px;
    border-radius: 10px;
    text-align: center;
    font-family: "GeneralSans-Variable";
    border: 1px solid rgba(0,0,0,0.3);
    box-shadow:0 0 15px 4px rgba(0,0,0,0.08);
    color: rgba(0,0,0,0.6);
    &::-webkit-clear-button {
        display: none;
    }
`;

export default SearchBarDateInput