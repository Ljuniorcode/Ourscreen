import styled from 'styled-components';

const ButtonOurscreen = styled.button`
  padding: 12rem 30rem;
  background-color:var(--color-black-dark);
  color:var(--color-gray-light);
  border:2px solid var(--color-primary-medium);
  text-decoration:none;
  font-size: 18rem;
  cursor:pointer;
  transition:background-color 100ms linear, transform 200ms linear;

  &:hover {
    background-color:var(--color-primary-medium);
    transform:scale(1.1);
    border-radius:5px;
  }
  &:active {
    transition:background-color 100ms linear, transform 100ms linear;
    transform:scale(0.95);
  }
`
export default ButtonOurscreen;

