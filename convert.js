const nodeHtmlToImage = require('node-html-to-image')
const fs = require('fs')

// 获取传递的命令行参数
const args = process.argv
const inputPath = args[2]
const outputPath = args[3]

const str = fs.readFileSync(inputPath, 'utf8')

nodeHtmlToImage({
  output: outputPath,
  html: str
}).then(() => console.log('The image was created successfully!'))
