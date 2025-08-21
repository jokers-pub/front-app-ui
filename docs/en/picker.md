## Picker  

Provides multiple option sets for users to select from, supports single-column and multi-column cascading selection. Typically used in combination with popup layer components.

### Basic Usage  

The Picker component configures option data through the `columns` property, where `columns` is an array containing strings or objects.  

!!!demo1!!!  

### Default Selection  

Configure the `value` property to set the default selected item. **Note**: For non-cascading selections, the `value` should be passed as an array.  

!!!demo2!!!  

### Multi-Column (Non-Cascading)  

Display multiple columns by passing an array of multiple items.  

!!!demo3!!!  

### Cascading Selection  

Link data by specifying `children`.  

!!!demo4!!!  

### Loading State  

Enable the loading state by configuring the `loading` property.  

!!!demo5!!!  

### Custom Data  

Customize data fields using `labelKey`, `valueKey`, and `childrenKey`.  

!!!demo6!!!  

### Used with Popup Layer  

!!!demo7!!!  

### Empty Panel  

Configure the `empty-text` property to set the display content for an empty panel.  

!!!demo8!!!  

### Attributes  

| Parameter      | Description                                                                                     | Type          | Options | Default    |  
| -------------- | ----------------------------------------------------------------------------------------------- | ------------- | ------- | ---------- |  
| title          | The title text of the picker                                                                    | string        | —       | —          |  
| cancelText     | Text for the cancel button, defaults to "Cancel"                                                | string        | —       | 'Cancel'   |  
| confirmText    | Text for the confirm button, defaults to "Confirm"                                              | string        | —       | 'Confirm'  |  
| columns        | Option data collection: a one-dimensional array for single-column, a two-dimensional array for multi-column. Cascading options can be linked via `children`. | Array<any>    | —       | []         |  
| value          | Bound value: a single value (string/number) for single selection, or an array for multi-column selection.  | any / any[]   | —       | —          |  
| loading        | Whether to display the loading state                                                            | boolean       | —       | false      |  
| loadingText    | Text displayed during loading state                                                             | string        | —       | —          |  
| labelKey       | Custom field name for displaying the option object, defaults to "label"                         | string        | —       | 'label'    |  
| valueKey       | Custom field name for the value of the option object, defaults to "value"                       | string        | —       | 'value'    |  
| childrenKey    | For cascading selection, custom field name for the child options array, defaults to "children"  | string        | —       | 'children' |  
| empty-text     | Text displayed for the empty panel                                                              | string        | —       | —          |  

### Events  

| Event     | Description                          | Callback Parameters                                                                                  |  
| --------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------- |  
| change    | Triggered when an option changes.    | `{index: number (changed column index), value: any[] (latest complete value set)}`                   |  
| confirm   | Triggered when the confirm button is clicked. | Current selected value(s) (single value for single selection, array for multiple selections), detailed info of selected item(s). |  
| cancel    | Triggered when the cancel button is clicked.  | Current selected value(s) (single value for single selection, array for multiple selections), detailed info of selected item(s). |  

### Section  

| Name  | Description             |  
| ----- | ----------------------- |  
| empty | List when no options exist |