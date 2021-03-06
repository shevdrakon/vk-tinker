module.exports = {
  babelrc: false,
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "8.14.0"
        }
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
};
