const { createGlobPatternsForDependencies } = require("@nrwl/react/tailwind");
const { join } = require("path");

module.exports = {
  content: [
    join(
      __dirname,
      "{src,pages,components,layout}/**/*!(*.stories|*.spec).{ts,tsx,html}"
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF8C32",
        secondary: " #2B3159",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
