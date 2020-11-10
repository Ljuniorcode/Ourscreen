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
  opacity:0;
`;

export const WrapperThumb = styled.figure`
  --space: 10rem;
  --border: 4rem;
  --move-border: calc(var(--border)* -1);
  --move-space: calc(var(--space)* -1);

  position: relative;
  border: var(--border) solid var(--color-frontend);
  width: 640px;
  overflow: hidden;
  cursor:pointer;
  transition:transform 100ms linear;
  
  &::before  {
    content:'';
    position:absolute;
    top:0;
    right:var(--border);
    height:var(--space);
    width:var(--space);
    background-color:red;
  }

  &:hover {

    transform: translate(var(--move),var(--move));

    & > ${Avatar}{
      transform:translateX(0);
      opacity:1;
      transition: transform 100ms 150ms linear, opacity 300ms 100ms linear;
    }
  }


`;

export const Background = styled.div`
  background-color:var(--color-frontend);


`;
