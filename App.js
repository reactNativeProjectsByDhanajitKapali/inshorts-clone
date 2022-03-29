import { StyleSheet, Text, View, StatusBar } from "react-native";
import InshortsTabs from "./components/InshortsTabs";

export default function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282C35" }}>
      <InshortsTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
