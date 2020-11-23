import styled from 'styled-components'
import { Background, WrapperThumb } from '../ThumbOurscreen/styles';

export const Right = styled.button`
  position:absolute;
  height:calc(100% - var(--space-top-bottom) * 2);
  width:50rem;
  background-color:red;
  right:0;
  opacity:0;
`;

export const CarouselStyle = styled.div`
  --space-top-bottom:20rem;
  position:relative;
  display:flex;
  align-self:center;
  box-sizing:0;
  width:100%;
  padding:var(--space-top-bottom) 30rem;
  overflow: hidden;

  & > ${Background}{
    margin-right:20rem;
  }

  & ${WrapperThumb}{
    width:400px;
  }

  &:hover > ${Right}{
    opacity:1;
  }
`;
