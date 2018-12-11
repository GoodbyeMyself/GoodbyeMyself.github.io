# 网址收藏

> 网址收藏

## 风格
项目启用了eslint，主风格eslint配置使用了[standard](https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md)。

自定义：
* 项目使用tab（4个字符）进行缩进；
* 语句结尾必须使用分号。

## UI组件库
本项目UI组件库使用[element-ui](http://element.eleme.io/#/zh-CN/)

## 组件
命名规范：组件名称首字母必须大写，如果是多个单词组成，请使用驼峰法命名。

## 字体图标
项目中使用到字体图标[iconfont](http://www.iconfont.cn)。
引入方式，在index.html使用link方式直接引入alicn上的在线链接。


## 构建步骤

``` bash
# 安装依赖
npm install | cnpm install

# 打开开发环境
npm run dev

# 打包
npm run build