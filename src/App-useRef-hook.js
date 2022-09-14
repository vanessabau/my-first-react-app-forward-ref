import React, { useEffect, useRef } from "react";
import "./App.scss";

function App() {
  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  function keyPressHandle(e) {
    if (e.keyCode === 13) {
      if (e.target.id === "nameInput") {
        ageRef.current.focus();
      }
      if (e.target.id === "ageInput") {
        marriedRef.current.focus();
      }
      if (e.target.id === "marriedInput") {
        submitRef.current.focus();
      }
    }
  }

  function onClickHandle() {
    alert("Submitted");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>UseRefs Hook</h3>
        <div className="form-field">
          <span>Name</span>
          <input
            ref={nameRef}
            id="nameInput"
            type="text"
            onKeyDown={keyPressHandle}
          ></input>
        </div>
        <div className="form-field">
          <span>Age</span>
          <input
            ref={ageRef}
            id="ageInput"
            type="text"
            onKeyDown={keyPressHandle}
          ></input>
        </div>
        <div className="form-field">
          <span>Married?</span>
          <input
            ref={marriedRef}
            id="marriedInput"
            type="checkbox"
            onKeyDown={keyPressHandle}
          ></input>
        </div>
        <button
          ref={submitRef}
          onClick={onClickHandle}
          id="submitButton"
          onKeyDown={keyPressHandle}
        >
          Submit
        </button>
      </header>
    </div>
  );
}

export default App;
