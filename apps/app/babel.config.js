module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    "@babel/preset-typescript",
  ],
  plugins: [
    "react-native-reanimated/plugin",
    ["@babel/plugin-transform-flow-strip-types", { loose: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    "@babel/plugin-proposal-export-namespace-from",
    ["module:react-native-dotenv", { path: "../../.env", moduleName: "@env" }],
    ["@babel/plugin-proposal-decorators", { version: "legacy" }],
  ],
};
