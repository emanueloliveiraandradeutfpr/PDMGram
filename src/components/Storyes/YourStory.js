import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function YourStory() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.profileImg}
          source={require("../../../assets/images/profile.jpg")}
        />
      </View>
      <View style={styles.ImgWrapper}>
        <Text style={styles.text}>Seu Story</Text>
        <Image
          style={styles.profileAdd}
          source={require("../../../assets/images/plus.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 8,
  },
  text: {
    fontSize: 12,
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
  },

  ImgWrapper: {
    position: "relative",
  },
  profileImg: {
    borderRadius: 50,
    width: 48,
    height: 48,
  },
  profileAdd: {
    width: 20,
    height: 20,
    position: "absolute",
    right: 0,
    bottom: 12,
  },
});
