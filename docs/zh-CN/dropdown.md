## Dropdown 下拉菜单

通过点击或着 hover 来展示下拉菜单。

### 基础用法

通过`Section`来设置触发下拉菜单展示的元素

!!!demo1!!!

### 分割形式

配置`split-button`属性来让那个触发下拉元素呈现为按钮组。

!!!demo2!!!

### 菜单样式

可以通过配置菜单项的图表、分割等属性来展示更丰富的菜单

!!!demo3!!!

当然，你也可以不使用`jk-dropdown-item`组件去填充下拉菜单，而是采用自定义的形式。

!!!demo4!!!

### 禁用

通过设置`disabled`属性实现禁用，该属性会自动更改`split-button`类型下的按钮状态，若不是分割按钮模式，请自行管理设置内容禁用样式

!!!demo5!!!

### Dropdown Attributes

| 参数         | 说明                                                                 | 类型    | 可选值               | 默认值  |
| ------------ | -------------------------------------------------------------------- | ------- | -------------------- | ------- |
| type         | 菜单按钮类型，同 Button 组件(只在`split-button`为 true 的情况下有效) | string  | —                    | primary |
| size         | 在`split-button`为 true 的情况下也对触发按钮生效                     | string  | large / small / mini | —       |
| split-button | 下拉触发元素呈现为按钮组                                             | boolean | —                    | false   |
| disabled     | 是否禁用                                                             | boolean | —                    | false   |

### Dropdown Events

| 事件名称 | 说明                                                                                                  | 回调参数 |
| -------- | ----------------------------------------------------------------------------------------------------- | -------- |
| click    | `split-button` 为 true 时，点击左侧按钮的回调，若不是`split-button`则代表当前内部元素点击冒泡处理事件 | —        |

### Dropdown Menu Attributes

| 参数      | 说明     | 类型   | 可选值                                                                                                    | 默认值       |
| --------- | -------- | ------ | --------------------------------------------------------------------------------------------------------- | ------------ |
| placement | 菜单位置 | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom-start |
| maxHeight | 最大高度 | string | -                                                                                                         | -            |

### Dropdown Menu Item Attributes

| 参数     | 说明       | 类型    | 可选值 | 默认值 |
| -------- | ---------- | ------- | ------ | ------ |
| disabled | 禁用       | boolean | —      | false  |
| divided  | 显示分割线 | boolean | —      | false  |
| icon     | 图标类名   | string  | —      | —      |

### Dropdown Menu Events

| 事件名称 | 说明     | 回调参数 |
| -------- | -------- | -------- |
| open     | 菜单打开 | —        |
| close    | 菜单关闭 | —        |
