module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
},
module.rules = {
    test: /\.less$/,
    loader: "style-loader!css-loader!less-loader",
  }
