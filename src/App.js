import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import Header from './components/header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyles />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
