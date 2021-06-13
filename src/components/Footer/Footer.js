import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:407-687-7889">407-687-7889</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jnutt367@gmail.com">jnutt367@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Iterating through one simple solution for one complex problem at a time!</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/jnutt367">
    <AiFillGithub size="3rem" />
  </SocialIcons>
  <SocialIcons href="https://www.linkedin.com/in/jnuttlovedisciple/">
    <AiFillLinkedin size="3rem" />
  </SocialIcons>
  <SocialIcons href="">
    <AiFillTwitterCircle size="3rem" />
  </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
