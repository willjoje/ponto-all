import React from "react";
import Navigator from "./routes/homeStack";
import * as Font from "expo-font";

let customFonts = {
  Montserrat: require("./assets/fonts/Montserrat.ttf"),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return <Navigator />;
  }
}
