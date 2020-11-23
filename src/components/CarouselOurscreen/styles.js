import styled, { css } from 'styled-components'
import { Background, WrapperThumb } from '../ThumbOurscreen/styles'
import arrow from '../../assets/img/arrow.svg'

export const Wrapper = styled.div`
  display:flex;
  transition: transform 200ms;

  & > ${Background}{
    margin-right:20rem;
  }

  ${({ moveRight }) =>
    moveRight &&
    css`
    transform: translateX(calc(var(--thumb-width) * ${moveRight} * -1));
  `
  }
`;

export const Right = styled.button`
  position:absolute;
  height:calc(100% - var(--space-top-bottom) * 2);
  width:50rem;
  background-color:var(--color-old-silver);
  right:0;
  opacity:0;
  border: none;
  transition:opacity 200ms linear, transform 200ms linear;
  cursor:pointer;

  &::after {
    content: url(${arrow});
    display:inline-block;
    opacity:1;
    transform:rotate(-90deg);
  }

  &:hover::after {
    transform: scale(1.2) rotate(-90deg) ;
  }

  &:active::after {
    transition:transform 100ms linear;
    transform:rotate(-90deg) scale(1.2) translateY(4rem);
  }
`;

export const CarouselStyle = styled.div`
  --thumb-width:400px;
  --space-top-bottom:20rem;
  position:relative;
  display:flex;
  align-items:center;
  align-self:flex-start;
  box-sizing:border-box;
  width:100%;
  padding:var(--space-top-bottom) 30rem;
  overflow: hidden;

  & ${WrapperThumb}{
    width:var(--thumb-width);
  }

  &:hover > ${Right}{
    opacity:0.8;
  }

  & > ${Right}{
    opacity:0.9;
    transform-origin: right center;
  }
`;
