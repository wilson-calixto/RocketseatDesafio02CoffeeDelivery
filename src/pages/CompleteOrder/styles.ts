import styled from 'styled-components';

export const CompleteOrderContainer = styled.form`
width: 100%;
display: flex;
margin-top: 2.5rem;
justify-content: space-between;
gap: 2rem;
`;

export const SectionBaseStyle = styled.div`
width: 100%;
background: ${props => props.theme.colors['base-card']};
border-radius: 6px;
padding: 2.5rem;
`;	
