import styled from 'styled-components';
import LogoOurscreen from '../LogoOurscreen';

const FooterOurscreen = styled.footer`
  display:flex;
  flex-direction:column;
  align-items:center;

  background-color:var(--color-black-dark);
  color:var(--color-gray-light);
  font-size:16rem;
  padding:20rem 0;

  border:4px solid var(--color-primary-medium)

  & > ${LogoOurscreen}{
    margin-bottom:20px;
  }
  
`

export default FooterOurscreen;