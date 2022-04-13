import styled from 'styled-components';

export const Img = styled.img `
  width:100%;
  height:100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 5px 5px 10px rgba(100, 000, 000, 0.5);
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section `
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}


export const BlogCard = styled.div `
  border-radius: 6px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 15px;
  box-shadow: 5px 5px 10px rgba(100, 000, 000, 0.8);
  background: inherit;
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div `
  text-align: center;
  color: white;
  text-shadow: none;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3 `
  font-weight: 500;
  letter-spacing: 2px;
  color: white;
  text-shadow: none;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr `
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: black;
`;

export const Intro = styled.div `
  width: 170px;
  margin: 0 auto;
  color: silver;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p `
  width: 100%;
  padding: 0 50px;
  color: white;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul `
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a `
  border: none;
  color: #FFF;
  padding: 8px;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  font-size: 0.6rem;
  background: ${({ alt }) => alt ? black;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: ${({ alt }) => alt ? '10px' : '12px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) => disabled ? 'inset black;
  &:hover {
    background: ${({ alt }) => alt ? black;
  cursor: pointer;
  font-family: Impact;
  border-radius: 5px;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 10px black;
  }

  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, rgba(100, 000, 000, 1) 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px pink, inset 0px 0px 4px rgba(000, 100, 000, 0.7);
  }
`

export const LinkContainer = styled.div `
  margin-left: ${({ large }) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 18px;

  &:hover {
    background-color: rgba(000, 000, 000, 0.7);
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => large ? '16px' : '8px'};

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => large ? '0' : '8px'};
  }

`;

export const TagList = styled.ul `
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li `
color: black;
text-decoration: none;
font-size: 1.5rem;
`
