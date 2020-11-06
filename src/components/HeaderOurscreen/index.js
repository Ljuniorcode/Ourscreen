import styled from 'styled-components';
import ButtonOurscreen from '../ButtonOurscreen/index.js'
import LogoOurscreen from '../LogoOurscreen'
import container from '../../tools/container'

export const HeaderOurscreen = styled.header`
  background-color:var(--color-black-dark);
  border-bottom: 4px solid var(--color-primary-medium);
  padding: 20px 0;
 


  @media(max-width:800px){
    padding: 15rem 16rem;

  
  }
`
export const Wrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  ${container};

  @media(max-width:800px){
    justify-content:center;    
    & > ${LogoOurscreen}{
        height: 35px;      
      }
  
    & > ${ButtonOurscreen}{
       background-color:var(--color-primary-medium);
       border-radius:0;
       border:0;
       position: fixed;
       bottom:0;
       left:0;
       right:0;
      width:100vw;
    }
  }

`;

