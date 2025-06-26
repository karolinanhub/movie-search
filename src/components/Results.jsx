import Result from './Result'

const Results = ({ results, openPopup }) => {
    //console.log('Results openPopup typeof:', typeof openPopup)
    if (!results || results.length === 0) {
        console.log('No results found')
        return <div className="no-results"></div>
    }
    
    // Remove duplicate results based on imdbID
    const uniqueResults = Array.from(
        new Map(results.map(item => [item.imdbID, item])).values()
    )

    return (
        <section className="results">
            {uniqueResults.map(result => (
                <Result 
                    key={result.imdbID} 
                    result={result} 
                    openPopup={openPopup} 
                />
            ))}
        </section>
    )
}

export default Results