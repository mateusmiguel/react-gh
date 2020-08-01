import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
// import dark from "./styles/themes/dark";
import GlobalStyle from "./styles/global";
import Navigation from "./components/Navigation";
import Error from "./components/Error";
import Home from "./pages/Home";
import About from "./pages/About";

export const Container = styled.div`
  padding: 30px;
`;

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <BrowserRouter>
        <GlobalStyle />
        <Navigation />
        <Container>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route component={Error} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
