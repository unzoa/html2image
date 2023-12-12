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
pkg convert.js -o html2img

# 或者
npm run build
```

2. 执行程序

```bash
# mac | linux
./hh ./html-path.html ./any-path--any-img-format.jpg

# win
.\hh .\html-path.html .\any-path--any-img-format.jpg
```



