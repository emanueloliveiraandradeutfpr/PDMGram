import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/ic_camera.png")} />
      <Image
        source={require("../../../assets/images/pdmgram.png")} />
      <Image
        source={require("../../../assets/images/ic_send.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: 'white',
  },
});