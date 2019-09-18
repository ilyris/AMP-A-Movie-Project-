import React from "react";
import Movie from "../Movies/Movie";

import "./DiscoverPage.css";

const DiscoverPage = () => {
    return(
        <div className="discoverContentContainer">
            <h1 className="discoverPageTitle">Discover more movies from The Movie DataBase!</h1>
            <form className="discoverForm" method="GET" action="/">
                <select className="discoverSortBy">
                    <option value="popularity.asc">Popularity Asc</option>
                    <option value="popularity.desc">Popularity Desc</option>
                    <option value="release_date.asc">Release Date Asc</option>
                    <option value="release_date.desc">Release Date Desc</option>
                    <option value="revenue.asc">Revune Asc</option>
                    <option value="revenue.desc">Revune Desc</option>
                </select>
                <input className="discoverVoteAverage" placeholder="rating" name="vote_average"/>
                <input className="discoverGenre" placeholder="genre" name="movie_genre"/>
                <input className="discoverCast" placeholder="actor/actress" name="movie_cast"/>
                <input className="discoverYear" placeholder="year" name="movie_year"/>
            </form>
            <div className="discoverSearchButtonContainer">
                <button className="discoverSubmit">Discover</button>
            </div>
        </div>
    );
}
export default DiscoverPage