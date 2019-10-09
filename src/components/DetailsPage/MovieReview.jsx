import React from 'react';
import S from 'styled-components';

const MovieReview = ({author, content, reviewLink}) => {

    return(
        <ReviewCard>
            <AuthorsName>Written By: {author}</AuthorsName>
            <ParagraphContent>{content.length > 600 ? content.substr(0,600) + "..." : content }</ParagraphContent>
            <ReviewLinkContainer>
                <ReviewLink href={reviewLink}>See full review</ReviewLink>
            </ReviewLinkContainer>
        </ReviewCard>
    );
}

export default MovieReview;

const ReviewCard = S.div`
    background-color: #fff;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0px 2px 10px -2px;
    border-left: 10px solid #000;
    width: 100%;
`;

const ParagraphContent = S.p`
    color: #000;
    font-size: 1.6rem;
    letter-spacing: 1px;
    line-height: 32px;
    word-break: break-word;
`;

const AuthorsName = S.h6`
    font-size: 1.4rem;
    color: #000;
    padding-bottom: 20px;
`;
const ReviewLinkContainer = S.div`
    padding-top: 20px;
`;
const ReviewLink = S.a`
    color: blue;
    font-size: 1rem;
    box-sizing: border-box;
`;