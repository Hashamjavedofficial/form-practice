import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core";

import { theme } from "./shared/theme";
import SignUpForm from "./components/form/page/sign-up-form";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <h1>This is form app</h1>
        <SignUpForm />
      </ThemeProvider>
    );
  }
}
export default App;
