## Cascader 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

### 基础用法

有两种触发子菜单的方式，只需为 Cascader 的`options`属性指定选项数组即可渲染出一个级联选择器。

!!!demo1!!!

### 禁用选项

通过在数据源中设置 `disabled` 字段来声明该选项是禁用的，本例中，`options`指定的数组中的第一个元素含有`disabled: true`键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的`disabled`字段是否为`true`，如果你的数据中表示禁用含义的字段名不为`disabled`，可以通过`props.disabled`属性来指定（详见下方 API 表格）。当然，`value`、`label`和`children`这三个字段名也可以通过同样的方式指定。

!!!demo2!!!

### 可清空

通过 `clearable` 设置输入框可清空

!!!demo3!!!

### 仅显示最后一级

可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。属性`show-all-levels`定义了是否显示完整的路径，将其赋值为`false`则仅显示最后一级

!!!demo4!!!

### 动态加载

当选中某一级时，动态加载该级下的选项。
并通过配置`load`来设置加载数据源的方法。`load`方法有两个参数，第一个参数`node`为当前点击的节点，第二个`resolve`为数据加载完成的回调(必须调用)。为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位 (默认字段为`leaf`，可通过`props.leaf`修改)，否则会简单的以有无子节点来判断是否为叶子节点。

!!!demo5!!!

### 自定义节点内容

可以自定义备选项的节点内容，可以通过`section`对级联选择器的备选项的节点内容进行自定义，具名区域（section） 会传入两个字段 `node` 和 `data`，分别表示当前节点的 Node 对象和数据。

!!!demo6!!!

### Cascader Attributes

| 参数          | 说明                                                                                                | 类型                                                        | 可选值               | 默认值     |
| ------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | -------------------- | ---------- |
| class         | 自定义 class 样式                                                                                   | string                                                      | -                    | -          |
| options       | 可选项数据源                                                                                        | Array<any>                                                  | —                    | `[]`       |
| size          | 输入框尺寸                                                                                          | string                                                      | large / small / mini | —          |
| clearable     | 是否支持清空选项                                                                                    | boolean                                                     | —                    | false      |
| placeholder   | 输入框占位文本                                                                                      | string                                                      | —                    | `请选择`   |
| valueKey      | 用于指定数据中作为值的字段名                                                                        | string                                                      | —                    | `value`    |
| labelKey      | 用于指定数据中作为标签的字段名                                                                      | string                                                      | —                    | `label`    |
| childrenKey   | 用于指定数据中作为子节点的字段名                                                                    | string                                                      | —                    | `children` |
| leafKey       | 用于指定数据中标识是否为叶子节点的字段名                                                            | string                                                      | —                    | `leaf`     |
| disabledKey   | 用于指定数据中标识是否禁用的字段名                                                                  | string                                                      | —                    | `disabled` |
| drawerSize    | 选择窗口尺寸                                                                                        | string                                                      | —                    | `70%`      |
| separator     | 显示所有层级时使用的分隔符                                                                          | string                                                      | —                    | `" / "`    |
| emitPath      | 是否在触发事件时返回完整路径                                                                        | boolean                                                     | —                    | `true`     |
| title         | 选择窗口的标题                                                                                      | string                                                      | —                    | `请选择`   |
| showAllLevels | 输入框中是否显示选中值的完整路径                                                                    | boolean                                                     | —                    | `true`     |
| load          | 异步加载数据的方法，第一个参数`node`为当前节点，第二个参数`resolve`为数据加载完成的回调（必须调用） | function(node?: Node, resolve: (list: Array<Node>) => void) | —                    | —          |
| loadingText   | 加载状态时的提示文本                                                                                | string                                                      | —                    | `加载中`   |
| emptyText     | 空列表时的展示文本                                                                                  | string                                                      | —                    | `暂无数据` |

### Cascader Events

| 事件名称 | 说明                 | 回调参数     |
| -------- | -------------------- | ------------ |
| change   | 当选中节点变化时触发 | 选中节点的值 |

### Cascader Section

| 名称  | 说明                                      |
| ----- | ----------------------------------------- |
| node  | 自定义备选项的节点内容，参数为 { node }， |
| empty | 空列表展示内容，参数为 { parentNode }，   |
