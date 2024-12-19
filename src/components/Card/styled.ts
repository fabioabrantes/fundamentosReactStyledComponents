import styled from 'styled-components';

type Props = {
  variantComponent: string;
}

export const Container = styled.div<Props>` 
  width:90%;

  background-color:${props => props.variantComponent === 'secundary' ?
    props.theme.COLORS.blue
    :
    props.theme.COLORS.green500
  };
color:${props => props.theme.COLORS.white};
border-radius: 10px;
margin-bottom: 20px;
border:2px solid ${props => props.variantComponent === 'secundary' && props.theme.COLORS.pink};

display: flex;
align-items: center;
justify-content: space-between;
padding: 24px;
`;
export const NameUser = styled.strong`
  font-size: 18px;
`;

export const Time = styled.span`
font-weight: 400;
font-size: ${props => props.theme.fontsSize.sm};
`;
