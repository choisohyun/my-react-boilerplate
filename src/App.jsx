import React from "react";

const App = () => {
  return (
    <>
      <div>Hello React!</div>
      <h1>{process.env.TEST}</h1>
    </>
  );
};

export default App;
