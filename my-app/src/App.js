import React from 'react';
import './App.css';
import Button1 from './Button/Button1'
import { ThemeProvider } from '@material-ui/core/styles';
import Grid1 from '../src/Grid/Grid'
import Container from '@material-ui/core/Container';
import theme from './theme';
import GridListImag from './GridList/GridListImag'
//Now i want change its style attribute  and add class....
function App() {
  return (

    // The material UI grid system is actually use the CSS Flex-box module for its flexibility
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="xs" disableGutters fixed>
          <Button1 />
          <Grid1 />
          <GridListImag />
        </Container>
      </ThemeProvider>
    </div>

  );
}

export default App;
