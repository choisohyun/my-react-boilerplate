import React from 'react';
import Main from './main/Main';

const App = () => {
  return (
    <>
      <div>Hello React!</div>
      <h1>{process.env.TEST}</h1>
      <Main />
    </>
  );
};

export default App;
