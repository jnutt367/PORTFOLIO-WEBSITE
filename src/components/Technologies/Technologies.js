import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
  <SectionDivider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>I have worked and collaborated on projects using a variety of great technologies in the world of web development, from Front-end to Back-end  all the way to Design</SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem" />    
      <ListContainer>
        <ListTitle> Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML5 CSS3 and javascript<br />
            React.js and Next.js
          </ListParagraph>
       
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size="3rem" />    
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js MongoDB <br />and Serverless functions
          </ListParagraph>
        
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiZend size="3rem" />    
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Tools such as Figma, Adobe Illustrator and Affinity Design.
          </ListParagraph>
        
      </ListContainer>
    </ListItem>
  </List>
 </Section>
);

export default Technologies;
