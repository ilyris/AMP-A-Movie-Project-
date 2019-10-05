import React from 'react';

const YouTubeMovieTrailers = ({trailerKey}) => {
    return(
        <React.Fragment>
            {/* eslint-disable-next-line */}
            <iframe height="315" src={`https://www.youtube.com/embed/${trailerKey}`} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </React.Fragment>
    );
}
export default YouTubeMovieTrailers;