module.exports = function (api) {
  api.cache(true);
  return {
    // presets: ["babel-preset-expo"],
    // plugins: [
    //   ..."react-native-reanimated/plugin", // This line.
    // ],
    presets: ["module:metro-react-native-babel-preset"],
    plugins: ["react-native-reanimated/plugin"],
  };
};
