module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "~": "../../",
            "@": "./src/",
          },
        },
      ],
      // IMPORTANT: Reanimated needs to be last
      "react-native-reanimated/plugin",
    ],
  };
};
