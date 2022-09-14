import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
text-size: 1.4rem;
text-color: black;
background: transparent;
color: var(--mainBlue);
border-radius: 15%;
&:hover{
    background: var(--lightBlue);
    color: var(--mainBlue);
}
`;

export const ButtonContainer2 = styled.button`
text-transform: capitalize;
text-size: 1.4rem;
text-color: black;
background: transparent;
color: var(--mainWhite);
&:hover{
    background: var(--lightBlue);
    color: var(--mainBlue);
}
`;