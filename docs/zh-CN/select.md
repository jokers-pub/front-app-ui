## Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

### 基础用法

适用广泛的基础单选，`options`数据规则请参考`picker`组件**columns**参数。

!!!demo1!!!

### 禁用状态

设定`disabled`值为 true，即可禁用下拉选择

!!!demo2!!!

### 可清空单选

包含清空按钮，可将选择器清空为初始状态

设置`clearable`属性，则可将选择器清空。需要注意的是。

!!!demo3!!!

### 懒加载数据

!!!demo4!!!

### 空数据展示

当传入数组为空时（length:0），可配置 `emptyText`属性来修改空面板数据

!!!demo5!!!

### 尺寸

可通过 `size` 属性指定输入框的尺寸，除了默认的大小外，还提供了 medium、small 和 mini 三种尺寸。

!!!demo6!!!

### Select Attributes

| 参数        | 说明                                                                        | 类型                                    | 可选值           | 默认值     |
| ----------- | --------------------------------------------------------------------------- | --------------------------------------- | ---------------- | ---------- |
| options     | 选项数据列表，详细类型请参考 picker 组件的 columns 参数类型                 | Array<any>                              | —                | —          |
| value       | 绑定值，多列时需传递为数组                                                  | any / any[]                             | —                | —          |
| name        | 用于对接 form 表单的 name 属性                                              | string                                  | —                | —          |
| clearable   | 是否显示清空按钮                                                            | boolean                                 | —                | false      |
| placeholder | 占位符                                                                      | string                                  | —                | 请选择     |
| class       | 自定义 class 样式                                                           | string                                  | —                | —          |
| title       | 选择窗口的标题                                                              | string                                  | —                | —          |
| load        | 异步加载方法，可不设置 data，打开下拉框或需要反显值时请求数据并返回选项列表 | () => Array<any> \| Promise<Array<any>> | —                | —          |
| emptyText   | 选项为空时显示的文字                                                        | string                                  | —                | -          |
| labelKey    | 用于显示的键名                                                              | string                                  | —                | "label"    |
| valueKey    | 作为 value 唯一标识的键名                                                   | string                                  | —                | "value"    |
| childrenKey | 用于指定子选项的键名（若选项存在嵌套结构）                                  | string                                  | —                | "children" |
| splitText   | 多列时展示文本的分隔符                                                      | string                                  | —                | " / "      |
| disabled    | 是否禁用选择器                                                              | boolean                                 | —                | false      |
| readonly    | 是否设置为只读状态（不可选择但样式不同于禁用）                              | boolean                                 | —                | false      |
| size        | 选择器尺寸                                                                  | string                                  | large/small/mini | —          |

### Select Events

| 事件名称 | 说明                 | 回调参数     |
| -------- | -------------------- | ------------ |
| change   | 选中值发生变化时触发 | 目前的选中值 |

### Select Sections

|   name  | 说明           |
| ------- | -------------- |
| empty   | 无选项时的列表 |
