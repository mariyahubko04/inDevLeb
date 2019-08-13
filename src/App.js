import React from 'react';

import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {

  render() {
    return (
      <>
        <header id="header">
          <img src="image/logo.png" alt="logo" />
        </header>
        <main>
          <Header />
          <Main />
        </main>
      </>
    )
  }
}

export default App;
