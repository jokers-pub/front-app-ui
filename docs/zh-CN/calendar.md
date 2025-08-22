## Calendar 日历

日历组件用于选择日期或日期区间。

### 默认展示

使用`jk-calendar`组件实现日历的展示。

`showSwitchButton`开启后则只能通过切换按钮来切换年月，关闭此属性后，支持通过滑动方式切换年月。

请注意当不启用`showSwitchButton`参数时需要配置面板高度，默认为100%高度。

!!!demo1!!!

### 区间选择

启用`range`可以选择日期区间

!!!demo2!!!

### 限制选择范围

设置`minDate`、`maxDate`可设置可选时间范围

!!!demo3!!!

### 自定义单元格

通过`formatter`可以对单元格信息进行修改

!!!demo4!!!

### 日期选择面板

使用`jk-calendar-picker`来展示日期

!!!demo5!!!

### 表单项

`jk-date`组件并配置`type='calendar'`进行日期选择表单选择。

!!!demo6!!!

### Calendar Attributes

| 参数             | 说明                                                       | 类型                                 | 可选值 | 默认值 |
| ---------------- | ---------------------------------------------------------- | ------------------------------------ | ------ | ------ |
| title            | 日历标题                                                   | string                               | -      | -      |
| value            | 当前选中的日期，区间选择时为日期数组                       | Date / [Date, Date]                  | -      | -      |
| defaultValue     | 日历默认展示的年月                                         | Date                                 | -      | -      |
| minDate          | 可选的最小日期                                             | Date                                 | -      | -      |
| maxDate          | 可选的最大日期                                             | Date                                 | -      | -      |
| showWeekNumber   | 是否显示周数                                               | boolean                              | -      | true   |
| showSwitchButton | 是否显示年月切换按钮，显示后则不能通过上下滚动切换年月     | boolean                              | -      | -      |
| formatter        | 日历单元格格式化函数，可通过该函数修改日期单元格的渲染信息 | (data: CalendarCellDataType) => void | -      | -      |
| readonly         | 是否为只读状态，只读状态下无法选择日期                     | boolean                              | -      | -      |
| range            | 是否开启日期区间选择模式                                   | boolean                              | -      | -      |

### CalendarCellDataType 类型定义

```typescript
export type CalendarCellDataType = {
    date: Date; // 单元格对应的日期
    type: "normal" | "prev-month" | "next-month" | "today" | "placeholder"; // 单元格类型
    text?: any; // 单元格显示的文本内容
    disabled?: boolean; // 单元格是否禁用（禁用后无法选择）
    customClass?: string; // 单元格自定义样式类名
    inRange?: boolean; // 单元格是否在选中的日期区间内（仅区间选择模式生效）
    start?: boolean; // 单元格是否为区间选择的开始日期（仅区间选择模式生效）
    end?: boolean; // 单元格是否为区间选择的结束日期（仅区间选择模式生效）
    tip?: string; // 单元格下方提示文本
    topTip?: string; // 单元格上方提示文本
};
```

### Calendar Events

| 事件名 | 说明                                                                     | 参数               |
| ------ | ------------------------------------------------------------------------ | ------------------ |
| pick   | 选中日期后触发                                                           | Date/\[Date,Date\] |
| change | 选中日期后触发，区别于pick，在区间选择时当只选择开始日期时也会触发change | Date/\[Date,Date\] |

### Calendar Picker Attributes

| 参数             | 说明                                                                                                                                            | 类型                                    | 可选值 | 默认值                   |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------ | ------------------------ |
| title            | 日历选择面板标题                                                                                                                                | string                                  | -      | -                        |
| value            | 当前选中的日期，区间选择时为日期数组                                                                                                            | Date / [Date, Date]                     | -      | -                        |
| defaultValue     | 日历选择面板默认展示的年月                                                                                                                      | Date                                    | -      | -                        |
| minDate          | 可选的最小日期                                                                                                                                  | Date                                    | -      | -                        |
| maxDate          | 可选的最大日期                                                                                                                                  | Date                                    | -      | -                        |
| showWeekNumber   | 是否显示周数                                                                                                                                    | boolean                                 | -      | true                     |
| showSwitchButton | 是否显示年月切换按钮，显示后则不能通过上下滚动切换年月（可选参数）                                                                              | boolean                                 | -      | -                        |
| size             | 日历选择面板尺寸。<br>优先级：手动传递值 > 自动判断；<br>自动判断规则：开启`showSwitchButton`时为`auto`，关闭/未设置`showSwitchButton`时为`60%` | string                                  | -      | 自动判断（`auto`/`60%`） |
| formatter        | 日历单元格格式化函数，可通过该函数修改日期单元格的渲染信息                                                                                      | (data: CalendarCellDataType) => void    | -      | -                        |
| range            | 是否开启日期区间选择模式                                                                                                                        | boolean                                 | -      | -                        |
| showConfirm      | 是否显示确认按钮                                                                                                                                | boolean                                 | -      | -                        |
| confirmText      | 确认按钮文本                                                                                                                                    | string                                  | -      | "确认"                   |
| validate         | 确认前的验证函数，点击确认后、面板关闭前执行。返回`true`则继续确认流程，返回`false`则取消确认并保持面板打开                                     | (value: Date / [Date, Date]) => boolean | -      | -                        |

### Calendar Events

| 事件名 | 说明           | 参数               |
| ------ | -------------- | ------------------ |
| pick   | 选中日期后触发 | Date/\[Date,Date\] |

### Date Calendar Attribute

| 参数             | 说明                                                               | 类型     | 可选值               | 默认值       |
| ---------------- | ------------------------------------------------------------------ | -------- | -------------------- | ------------ |
| value            | 绑定值                                                             | string   | —                    | —            |
| type             | 类型                                                               | calendar | —                    | —            |
| class            | 自定义 class 样式                                                  | string   | -                    | -            |
| disabled         | 禁用                                                               | boolean  | —                    | false        |
| clearable        | 是否显示清除按钮                                                   | boolean  | —                    | true         |
| size             | 输入框尺寸                                                         | string   | large / small / mini | —            |
| placeholder      | 非范围选择时的占位内容                                             | string   | —                    | —            |
| format           | 展示值的格式                                                       | string   | -                    | HH:mm:ss     |
| value-format     | 可选，绑定值的格式                                                 | string   | -                    | HH:mm:ss     |
| default-value    | 可选，选择器打开时默认显示的时间                                   | string   | 符合 format 格式     | —            |
| prefix-icon      | 自定义头部图标的类名                                               | string   | —                    | jk-icon-time |
| panel-size       | Picker面板尺寸                                                     | string   | —                    | -            |
| pick-validate    | 参考 Calendar中的`validate`参数                                    | Function | —                    | -            |
| cellFormatter    | 参考 Calendar中的`formatter`参数                                   | Function | —                    | -            |
| range            | 是否开启日期区间选择模式                                           | boolean  | -                    | -            |
| showConfirm      | 是否显示确认按钮                                                   | boolean  | -                    | -            |
| confirmText      | 确认按钮文本                                                       | string   | -                    | "确认"       |
| minDate          | 可选的最小日期                                                     | Date     | -                    | -            |
| maxDate          | 可选的最大日期                                                     | Date     | -                    | -            |
| showWeekNumber   | 是否显示周数                                                       | boolean  | -                    | true         |
| showSwitchButton | 是否显示年月切换按钮，显示后则不能通过上下滚动切换年月（可选参数） | boolean  | -                    | -            |

### Date Calendar Events

| 事件名 | 说明           | 参数                       |
| ------ | -------------- | -------------------------- |
| change | 选中日期后触发 | string / \[string,string\] |
