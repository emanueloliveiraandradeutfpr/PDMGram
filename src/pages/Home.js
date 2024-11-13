import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Header from "../components/Header";
import Post from "../components/Post";
import Storyes from "../components/Storyes";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView>
        <Storyes />
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lightgray",
  },
});
