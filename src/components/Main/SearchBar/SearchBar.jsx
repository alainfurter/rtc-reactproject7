import { get_nasa_apod_api_object, get_nasa_mars_api_object } from "../../../API/NASA_API_Fetch";

import SearchBarContainer from "./SearchBarContainer";
import SearchBarTitle from "./SearchBarTitle";
import SearchBarText from "./SearchBarText";

import SearchBarAPIContainer from "./SearchBarAPIContainer";
import SearchBarAPILabel from "./SearchBarAPILabel";
import SearchBarAPISelector from "./SearchBarAPISelector";

import SearchBarDateContainer from "./SearchBarDateContainer";
import SearchBarDateLabel from "./SearchBarDateLabel";
import SearchBarDateInput from "./SearchBarDateInput";

const SearchBar = ({searchUpdateCallback, date, setDate, maxDate}) => {
    
    const handleAPIChange = (event) => {
        const selectedDate = document.querySelector('#date_selection');
        searchUpdateCallback(event.target.value, selectedDate.value)
    }

    const handleDateChange = (event) => {
        const selectedAPI = document.querySelector('#api_selection');
        if (event.target.value === '') {
            event.target.value = maxDate;
            setDate(event.target.value);
            searchUpdateCallback(selectedAPI.value, event.target.value)
        } else {
            if (event.target.value > maxDate) {
                console.log('Date in the future')
            } else {
                setDate(event.target.value);
                searchUpdateCallback(selectedAPI.value, event.target.value)
            }
        }
    }

    return (
        <SearchBarContainer>
            <SearchBarTitle>Choose API and date:</SearchBarTitle>
            <SearchBarAPIContainer>
                <SearchBarAPILabel htmlFor="api_selection">Select API:</SearchBarAPILabel>
                <SearchBarAPISelector id="api_selection" name="api_selection" onChange={handleAPIChange}>
                    <option value="APOD">APOD</option>
                    <option value="Mars Rover">Mars Rover</option>
                </SearchBarAPISelector>
            </SearchBarAPIContainer>
            <SearchBarDateContainer>
                <SearchBarDateLabel htmlFor="date_selection">Select a date:</SearchBarDateLabel>
                <SearchBarDateInput 
                    type="date" 
                    id="date_selection" 
                    name="date_selection" 
                    value = {date}
                    max={maxDate}  
                    onChange={handleDateChange}
                    required 
                />
            </SearchBarDateContainer>
            {/* {(selectedAPI!=='APOD') && (<SearchBarText>There are very few dates that have images for mars rover, f.e. 03rd of June 2015.</SearchBarText>)} */}
        </SearchBarContainer> 
    );
};

export default SearchBar;