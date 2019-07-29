import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Movie = ({ title, moviesArray, image }, props) => {
  console.log(1234);
  return (
    <LinkToMoviePage to={{ pathname: `/movie/${moviesArray.title}`,
    state: {moviesArray}}}>
        <ContentContainer>
        <Image src={image} />
        <TitleHeading>{title}</TitleHeading>
      </ContentContainer>
    </LinkToMoviePage>
  );
};

const TitleHeading = styled.h2`
  font-size: 1.4rem;
  letter-spacing: 1px;
  color: #fff;
  padding: 10px 0;
  text-transform: capitalize;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const LinkToMoviePage = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 300px;
  padding: 20px;
  width: 25%;
`;

export default Movie;