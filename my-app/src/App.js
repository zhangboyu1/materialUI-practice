import React from 'react';
import './App.css';
import Button1 from './Button/Button1'
import { ThemeProvider } from '@material-ui/core/styles';
import Grid1 from '../src/Grid/Grid'
import theme from './theme';

//Now i want change its style attribute  and add class....
function App() {
  return (

    <div className="App">
      <ThemeProvider theme={theme}>
        <Button1 />
        <Grid1 />
      </ThemeProvider>
    </div>

  );
}

export default App;
