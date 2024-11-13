import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.profileImg}
          source={require("../../../assets/images/profile1.png")}
        />
        <View>
          <Text style={styles.profileName}>fusca</Text>
          <Text style={styles.profilePlace}>Guarapuava</Text>
        </View>
      </View>

      <Text style={styles.dots}>...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 8,
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileImg: {
    borderRadius: 50,
    width: 48,
    height: 48,
  },

  profileName: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8,
  },
  profilePlace: {
    fontWeight: "normal",
    fontSize: 12,
    marginLeft: 8,
    color: "gray",
  },

  dots: {
    fontSize: 24,
  },
});
