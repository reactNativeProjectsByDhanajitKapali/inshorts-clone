import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { NewsContext } from "../API/Context";

const TopNavigation = ({ index, setIndex }) => {
  const { fetchNews, darkTheme, setDarkTheme } = useContext(NewsContext);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#282c35" : "white",
      }}
    >
      {/* Left icon and Text in the TopNavigation Bar */}
      {index === 0 ? (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setDarkTheme(!darkTheme)}
        >
          <Text
            style={{ ...styles.text, color: darkTheme ? "lightgrey" : "black" }}
          >
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              color="#007fff"
            ></MaterialCommunityIcons>
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index == 0 ? 1 : 0)}
        >
          <SimpleLineIcons
            name="arrow-left"
            size={15}
            color="#007fff"
          ></SimpleLineIcons>
          <Text
            style={{ ...styles.text, color: darkTheme ? "lightgrey" : "black" }}
          >
            Discover
          </Text>
        </TouchableOpacity>
      )}

      {/* Middle text in the TopNavigation Bar */}
      <Text style={{ ...styles.center, color: darkTheme ? "white" : "black" }}>
        {index ? "All News" : "Discover"}
      </Text>

      {/* Right Icon and Text in the TopNavigation Bar */}
      {index ? (
        <TouchableOpacity
          style={styles.right}
          onPress={() => fetchNews("general")}
        >
          <Text style={styles.text}>
            <AntDesign name="reload1" size={24} color="#007fff"></AntDesign>
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          <Text
            style={{ ...styles.text, color: darkTheme ? "white" : "black" }}
          >
            All News
          </Text>
          <SimpleLineIcons
            name="arrow-right"
            size={15}
            color="#007fff"
          ></SimpleLineIcons>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  right: {
    width: 80,
    alignItems: "flex-end",
  },
  center: {
    paddingBottom: 5,
    borderBottomColor: "#007fff",
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "700",
  },
});

export default TopNavigation;
