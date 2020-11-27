import styled, { css } from 'styled-components'
import { Background, WrapperThumb } from '../ThumbOurscreen/styles'
import arrow from '../../assets/img/arrow.svg'

const thumbWidth = 400;
const spaceRight = 20;
const spaceRightLeft = 30;

function moveCarousel(move, moveLastRight) {
  const oneStep = (thumbWidth + spaceRight) * move
  const lastStep = (moveLastRight + spaceRightLeft) * -1
  if (oneStep !== 0 && oneStep < lastStep) {
    return lastStep
  }
  return oneStep
}

function leftShow(move) {
  return move < 0
}

function rightShow(move, moveLastRight) {
  const oneStep = (thumbWidth + spaceRight) * move
  const lastStep = (moveLastRight + spaceRightLeft) * -1
  return true;
}


export const Wrapper = styled.div`
  --space-right:${spaceRight}rem;
  display:flex;
  transition: transform 200ms;

  & > ${Background}{
    margin-right:var(--space-right);
  }

  
`;

const Arrow = css`
  position:absolute;
  height:calc(100% - var(--space-top-bottom) * 2);
  width:50rem;
  background-color:var(--color-old-silver);
  opacity:0;
  border: none;
  transition:opacity 200ms linear, transform 200ms linear;
  z-index: 1;
  cursor:pointer;

  &::after {
    content: url(${arrow});
    display:inline-block;
    opacity:1;
  }
`;

export const Right = styled.button`
  ${Arrow};
  right:0;

  &::after {
    transform:rotate(-90deg);
  }

  &:hover::after {
    transform: scale(1.2) rotate(-90deg) ;
  }

  &:active::after {
    transform:rotate(-90deg) scale(1.2) translateY(4rem);
  }
`;

export const Left = styled.button`
  ${Arrow};  
  left:0;

  &::after {
    transform:rotate(90deg);
  }

  &:hover::after {
    transform: scale(1.2) rotate(90deg) ;
  }

  &:active::after {
    transform:rotate(90deg) scale(1.2) translateY(4rem);
  }
`;

export const CarouselStyle = styled.div`
  --space-top-bottom: 20rem;
  --space-right-left: ${spaceRightLeft}rem;
  --thumb-width: ${thumbWidth}px;
  position:relative;
  display:flex;
  align-items:center;
  align-self:flex-start;
  box-sizing:border-box;
  width:100%;
  padding:var(--space-top-bottom) var(--space-rith-left);
  overflow: hidden;

  & ${WrapperThumb}{
    width:var(--thumb-width);
    box-sizing:border-box;
  }

  &:hover > ${Right} {    
    display:block;
    opacity:0.8; 
  }
  
  
  &:hover > ${Left}{
    ${({ move }) =>
    leftShow(move)
      ? css`
      display:block;
      opacity:0.8;
    
    `: css`
      display:none;
      opacity:0;
    `
  }
  }

  & > ${Right}:hover {
    opacity:0.9;
    transform-origin: right center;
  }

  ${({ move, moveLastRight }) =>
    css` & > ${Wrapper} {
    transform: translateX(${moveCarousel(move, moveLastRight)}px);
    }
  `}
`;
