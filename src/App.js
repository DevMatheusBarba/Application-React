import React from 'react';
import Login from './pages/login';
import GlobalStyles from './styles/globalStyles';
import Header from './components/header';

function App() {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Login />
    </>
  );
}

export default App;
