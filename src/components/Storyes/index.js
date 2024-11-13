import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import YourStory from "./YourStory";
import Story from "./Story";

export default function Storyes() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        style={styles.storiesContainer}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <YourStory />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
  },
  storiesContainer: {},
});
