import React,{useState, useEffect} from "react";
import Movie from "../Movies/Movie";

import "./DiscoverPage.css";

const DiscoverPage = () => {
    const [discoverMovies, setDiscoverMovies] = useState([]);
    const [discoverVoteAverage, setDiscoverVoteAverage] = useState('');
    const [discoverSortBy, setDiscoverSortBy] = useState('popularity');
    const [discoverGenre, setDiscoverGenre] = useState('');
    const [discoverCast, setDiscoverCast] = useState('');
    const [discoverYear, setDiscoverYear] = useState('');
    const [pageNumber, setPageNumber] = useState(1);

    const api_Key = process.env.REACT_APP_API_KEY;
    const baseURL = 'https://api.themoviedb.org/3/';

    const handlePagination = pageTransitionValue => {
        console.log(`${pageNumber} is `);
        if( pageNumber === 1 && pageTransitionValue === "-") {
            console.log("I ran. first condition");
            setPageNumber(1);
        } else if(pageTransitionValue === "+") {
            console.log("I ran. second condition");
           setPageNumber(pageNumber + 1);
        } else if(pageTransitionValue === "-") {
            console.log("I ran. third condition");
           setPageNumber(pageNumber - 1);
        }
        console.log(pageNumber);
    }

     const fetchDiscoverMovies = async () => {
         const getResponse = await fetch(`${baseURL}discover/movie?api_key=${api_Key}&language=en-US&sort_by=${discoverSortBy}&include_adult=false&year=${discoverYear}&vote_average.gte=${discoverVoteAverage}&with_cast=${discoverCast}&with_genres=${discoverGenre}&page=${pageNumber}`);
         const data = await getResponse.json();
         setDiscoverMovies(data.results);
     }

     const handleSortBy = event => setDiscoverSortBy(event.target.value);
     const handleVoteAverage = event => setDiscoverVoteAverage(event.target.value);
     const handleGenre = event => setDiscoverGenre(event.target.value);
     const handleCast = event => setDiscoverCast(event.target.value);
     const handleYear = event => setDiscoverYear(event.target.value);

     const handleDiscoverSearch = event =>  {
         fetchDiscoverMovies();
        event.preventDefault();
     }

     


    return(
        <div>
        <div className="discoverContentContainer">
            <h1 className="discoverPageTitle">Discover more movies from The Movie DataBase!</h1>
            <form className="discoverForm" method="GET" action="/">
                <select className="discoverSortBy" onChange={handleSortBy}>
                    <option value="popularity.asc">Popularity Asc</option>
                    <option value="popularity.desc">Popularity Desc</option>
                    <option value="release_date.asc">Release Date Asc</option>
                    <option value="release_date.desc">Release Date Desc</option>
                    <option value="revenue.asc">Revune Asc</option>
                    <option value="revenue.desc">Revune Desc</option>
                </select>
                <input className="discoverVoteAverage" placeholder="rating" name="vote_average" onChange={handleVoteAverage} />
                <input className="discoverGenre" placeholder="genre" name="movie_genre" onChange={handleGenre} />
                <input className="discoverCast" placeholder="actor/actress" name="movie_cast" onChange={handleCast} />
                <input className="discoverYear" placeholder="year" name="movie_year" onChange={handleYear} />
            </form>
            <div className="discoverSearchButtonContainer">
                <button className="discoverSubmit" onClick={handleDiscoverSearch}>Discover</button>
            </div>
        </div>
        <div className="movieWrapper">
            {discoverMovies.map(movies => {
                return(
                    <Movie
                        key={movies.id}
                        image={`https://image.tmdb.org/t/p/w185${movies.poster_path}`}
                        title={movies.title}
                        movies={movies}
                    />
                )
            })}
        </div>
        <div className="paginationButtonContainer" onClick={fetchDiscoverMovies}>
            <button className="paginationButton prev" onClick={ () => handlePagination("-")}>Prev</button>
            <button className="paginationButton next" onClick={() => handlePagination("+")}>Next</button>
        </div>
        </div>
    );
}
export default DiscoverPage