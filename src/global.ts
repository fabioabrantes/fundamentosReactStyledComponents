import { createGlobalStyle } from "styled-components";

export const GlobalEstilos = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

body{
    background: ${(props) => props.theme.COLORS.gray100};
    color: ${(props) => props.theme.COLORS.black};
  --webkit-font-smoothing: antialiased;
  }

body,input,textarea,select {
 font-family: "Roboto", sans-serif;
 font-size: 1rem;
 font-weight:400;
}
`;