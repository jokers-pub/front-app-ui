## Swipe 轮播

用于循环播放一组图片或内容。

:::warning
请切换到移动端模式进行浏览，PC端无法执行touch事件。
:::

### 基础用法

适用广泛的基础用法。

结合使用 jk-swiper 和 jk-swiper-item 标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在 jk-swiper-item 标签中。

!!! demo1 !!!

### 指示器

可以将指示器的显示位置设置在容器外部

indicatorPosition 属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为 outside 则会显示在外部；设置为 none 则不会显示指示器。

!!! demo2 !!!

### 方向

默认情况下，direction 为 horizontal。通过设置 direction 为 vertical 来让走马灯在垂直方向上显示。

!!! demo5 !!!

### Carousel Attributes

| 参数              | 说明                                  | 类型    | 可选值              | 默认值     |
| ----------------- | ------------------------------------- | ------- | ------------------- | ---------- |
| height            | 走马灯的高度                          | string  | —                   | —          |
| class             | 自定义 class 样式                     | string  | -                   | -          |
| initialIndex      | 初始状态激活的幻灯片的索引，从 0 开始 | number  | —                   | 0          |
| autoplay          | 是否自动切换                          | boolean | —                   | true       |
| interval          | 自动切换的时间间隔，单位为毫秒        | number  | -                   | 3000       |
| indicatorPosition | 指示器的位置                          | string  | outside/none        | —          |
| arrow             | 是否显示切换箭头                      | boolean | -                   | false      |
| loop              | 是否循环显示                          | boolean | -                   | true       |
| direction         | 走马灯展示的方向                      | string  | horizontal/vertical | horizontal |

### Carousel Events

| 事件名称 | 说明             | 回调参数                               |
| -------- | ---------------- | -------------------------------------- |
| change   | 幻灯片切换时触发 | 目前激活的幻灯片的索引，原幻灯片的索引 |

### Carousel Methods

| 方法名        | 说明               | 参数                                                                      |
| ------------- | ------------------ | ------------------------------------------------------------------------- |
| setActiveItem | 手动切换幻灯片     | 需要切换的幻灯片的索引，从 0 开始；或相应 jk-carousel-item 的 name 属性值 |
| prev          | 切换至上一张幻灯片 | -                                                                         |
| next          | 切换至下一张幻灯片 | -                                                                         |
