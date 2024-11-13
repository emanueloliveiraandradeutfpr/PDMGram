import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Story(props) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <LinearGradient
          colors={["#CA1D7E", "#E35157", "#F2703F"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.linearGradient}
        >
          <Image
            source={require("../../../assets/images/profile1.png")}
            style={styles.profileImg}
          />
        </LinearGradient>
      </View>
      <Text style={styles.text}>Fusca</Text>
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
  linearGradient: {
    height: 51,
    width: 51,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  profileImg: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  text: {
    fontSize: 12,
  },
});
