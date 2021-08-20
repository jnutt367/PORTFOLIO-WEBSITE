import styled from 'styled-components';

export const Img = styled.img `
  width:100%;
  height:100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 15px 15px 20px rgba(30, 130, 76, 0.5);
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

`
export const BlogCard = styled.div `
  border-radius: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 15px 15px 20px rgba(255, 0, 0, 0.7;
  background: inherit;
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div `
  text-align: center;
  color: silver;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3 `
  font-weight: 500;
  letter-spacing: 2px;
  color: silver;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr `
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
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
  color: silver;
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
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  font-size: 1.6rem;
  background: ${({ alt }) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, aqua 0%, black 100%)'};
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};
  &:hover {
    background: ${({ alt }) => alt ? 'linear-gradient(270deg, black 0%, black 100%)' : 'linear-gradient(270deg, black 0%, aqua 100%)'};
  cursor: pointer;
  border: 2px solid white;
  font-family: cursive;
  border-radius: 15px;
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
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
`

export const LinkContainer = styled.div `
  margin-left: ${({ large }) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 18px;

  &:hover {
    background-color: #212d45;
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
color: #d8bfbf;
text-decoration: none;
font-size: 1.5rem;
`
