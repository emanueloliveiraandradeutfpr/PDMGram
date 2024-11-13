import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function PostFooter(props) {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.action}
          source={require("../../../assets/images/ic_heart.png")}
        />
        <Image
          style={styles.action}
          source={require("../../../assets/images/ic_comment.png")}
        />
        <Image
          style={styles.action}
          source={require("../../../assets/images/ic_send.png")}
        />

        <View style={{ flexGrow: 1 }} />

        <Image
          style={styles.action}
          source={require("../../../assets/images/ic_save.png")}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text>
          Curtido por
          <Text style={styles.textBold}> vv, gm_opala</Text> e{" "}
          <Text style={styles.textBold}>outras pessoas.</Text>
        </Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text>
          <Text style={styles.textBold}>fusca </Text>
          <Text style={styles.textLink}>#AirCooledSQN </Text>
          <Text>
            Pra quem pediu, está aí o besouro repousnado no fim de tarde...
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 1,
    backgroundColor: "white",
  },
  descriptionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 8,
    marginBottom: 8,
  },
  textBold: {
    fontWeight: "bold",
  },
  textLink: {
    color: "#0000FF",
  },

  //actions could be groped to avoid the empty View with flexGrow

  action: {
    margin: 8,
  },
});
