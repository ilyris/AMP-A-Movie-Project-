import React from 'react';
import {Link} from 'react-router-dom';
import S from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

const Footer = () => {
    return(
        <FooterRegion>
            <FooterContainer>
            <FooterMenuContainer>
                <FooterLogo>AMP</FooterLogo>
                <ListItems><FooterLinks to="/">Home</FooterLinks></ListItems>
                <ListItems><FooterLinks to="/movies">Movies</FooterLinks></ListItems>
                <ListItems><FooterLinks to="/discover">Discover</FooterLinks></ListItems>
                <ListItems><FooterLinks to="/people">People</FooterLinks></ListItems>
            </FooterMenuContainer>
            <IconLinks href="https://github.com/ilyris/AMP-A-Movie-Project-"><FontAwesomeIcon icon={['fab', 'github']}/></IconLinks>
            
            <CopyRightContainer><CopyRightLink href="https://dylansieren.com">Design By: dylansieren.com</CopyRightLink></CopyRightContainer>
            </FooterContainer>
        </FooterRegion>
    );
}

export default Footer;


const FooterRegion = S.div`
    background-color: rgb(26, 26, 26);
`;
const IconLinks = S.a`
    color: #fff;
    font-size: 3rem;
    text-decoration: none;
`;

const FooterContainer = S.div`
    width: 80%;
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    padding: 20px 0;
    justify-content: space-between;

    @media (max-width: 860px) {
        margin-bottom: 55px;
      }
`;
const FooterLogo = S.h3`
    font-size: 3rem;
    color: #fff;
    padding-left: 12px;
`;
const FooterMenuContainer = S.ul`
    width: 30%;
`;

const ListItems = S.li`
    list-style: none;
    width: 100%;
    padding: 5px 10px;
`;

const FooterLinks = S(Link)`
    color: #fff;
    font-size: 1.4rem;
    text-decoration: none;
`;
const CopyRightContainer = S.div`
    width: 100%;
    padding-top: 40px;
    text-align: right;
`;
const CopyRightLink = S.a`
    color: #fff;
    font-size: 1rem;
    text-decoration: none;
`;