import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./tailwind.output.css";

import StyledForm from "./styles/StyledForm";

function App() {
  return (
    <StyledForm>
      <form>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </StyledForm>
  );
}

export default App;
