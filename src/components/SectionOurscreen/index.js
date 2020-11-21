import React from 'react'
import styled from 'styled-components'
import container from '../../styles/tools/container';
import DescriptionOurscreen from '../DescriptionOurscreen';
import TagOurscreen from '../TagOurscreen';


const SectionOurscreen = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top:20rem;
  padding-bottom:20rem;
  ${container};
 
  & > ${TagOurscreen}{
    margin-bottom:40rem;
  }

  & > ${TagOurscreen}:not(:first-child) {
    align-self:flex-start;
  }

  & > ${DescriptionOurscreen}{
    max-width:820px;
    margin: 0 auto 40rem;
  }

`;

export default SectionOurscreen;