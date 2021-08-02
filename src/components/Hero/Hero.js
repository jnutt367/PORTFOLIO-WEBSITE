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
       I utilize a wide variety of best practices in order to provide a wide array of sustainable solutions for cross browser consistency, scalability and reliability.
       This site has just a few of my projects that show a taste of the different technologies I have used to build, publish and deploy.
      </SectionText>
        <Button onClick={() => window.location = 'mailto:jnutt367@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;
