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
`;

export const WrapperThumb = styled.figure`
  --space: 10rem;
  position: relative;
  border: 4rem solid var(--color-frontend);
  width: 640px;
  overflow: hidden;
  cursor:pointer;

  &:hover {
    --move: calc(var(--space) * -1);
        transform:scale(1.02);

    & > ${Avatar}{
        transform:translateX(0);
        opacity:1;
        transition: transform 100ms 150ms linear, opacity 300ms 100ms linear;
    }
  }
`;
