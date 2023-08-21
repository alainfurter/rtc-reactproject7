import { useState, useEffect } from 'react'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import { get_nasa_apod_api_object, get_nasa_mars_api_object } from './API/NASA_API_Fetch'

function App() {
  const [api_object, setApi_object] = useState(null);

  const actualDate = new Date(Date.now()).toISOString().slice(0, 10);
  const [maxdate, setMaxDate] = useState(actualDate);
  const [date, setDate] = useState(actualDate);

  const apiResponseCallback = (api_response_object) => {
    setApi_object(api_response_object);
}

  const searchBarUpdateCallback = (api, date) => {
    if (api === 'APOD') {
      get_nasa_apod_api_object(date, apiResponseCallback);
  } else {
      get_nasa_mars_api_object(date, apiResponseCallback);
  }
    setApi_object(api_object);
  };

  useEffect(() => {
      get_nasa_apod_api_object(date, apiResponseCallback);
  }, []);

  return (
    <>
      <Header />
      <Main searchUpdateCallback={searchBarUpdateCallback} date={date} setDate={setDate} maxDate={maxdate} apiObject={api_object} />
      <Footer />
    </>
  )
}

export default App
