import React, { useContext, useState } from "react";
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { NewsContext } from "../API/Context";
import SingleNews from "./SingleNews";
import { Entypo } from "@expo/vector-icons";

const Search = () => {
  const {
    darkTheme,
    news: { articles },
  } = useContext(NewsContext);

  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNews, setCurrentNews] = useState();

  const handleSearch = (text) => {
    if (!text) {
      setSearchResults([]);
      return;
    }
    setSearchResults(articles.filter((query) => query.title.includes(text)));
  };

  const handleModal = (n) => {
    setModalVisible(true);
    setCurrentNews(n);
  };

  return (
    <View style={{ width: "100%", position: "relative" }}>
      <TextInput
        style={{
          ...styles.search,
          backgroundColor: darkTheme ? "black" : "lightgrey",
          color: darkTheme ? "white" : "black",
        }}
        onChangeText={(text) => handleSearch(text)}
        placeholder="Search for news"
        placeholderTextColor={darkTheme ? "white" : "grey"}
      />
      <View style={styles.searchResults}>
        {searchResults.slice(0, 10).map((n) => (
          <TouchableOpacity
            style={{ borderRadius: 10 }}
            key={n.title}
            activeOpacity={0.7}
            onPress={() => handleModal(n)}
          >
            <Text
              style={{
                ...styles.singleResult,
                backgroundColor: darkTheme ? "black" : "white",
                color: darkTheme ? "white" : "black",
              }}
            >
              {n.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            position: "absolute",
            zIndex: 2,
            right: 0,
            marginTop: 30,
            marginRight: 10,
          }}
        >
          {darkTheme ? (
            <Entypo name="circle-with-cross" size={35} color="white" />
          ) : (
            <Entypo name="circle-with-cross" size={35} color="black" />
          )}
        </TouchableOpacity>
        <View
          style={{
            height: "100%",
            transform: [{ scaleY: -1 }],
            marginTop: -20,
          }}
        >
          <SingleNews item={currentNews} darkTheme={darkTheme} />
        </View>
      </Modal>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 15,
  },
  searchResults: {
    borderRadius: 10,
    position: "relative",
    zIndex: 1,
    top: 0,
  },
  singleResult: {
    borderRadius: 10,
    padding: 10,
    margin: 0.5,
    shadowColor: "black",
    elevation: 5,
  },
});
