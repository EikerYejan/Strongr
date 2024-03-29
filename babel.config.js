/* eslint-disable */

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@strongr": "./src"
          }
        }
      ],
      "react-native-reanimated/plugin"
    ]
  }
}
