## Select Component

A dropdown menu for displaying and selecting content when there are too many options.

### Basic Usage

Supports fundamental single selection widely. Refer to the `picker` component's **columns** parameter for `options` rules.

!!!demo1!!!

### Disabled State

Set `disabled` to true to disable the dropdown selection.

!!!demo2!!!

### Clearable Selection

Includes a clear button to reset the selector to its initial state.

Set the `clearable` property to enable clearing the selector.

!!!demo3!!!

### Lazy Loading Data

!!!demo4!!!

### Empty Data Display

When the passed array is empty (length:0), configure the `emptyText` property to modify the empty panel data.

!!!demo5!!!

### Size

Use the `size` property to specify the input size. Besides the default size, medium, small, and mini sizes are also available.

!!!demo6!!!

### Select Attributes

| Attribute   | Description                                                                                                     | Type                                    | Options          | Default    |
| ----------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ---------------- | ---------- |
| options     | Option data list. See the `picker` component's `columns` parameter type for details                             | Array<any>                              | —                | —          |
| value       | Bound value. For multiple columns, pass as an array                                                             | any / any[]                             | —                | —          |
| name        | Used for the `name` attribute in form integration                                                               | string                                  | —                | —          |
| clearable   | Whether to show the clear button                                                                                | boolean                                 | —                | false      |
| placeholder | Placeholder text                                                                                                | string                                  | —                | Select     |
| class       | Custom class style                                                                                              | string                                  | —                | —          |
| title       | Title of the selection window                                                                                   | string                                  | —                | —          |
| load        | Async loading method. Do not set `data`; request data and return options when dropdown is opened or for display | () => Array<any> \| Promise<Array<any>> | —                | —          |
| emptyText   | Text to display when options are empty                                                                          | string                                  | —                | -          |
| labelKey    | Key name for display                                                                                            | string                                  | —                | "label"    |
| valueKey    | Key name for unique value identification                                                                        | string                                  | —                | "value"    |
| childrenKey | Key name for child options (if options are nested)                                                              | string                                  | —                | "children" |
| splitText   | Separator for displaying text in multiple columns                                                               | string                                  | —                | " / "      |
| disabled    | Whether the selector is disabled                                                                                | boolean                                 | —                | false      |
| readonly    | Whether to set to read-only state (non-selectable but styled differently from disabled)                         | boolean                                 | —                | false      |
| size        | Selector size                                                                                                   | string                                  | large/small/mini | —          |

### Select Events

| Event Name | Description                               | Callback Parameters        |
| ---------- | ----------------------------------------- | -------------------------- |
| change     | Triggered when the selected value changes | The current selected value |

### Select Sections

| Name  | Description                        |
| ----- | ---------------------------------- |
| empty | List when no options are available |
