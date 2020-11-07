import styled from 'styled-components';
import container from '../../tools/container';
import TagOurscreen from '../TagOurscreen';
import TitleOurscreen from '../TitleOurscreen';

export const Text = styled.div`
  padding-top:15rem;
  max-width:45%;

  ${TagOurscreen}{
   margin-bottom:40rem;
  }

  ${TitleOurscreen}{
   margin-bottom:20rem;
  }
`;

export const BannerOurscreen = styled.section`
  ${container}
  display:flex;
  justify-content:space-between;
  align-items:center;
  max-height:70vh;
  height:100vh;
`;


