## DatePicker 日期选择器

用于选择或输入日期

### 基础用法

!!!demo1!!!

### 其他日期单位

通过扩展基础的日期选择，可以选择周、月、年。

!!!demo2!!!

### 输入项

结合 `jk-date`在表单内使用。

!!!demo3!!!

:::warning
请注意大小写，内部采用`dayjs`进行时间运算及格式化，详细格式值，请参考[dayjs](https://dayjs.fenxianglu.cn/)
:::

### Date Picker Attribute

| 参数         | 说明               | 类型                                                                              | 可选值 | 默认值                     |
| ------------ | ------------------ | --------------------------------------------------------------------------------- | ------ | -------------------------- |
| format       | 值规则             | string                                                                            | —      | YYYY-MM-DD/YYYY-MM/YYYY-ww |
| defauleValue | 默认展示值         | string                                                                            | —      | —                          |
| value        | 值                 | string                                                                            | —      | —                          |
| filter       | 选项过滤           | (date: { year?: number; month?: number; day?: number; week?: number }) => boolean | —      | —                          |
| labelFormat  | 自定义展示列的文本 | (value: number, type: string) => string                                           | —      | jk-icon-time               |

### Time Select Events

| 事件名 | 说明             | 参数   |
| ------ | ---------------- | ------ |
| pick   | 选中值后出发事件 | string |

### Date Attributes

| 参数          | 说明                             | 类型                                                                              | 可选值               | 默认值       |
| ------------- | -------------------------------- | --------------------------------------------------------------------------------- | -------------------- | ------------ |
| value         | 绑定值                           | string                                                                            | —                    | —            |
| type          | 类型                             | year/month/date/week                                                              | —                    | —            |
| class         | 自定义 class 样式                | string                                                                            | -                    | -            |
| disabled      | 禁用                             | boolean                                                                           | —                    | false        |
| clearable     | 是否显示清除按钮                 | boolean                                                                           | —                    | true         |
| size          | 输入框尺寸                       | string                                                                            | large / small / mini | —            |
| placeholder   | 非范围选择时的占位内容           | string                                                                            | —                    | —            |
| format        | 展示值的格式                     | string                                                                            | -                    | HH:mm:ss     |
| value-format  | 可选，绑定值的格式               | string                                                                            | -                    | HH:mm:ss     |
| default-value | 可选，选择器打开时默认显示的时间 | string                                                                            | 符合 format 格式     | —            |
| prefix-icon   | 自定义头部图标的类名             | string                                                                            | —                    | jk-icon-time |
| labelFormat   | 自定义展示列的文本               | (value: number, type: string) => string                                           | —                    | jk-icon-time |
| filter        | 选项过滤                         | (date: { year?: number; month?: number; day?: number; week?: number }) => boolean | —                    | —            |

### Date Events

| 事件名 | 说明                   | 参数                             |
| ------ | ---------------------- | -------------------------------- |
| change | 用户确认选定的值时触发 | 值（按照valueFomat格式化后的值） |
