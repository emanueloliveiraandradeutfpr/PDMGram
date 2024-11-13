import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import PostHeader from './PostHeader.js';
import PostFooter from './PostFooter.js';

export default function Post(props) {
  return (
    <View style={styles.container}>
      <PostHeader />
      
      <Image 
        source={require("../../../assets/images/photo1.jpg")} />

      <PostFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 4,
    backgroundColor: 'white',
  },
});