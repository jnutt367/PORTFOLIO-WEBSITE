import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center style={{  marginLeft: "20px"}}>
        Hi, I'm Jason<br />
        Welcome To <br />
        My Creative Web Portfolio
      </SectionTitle>
      <SectionText style={{  marginLeft: "20px", paddingLeft: "10px" }}>
       This site is to showcase my ability to build React applications that utilize the Next.js framework and styled components for sustainable cross browser consistency, scalability and reliability.
      </SectionText>
        <Button onClick={() => window.location = 'mailto:jnutt367@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;