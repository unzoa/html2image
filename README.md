# html文件转图片,可执行程序

> 使用 [node-html-to-image](https://www.npmjs.com/package/node-html-to-image) 执行主要程序

> 使用 pkg@5.7.0 打包成exe

```bash
npm i pkg@5.7.0 -g
```

## 使用

1. 打包成exe或其他程序

```bash
# -o 输出
# html2img 输出文件名
pkg convert.js -o ./dist/html2img.exe

# 或者
npm run build
```

### bug

> 在某些win电脑上不能运行，提示 node_modules/puppeteer/.local-chromium

原因：打包时候并没有打包进去，下面是打包警告信息：

```bash
> pkg convert.js -o ./dist/html2img.exe

> pkg@5.7.0
> Targets not specified. Assuming:
  node18-macos-x64
> Warning Cannot include directory %1 into executable.
  The directory must be distributed with executable as %2.
  %1: node_modules/puppeteer/.local-chromium
  %2: path-to-executable/puppeteer
> Warning Cannot include directory %1 into executable.
  The directory must be distributed with executable as %2.
  %1: node_modules/puppeteer/.local-chromium
  %2: path-to-executable/puppeteer
```

```bash
cp -r node_modules/puppeteer/.local-chromium path-to-executable/puppeteer

# 没有目录
.local-chromium
path-to-executable/puppeteer
```

2. 执行程序

```bash
# mac | linux
./html2img.exe ./html-path.html ./any-path--any-img-format.jpg

# win
.\html2img.exe .\html-path.html .\any-path--any-img-format.jpg
```



