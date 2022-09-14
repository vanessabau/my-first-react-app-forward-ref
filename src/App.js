import React, { useRef, useEffect } from "react";
import "./App.scss";
import Input from "./components/input";

const inputStyle = {
  width: "400px",
  height: "40px",
  fontSize: "30px",
  marginBottom: "10px"
};

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  function firstNameKeyDown(e) {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  }

  function lastNameKeyDown() {}

  return (
    <div className="App">
      <header className="App-header">
        <Input
          onKeyDown={firstNameKeyDown}
          ref={firstNameRef}
          placeholder="type first name here "
          style={inputStyle}
        />
        <Input
          onKeyDown={lastNameKeyDown}
          ref={lastNameRef}
          placeholder="type last name here "
          style={inputStyle}
        />
      </header>
    </div>
  );
}

export default App;
