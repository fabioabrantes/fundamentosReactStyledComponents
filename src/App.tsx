import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalEstilos } from "./global";
import {defaultTheme} from './styles/theme';
function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalEstilos />
      <Home />
    </ThemeProvider>
  )
}

export default App;
