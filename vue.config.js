const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  publicPath:'/todolist/',
  css: {
    loaderOptions: {
      less: {
        // vant 自定义主题样式
        modifyVars: {

        },
      },
    },
  },
  chainWebpack: config => {
    config.resolve.alias
        .set("@store", resolve("src/store"))
        .set("@unitl", resolve("src/unitl"))
  },
}
