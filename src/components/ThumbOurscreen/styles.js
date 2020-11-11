import styled from 'styled-components';

export const Avatar = styled.img`
  position:absolute;
  top: var(--space);
  left:var(--space);
  width:50rem;
  height:50rem;
  border-radius:50%;
  border:2rem solid var(--color-gramado);
  transform: translateX(calc((100% + var(--space)) * -1));
  opacity:0;
  transition: transform 200ms linear, opacity 100ms linear;
`;

export const Thumb = styled.img`
  width:100%;
  //opacity:0;
`;

export const WrapperThumb = styled.figure`
  position: relative;
  //border: var(--border) solid var(--color-gramado);
  width: 640px;
  overflow: hidden;
  cursor:pointer;
  transition:transform 100ms linear;
`;

export const Background = styled.div`
  --space: 10rem;
  --border:3rem;
  --move-space: calc(var(--space) * -1);
  
  position:relative;
  background-color:var(--color-gray);

  &::before,
  &::after {
    content:' ';
    font-size:20rem;
    position:absolute;
    
    width: calc(var(--space) * 1.4);
    height: calc(var(--space) * 1.4);
    background-color:var(--color-gray);
    transition:transform 100ms linear;
  }

  &::before{
    right:0;
    top:0;
    transform: rotate(45deg) scale(0);
    transform-origin:right top;

  }

  &::after{
    left:0;
    bottom:0;
    transform-origin:left bottom;
    z-index:-1;
    transform:rotate(-45deg) scale(0);
  }

  &:hover {
    &::before{
      transform:rotate(45deg) scale(1);
    }

    &::after{
      transform:rotate(-45deg) scale(1);
    }
  
    & > ${WrapperThumb}{
        transform: translate(var(--move-space),var(--move-space));

      
        & > ${Avatar}{
          transform:translateX(0);
          opacity:1;
          transition: transform 100ms 150ms linear, opacity 300ms 100ms linear;
        } 
    }
  }
`
