const path = require("path");

module.exports = {
    devServer: {
        proxy : '3.34.72.229'
    },
    indexPath: '../../templates/vue/index.html',
    publicPath: '/vue',
    outputDir: path.resolve(__dirname, "../backend/surveasy/src/main/resources/static/vue")
}