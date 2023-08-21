import MainContainer from './MainContainer'
import AppContainer from './AppContainer'
import SearchBar from './SearchBar/SearchBar'
import ImageViewer from './ImageViewer/ImageViewer'


const Main = ({searchUpdateCallback, date, setDate, maxDate, apiObject}) => {
  return (
    <MainContainer>
        <AppContainer>
          <SearchBar searchUpdateCallback={searchUpdateCallback} date={date} setDate={setDate} maxDate={maxDate} />
          <ImageViewer apiObject={apiObject} />
        </AppContainer>
    </MainContainer>
  )
}

export default Main;


