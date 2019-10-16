import React from 'react';
import S from 'styled-components';


const Person = ( {castMember}) => {
    const {birthday, deathday, imdb_id, profile_path, biography, name} = castMember;
    const profileImagePath = `https://image.tmdb.org/t/p/w185${profile_path}`;

    return(
        <React.Fragment>
                <PersonName>{name}</PersonName>
            <PersonContainer>

                <PersonProfileImage src={profileImagePath}></PersonProfileImage>
                <PersonInformation><StyledSpan>Birthday:</StyledSpan> {birthday}</PersonInformation>
                <PersonInformation><StyledSpan>Date of Death:</StyledSpan> {deathday === null ? "Still Kickin'" : deathday}</PersonInformation>
                <IMDBLink href={`https://www.imdb.com/name/${imdb_id}`} target="_blank">IMDB profile</IMDBLink>
            </PersonContainer>
            <BiographyContainer>
                <PersonInformation><StyledSpan>Biography: </StyledSpan>{biography}</PersonInformation>
            </BiographyContainer>
        </React.Fragment>

    );
}

export default Person;

const PersonName = S.h2`
    width: 100%;
    font-size: 6rem;
    margin-bottom: 50px;
`;
const PersonContainer = S.div`
    display: flex;
    flex-direction: column;

`;

const PersonProfileImage = S.img`
    width: 250px;
    height: auto;
    border-radius: 10px;
`;
const PersonInformation = S.p`
    font-size: 2.4rem;
    color: #000;
    letter-spacing: 1px;
    line-height: 38px;
`;
const StyledSpan = S.span`
    color: rgb(0, 143, 238);
    font-size: 2.4rem;
    padding-right: 5px;
`;
const IMDBLink = S.a`
    font-size: 2.4rem;
    letter-spacing: 1px;
    width: 200px;
    padding: 15px 10px;
    border-radius: 10px;
    background-color: rgb(0, 143, 238);
    color: #fff;
    margin-top: 10px;
    text-align: center;
    :hover {
        color: #fff;
        background-color: #000;
    }
`;

const BiographyContainer = S.div`
    width: 65%;
    @media  screen and (max-width: 1250px) {
        width: 100%;
        margin-top: 20px;
    }
`;


