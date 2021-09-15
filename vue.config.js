module.exports = {
  devServer: {
    port: 3131,
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/app.scss";
        `
      }
    }
  }
};
