import styled from 'styled-components';
import LogoOurscreen from '../LogoOurscreen';

const FooterOurscreen = styled.footer`
  display:flex;
  flex-direction:column;
  align-items:center;

  font-size:16rem;
  background-color:var(--color-black-dark);
  color:var(--color-gray-light);
  padding: 20rem 0;
  border-top:4px solid var(--color-primary-medium);
  

  & > ${LogoOurscreen}{
    margin-bottom:15px;
  }
  
`

export default FooterOurscreen;