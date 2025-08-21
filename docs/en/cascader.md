## Cascader  

When a dataset has a clear hierarchical structure, the cascader component allows step-by-step browsing and selection.

### Basic Usage  

There are two ways to trigger submenus. Simply specify an options array for the `options` property of the Cascader to render a cascading selector.  

!!!demo1!!!  

### Disabled Options  

Declare an option as disabled by setting the `disabled` field in the data source. In this example, the first element of the array specified in `options` contains the key-value pair `disabled: true`, making it disabled. By default, Cascader checks if the `disabled` field for each item in the data is `true`. If your data uses a different field name to indicate disabled status, you can specify it via the `props.disabled` property (see the API table below). Similarly, the field names for `value`, `label`, and `children` can also be customized this way.  

!!!demo2!!!  

### Clearable  

Set the input field to be clearable via the `clearable` property.  

!!!demo3!!!  

### Show Last Level Only  

Display only the label of the last level of the selected item in the input field instead of the full path. The `show-all-levels` property defines whether the full path is shown. Setting it to `false` will display only the last level.  

!!!demo4!!!  

### Dynamic Loading  

Dynamically load options under the selected level.  
Configure the `load` method to set the data loading logic. The `load` method takes two parameters: the first `node` is the currently clicked node, and the second `resolve` is the callback for completing data loading (must be called). To accurately display node states, a `leaf` flag (default field name) can be added to the node data (adjustable via `props.leaf`). Otherwise, it simply determines leaf status based on the presence of child nodes.  

!!!demo5!!!  

### Custom Node Content  

Customize the content of cascader options via the `section` slot, which takes two fields: `node` (the current Node object) and `data` (the option's data).  

!!!demo6!!!  

### Cascader Attributes  

| Attribute      | Description                                                                                                | Type                                                        | Accepted Values        | Default     |
| -------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------- | ----------- |
| class          | Custom class name                                                                                         | string                                                     | -                     | -           |
| options        | Data source for the options                                                                               | Array<any>                                                 | —                     | `[]`        |
| size           | Size of the input field                                                                                   | string                                                     | large / small / mini  | —           |
| clearable      | Whether the selection can be cleared                                                                      | boolean                                                    | —                     | false       |
| placeholder    | Placeholder text for the input field                                                                      | string                                                     | —                     | `Select`    |
| valueKey       | Field name for the value in the data                                                                      | string                                                     | —                     | `value`     |
| labelKey       | Field name for the label in the data                                                                      | string                                                     | —                     | `label`     |
| childrenKey    | Field name for child nodes in the data                                                                    | string                                                     | —                     | `children`  |
| leafKey        | Field name for identifying leaf nodes in the data                                                         | string                                                     | —                     | `leaf`      |
| disabledKey    | Field name for identifying disabled nodes in the data                                                     | string                                                     | —                     | `disabled`  |
| drawerSize     | Size of the selection window                                                                              | string                                                     | —                     | `70%`       |
| separator      | Separator used when displaying all levels                                                                 | string                                                     | —                     | `" / "`     |
| emitPath       | Whether to return the full path in emitted events                                                         | boolean                                                    | —                     | `true`      |
| title          | Title of the selection window                                                                             | string                                                     | —                     | `Select`    |
| showAllLevels  | Whether to display the full path of the selected value in the input                                       | boolean                                                    | —                     | `true`      |
| load           | Async data loading method, with `node` (current node) and `resolve` (callback after loading data, mandatory) | function(node?: Node, resolve: (list: Array<Node>) => void) | —                     | —           |
| loadingText    | Text displayed during loading state                                                                       | string                                                     | —                     | `Loading`   |
| emptyText      | Text displayed for empty lists                                                                            | string                                                     | —                     | `No data`   |

### Cascader Events  

| Event Name | Description                            | Callback Parameters   |
| ---------- | ------------------------------------- | --------------------- |
| change     | Triggers when the selected node changes | Selected node value   |

### Cascader Section  

| Name  | Description                                                 |
| ----- | ---------------------------------------------------------- |
| node  | Custom content for an option, parameter: `{ node }`         |
| empty | Content displayed when the list is empty, parameter: `{ parentNode }` |