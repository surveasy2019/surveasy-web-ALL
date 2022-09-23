const path = require("path");

module.exports = {
    devServer: {
        proxy : 'http://localhost:8081'
    },
    indexPath: '../../templates/vue/index.html',
    publicPath: '/vue',
    outputDir: path.resolve(__dirname, "../backend/surveasy/src/main/resources/static/vue")
}