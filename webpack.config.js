const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entry = {
    'invasive-mollusca': './data/invasive-mollusca.js',
    'pollinators': './data/pollinators.js',
    'wetland-pollinators': './data/wetland-pollinators.js'
}

const plugins = []

for (const id in entry) {
    const htmlPlugin = new HtmlWebpackPlugin({
        template: './src/quiz.html',
        filename: `${id}/index.html`,
        chunks: [id],
    })
    plugins.push(htmlPlugin)
}

module.exports = {
    mode: 'development',
    entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]/index.js'
    },
    plugins
}
