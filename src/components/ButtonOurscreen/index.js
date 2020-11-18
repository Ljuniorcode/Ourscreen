import styled from 'styled-components';

const ButtonOurscreen = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;

  position:relative;
  padding: 12rem 30rem;
  background-color:var(--color-black-dark);
  color:var(--color-gray-light);
  border:2px solid var(--color-primary-medium);
  font-size: 18rem;
  cursor:pointer;
  text-decoration:none;
  overflow:hidden;

  &::before{
    content:'';
    position:absolute;
    opacity:1;
    width:100%;
    height:100%;
    background-color:var(--color-primary-medium);
    transform: translateX(150%) scaleX(1.5) skew(-30deg);
    transition: transform 200ms linear;
  }

  &::after{
    content: "${({ children }) => children}";
    position: absolute;
  }

  &:hover::before {  
    transform:translateX(-120%) scaleX(1.5) skew(-30deg);
  }

  &:active::after {
    transform:scale(2);
  }
`
export default ButtonOurscreen;

