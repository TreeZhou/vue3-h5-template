# title

## 项目地址

线上：

## 自动安装

将文件放置在指定的目录，实现自动注册
实现：getExportData.js 获取指定路径下文件的 export 数据

#### 组件

实现：autoRegisterComponent.js
自动注册组件的文件夹：
src/views
src/component

### iOS 方面

- 对于 iPhoneX 页面全屏时底部横条会遮挡页面的问题，可以参考[iPhoneX 中全屏 H5 的适配](https://blog.csdn.net/EdishenYA/article/details/80003782)

```html
<!-- index.html -->
<style>
  html,
  body {
    height: 100%;
  }
  /* 以下两段css是为了适配 iPhone X 页面全屏时所做的 shim */
  @supports (margin-bottom: constant(safe-area-inset-bottom)) {
    body {
      margin-bottom: constant(safe-area-inset-bottom);
    }
  }
  @supports (margin-bottom: env(safe-area-inset-bottom)) {
    body {
      margin-bottom: env(safe-area-inset-bottom);
    }
  }
</style>
```

```css
/* app.vue  */
#app {
  height: 100%; //苹果xconstant,env 必加
}
```
