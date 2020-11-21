import styled, { css } from 'styled-components';

const TagOurscreen = styled.h2`
  display: inline-block;
  font-size:55rem;
  letter-spacing:2px;
  background-color: var(--color-gramado);
  padding: 20rem 18rem;
  color: var(--color-gray-light);

  ${({ small }) =>
    small && css`
    font-size:25rem;
    padding: 10rem 8rem;
  `};
`;

export default TagOurscreen; 