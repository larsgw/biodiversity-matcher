const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entry = {
    'arthropods': './data/arthropods.js',
    'flora': './data/flora.js',
    'inat': './data/inat.js',
    'invasive-mollusca': './data/invasive-mollusca.js',
    'pollinators': './data/pollinators.js',
    'trees': './data/trees.js',
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
