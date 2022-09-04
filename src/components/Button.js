import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
text-size: 1.4rem;
background: transparent;
color: var(--mainWhite);
&:hover{
    background: var(--lightBlue);
    color: var(--mainBlue);
}
`;