import React, { useContext } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import Context, { NewsContext } from "./API/Context";
import InshortsTabs from "./components/InshortsTabs";

function App() {
  const { darkTheme } = useContext(NewsContext);

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#282C35" : "white",
      }}
    >
      <InshortsTabs />
    </SafeAreaView>
  );
}

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    marginBottom: -40,
  },
});
