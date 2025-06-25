import {useState} from 'react'
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import axios from 'axios'


function App() {

  const [state, setState] = useState({
      movieName: "",
      results: [],
      selected: {}
  });

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const apiurl = `http://www.omdbapi.com/?apikey=${API_KEY}`

  // Function to handle search when the button is clicked
  // TODO: or when the Enter key is pressed
  const handleSearch = () => {
    console.log("Searching for:", state.movieName)

    axios(apiurl + "&s=" + state.movieName)
    .then(({ data }) => {
      let results = data.Search
      console.log("Search results:", results)
      setState(prevState => {
        return { ...prevState, results: results }
      })
    })
  }

// Function to open a popup with movie details
  const openPopup = id => {
    axios(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`).then(({ data }) => {
      let result = data;
      console.log("Popup result:", result)
      setState(prevState => {   
        return { ...prevState, selected: result }
      })
  
    })
  }

// Function to close the popup
const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} , movieName: "" }
    })
  }

  // Function to handle input changes
  // and update the movieName in state
  const handleInput = (e) => {
    let movieName = e.target.value
    console.log(movieName)
    setState(prevState => {
      return { ...prevState, movieName: movieName }
    })

  }
  // console.log('App openPopup typeof:', typeof openPopup)

  return ( 
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput = { handleInput } handleSearch = { handleSearch }movieName = {state.movieName}/>
        <Results 
          results={state.results} 
          openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? 
          <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  )
}

export default App