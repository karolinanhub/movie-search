const Result = ({ result, openPopup }) => {
    // console.log("Result typeof openPopup:", typeof openPopup) 
    // console.log("Result result:", result.imdbID)
	return (
		<div 
            className="result" 
            onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} alt='Poster' />
			<h3>{result.Title}</h3>
		</div>
	)
}

export default Result