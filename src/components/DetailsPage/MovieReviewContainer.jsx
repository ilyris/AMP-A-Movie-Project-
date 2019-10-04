import React from 'react';
import S from 'styled-components';
import MovieReview from './MovieReview';



const MovieReviewContainer = ({reviews}) => {
    return(
        <ReviewContainer>
            {reviews.map( reviews => {
                return(
                    <MovieReview 
                    author={reviews.author}
                    content={reviews.content}
                    reviewLink={reviews.url}
                />
                );
            })}
        </ReviewContainer>
    );
}

export default MovieReviewContainer;

const ReviewContainer = S.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    width: 100%;
    margin: 20px 0;
`;