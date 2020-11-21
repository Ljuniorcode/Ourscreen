import React from 'react'
import styled from 'styled-components'
import container from '../../styles/tools/container';
import DescriptionOurscreen from '../DescriptionOurscreen';
import TagOurscreen from '../TagOurscreen';


const SectionOurscreen = styled.section`
  padding-top:20rem;
  padding-bottom:20rem;
  ${container};
  text-align:center;
 
  & > ${TagOurscreen}{
    margin-bottom:40rem;
  }

  & > ${DescriptionOurscreen}{
    max-width:820px;
    margin: 0 auto 40rem;
  }

`;

export default SectionOurscreen;