const Search = ({ handleInput, handleSearch, movieName}) => {

  return (
    <section className="search-container">
        <input 
            type="text" 
            className="search-input" 
            placeholder="Search for a movie..." 
            value={movieName}
            onChange={ handleInput }
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleSearch()
                }
            }}
        />
        <button 
            className="search-button" 
            onClick={ handleSearch }>Search
        </button>
    </section>
  )
}

export default Search