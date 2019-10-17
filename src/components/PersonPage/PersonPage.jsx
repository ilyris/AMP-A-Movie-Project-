import React,{useState, useEffect} from 'react';
import S from 'styled-components';
import {apiKey} from "../../config";
import axios from 'axios';

import Person from './Person';
import PersonsAssociatedMovies from './PersonsAssociatedMovies';



const PersonPage = (props) => {
    // Deconstruct data from the cast object to make the appropriate API calls.
    const {id, name} = props.location.state.cast;
    
    //Store API call data in state.
    const [castMember, setCastMember] = useState([]);
    const [castMemberMovies, setCastMemberMovies] = useState([]);


    useEffect( () => {
        const getCastMemberInformation = async () => {
            let castMemberResponse = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`);
            let castMemberData = castMemberResponse.data;
            setCastMember(castMemberData);
        };
        const getCastMemberMovies = async () => {
            let castMemberMoviesResponse = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${name}`);
            let castMemberMoviesData = castMemberMoviesResponse.data;
            setCastMemberMovies(castMemberMoviesData.results[0].known_for);
        };
        getCastMemberInformation();
        getCastMemberMovies();
    }, []);

    return(
       <PersonPageMainWrapper>
        <HeroSection>
            <Person castMember={castMember}/>
            <PersonsAssociatedMovies movies={castMemberMovies}/>
        </HeroSection>
       </PersonPageMainWrapper>
    );
}

export default PersonPage;


const PersonPageMainWrapper = S.section`
    width: 100%;
`;

const HeroSection = S.div`
    display: flex;
    flex-flow: row wrap;
    width: 80%;
    margin: 0 auto;
    padding: 50px 0 100px 0;
    justify-content: space-between;
`;