import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center style={{  marginLeft: "20px", color: "white", fontWeight: "900", paddingRight: "20px"}}>
        Hi I'm Jason!<br />
        Welcome To<br />
        My Dev Portfolio
      </SectionTitle>
      <SectionText style={{ marginLeft: "20px", paddingLeft: "10px", paddingRight: "20px", color: "white" }}>
       I utilize a wide variety of best practices in order to provide a wide array of sustainable solutions for cross browser consistency, scalability and reliability.
       This site has just a few of my projects that show a taste of the different technologies I have used to build, publish and deploy.
      </SectionText>
 <SectionText style={{  marginLeft: "20px", paddingLeft: "10px" }}>
      * I also have 15+ years in the workforce, in an industry that is soley based on the satisfaction of the customer!
   </SectionText>
        <Button onClick={() => window.location = 'mailto:jnutt367@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;
