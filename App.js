import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import Context from "./API/Context";
import InshortsTabs from "./components/InshortsTabs";

function App() {
  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: "#282C35" }}>
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
