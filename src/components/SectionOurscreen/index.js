import React from 'react'
import styled from 'styled-components'
import DescriptionOurscreen from '../DescriptionOurscreen';
import TagOurscreen from '../TagOurscreen';


const SectionOurscreen = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:0 30rem 50rem;

 
  & > ${TagOurscreen}{
    margin-bottom:40rem;
  }

  & > ${TagOurscreen}:not(:first-child) {
    margin-left:30rem;
    align-self:flex-start;
  }

  & > ${DescriptionOurscreen}{
    max-width:820px;
    margin: 0 auto 40rem;
  }

`;

export default SectionOurscreen;