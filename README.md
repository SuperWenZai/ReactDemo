# ReactDemo

搭的一个react+webpack架构包，类似vue+webpack架构包；开发时可以直接使用，减少开发时重新搭建环节；

# 技术栈

react + webpack

# 示例图（image）

# 说明文档

    - app                                开发目录
        - components                     放React的组件
            - Component1.jsx             是React特有的jsx文件
        - static                         静态资源文件
        - main.js                        入口文件,将React组件放在真正的html中
    
    - build                              输出目录
        - index.html                     最终要呈现的页面
        - bundle.js                      经webpack打包后最终生成的供浏览器解析的js文件

    - .babelrc                           babel的配置文件

    - package.json                       npm包配置文件，里面定义了项目的npm脚本，依赖包等信息

    - webpack.config.js                  webpack的配置信息
    
# Build Setup

``` bash
# install dependencies
npm install
或
cnpm install

# serve with hot reload at localhost:8080
npm run dev

```
