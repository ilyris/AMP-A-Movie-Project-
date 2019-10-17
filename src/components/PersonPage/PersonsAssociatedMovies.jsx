import React from 'react';
import S from 'styled-components';

import PersonsMovies from './PersonsMovies';

const PersonsAssociatedMovies = ({movies}) => {
    return(
        <MainContentWrapper>
                {movies.map( movies =>{
                    return(
                        <PersonsMovies
                            id={movies.id}
                            title={movies.title}
                            overview={movies.overview}
                            poster_path={movies.poster_path}
                            release_date={movies.release_date}
                            movies={movies}
                        />
                    );
                })}
        </MainContentWrapper>
    );
}


const MainContentWrapper = S.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`;



export default PersonsAssociatedMovies;