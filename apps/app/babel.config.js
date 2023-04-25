module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-proposal-export-namespace-from", // This line.
    ["module:react-native-dotenv", { path: "../../.env", moduleName: "@env" }],
    ["@babel/plugin-proposal-decorators", { version: "legacy" }],
    "@babel/plugin-proposal-class-properties",
    "react-native-reanimated/plugin",
  ],
};
