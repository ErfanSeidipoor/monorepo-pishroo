module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    "@babel/preset-typescript",
  ],
  plugins: [
    "react-native-reanimated/plugin",
    ["@babel/plugin-proposal-decorators", { version: "legacy", loose: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ["@babel/plugin-proposal-export-namespace-from", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-transform-flow-strip-types", { loose: true }],
    ["module:react-native-dotenv", { path: "../../.env", moduleName: "@env" }],
  ],
};
