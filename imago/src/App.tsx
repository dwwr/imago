import React from "react";
import "./App.css";

function App() {
  React.useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  );
}

export default App;
