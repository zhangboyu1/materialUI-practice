import React from 'react';
import './App.css';
import SubApp from './Button/SubApp'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PaperPractice from './Paper/Paper'
const theme = createMuiTheme({
  // overrides: {
  //   // Style sheet name ⚛️
  //   MuiButton: {
  //     // Name of the rule
  //     text: {
  //       // Some CSS
  //       borderRadius: 3,
  //       border: 0,
  //       color: 'white',
  //       height: 48,
  //       padding: '0 30px',
  //       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  //     },
  //   },
  // },
});


//Now i want change its style attribute  and add class....
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SubApp />
        <PaperPractice />
      </ThemeProvider>
    </div>
  );
}

export default App;
