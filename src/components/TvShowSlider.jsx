import React from "react";
import "../App.css";
import TopRatedTvShow from "./TopRatedTvShow";


const TvShowSlider = ({ topRatedTvShows }) => {

  return (
    <div style={TvShowSlideContainer}>
      <div style={TvShowContainer}>
          {topRatedTvShows.map(topRatedTvShows => {
            return (
              <TopRatedTvShow
                key={topRatedTvShows.id}
                image={`https://image.tmdb.org/t/p/w185${topRatedTvShows.poster_path}`}
                title={topRatedTvShows.title}
                topRatedTvShows={topRatedTvShows}
              />
            );
          })}
      </div>
    </div>
  );
};
export default TvShowSlider;

const TvShowSlideContainer = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  overflowX: "scroll"
};
const TvShowContainer = {
  display: "flex",
  overflow: "hidden",
  height: "400px",
  flexDirection: "row"
};
