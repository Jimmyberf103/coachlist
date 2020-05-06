import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";

/* JS */
import { store } from "./redux/Store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container} />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
