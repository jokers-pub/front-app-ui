## Table  

Used to display multiple sets of structurally similar data, enabling operations like sorting, filtering, comparison, or other custom actions.

### Basic Table  

The fundamental usage of table display.  

!!!demo1!!!  

### Striped Table  

Using striped tables makes it easier to differentiate between rows.  

The `stripe` property creates a striped table. It accepts a `Boolean`, defaulting to `false`. Set it to `true` to enable.  

!!!demo2!!!  

### Bordered Table  

By default, the Table component has no vertical borders. If needed, use the `border` property, which accepts a `Boolean`—set to `true` to enable.  

!!!demo3!!!  

### Fixed Header  

When vertical content is extensive, a fixed header can be employed.  

Simply define the `height` property in the `jk-table` element to implement a fixed-header table without additional code.  

!!!demo4!!!  

### Fixed Column  

For extensive horizontal content, columns can be fixed.  

Fixed columns require the `fixed` property, which accepts a `Boolean` or `left`/`right` to indicate left or right fixation.  

!!!demo5!!!  

### Fluid Height  

When data dynamically changes, set a maximum height for the Table.  

Use the `max-height` property to specify the maximum height. If the table’s required height exceeds this, a scrollbar appears.  

!!!demo6!!!  

### Multi-Level Header  

For complex data structures, multi-level headers can display hierarchical relationships.  

Nest `jk-table-column` within another `jk-table-column` to implement multi-level headers.  

!!!demo7!!!  

### Row Selection  

Enable row selection with the `select` property. Setting `select` to **true** activates single-selection mode, while `mutiple` enables multi-selection.  

Add an `jk-table-column` component with `type` set to **selection** to display an auxiliary selection column. **Note**: If enabled, clicking the row no longer triggers selection.  

Use the `selected-change` event to monitor selection changes. Both single and multi-selection return an array of row data.  

Additional methods for controlling selected rows:  
- `getSelectedRow` — Retrieves selected rows (single row in single-selection mode, multiple rows in multi-selection mode).  
- `setSelectedRow` — Selects rows (can pass single or multiple rows; single-selection mode only selects the first row if multiple are provided).  
- `clearSelectedRow` — Clears selected rows.  
- `selectAll` — In multi-selection mode, selects all non-disabled data.  

Single-selection example:  
!!!demo8!!!  

Multi-selection example:  
!!!demo9!!!  

### Sorting  

Tables can be sorted for quick data lookup or comparison.  

Set the `sortable` property on a column to enable sorting (default `false`). Use `default-sort` on the Table to set default sorting columns and order. Custom sorting rules can be defined via `sort-method`. `default-sort-order` defaults to **ascending** but can be set to **descending**.  

For backend sorting, set `sortable` to `custom` and listen to `sort-change` on the Table, which provides the current sort field and order.  

!!!demo10!!!  

Custom sorting (simulating server-side sorting):  
!!!demo11!!!  

### Filtering  

Tables can be filtered to quickly locate desired data.  

Set `filter` and `filter-method` on a column to enable filtering. `filter` is an array—if omitted, it displays all available values for the column. `filter-method` determines what data is shown, receiving `current row data`, `filter condition`, and `filter column` as arguments.  

`filter` can be configured as an array of **string[]** or with text translations, e.g.:  
```js  
[  
    { value: "1", text: "Male" },  
    { value: "0", text: "Female" }  
];  
```  

!!!demo12!!!  

### Index Column  

Configure `jk-table-column` with `type="index"` to display an index column. Use the `index` property to set the starting index (default: 1).  

!!!demo13!!!  

### Custom Column Template  

Customize column display by combining other components.  
Use `RenderSection` to access `value`, `row`, `rowIndex`, `columnIndex`, `column`, and `store` (table data management). Refer to the demo for usage.  

The **td** section renders table cell content, while **th** renders headers.  

!!!demo14!!!  

### Expandable Row  

For rows with extensive content and no horizontal scroll, expandable rows can be used.  
Set `type="expand"` and `section('expand', data)` to enable. `jk-table-column` templates render expanded content, where `data` includes `current row data`, `row index`, and `store`.  

!!!demo15!!!  

### Tree Table  

Supports hierarchical data display. Rows with a `children` field are treated as tree data. `row-key` is required when rendering trees. Supports asynchronous child node loading via `lazy` (set to `true`) and `load` function. Use `isLeafKey` to specify leaf nodes.  

> Configure `childrenKey` and `isLeafKey` to define node attributes and leaf indicators.  

!!!demo16!!!  

Asynchronous loading:  
!!!demo17!!!  

> Note: Sorting, filtering, or index columns only apply to the top-level list, not child nodes.  

### Size  

!!!demo19!!!  

### Table Attributes  

| Parameter | Description | Type | Options | Default |  
|-----------|------------|------|---------|---------|  
| data | Displayed data | array | — | — |  
| class | Custom class | string | — | — |  
| height | Table height (default: auto). If numeric, unit is `px`; string sets `style.height`. | string/number | — | — |  
| max-height | Maximum height (numeric or `px`). | string/number | — | — |  
| stripe | Whether to use striped styling. | boolean | — | false |  
| border | Whether to show vertical borders. | boolean | — | false |  
| show-header | Whether to display headers. | boolean | — | true |  
| row-class-name | Row `className` callback (or fixed string for all rows). | Function({row, rowIndex})/String | — | — |  
| row-style | Row `style` callback (or fixed object for all rows). | Function({row, rowIndex})/Object | — | — |  
| cell-class-name | Cell `className` callback (or fixed string for all cells). | Function({row, column, rowIndex, columnIndex})/String | — | — |  
| cell-style | Cell `style` callback (or fixed object for all cells). | Function({row, column, rowIndex, columnIndex})/Object | string | — |  
| header-row-class-name | Header row `className` callback (or fixed string for all headers). | Function({row, rowIndex})/String | — | — |  
| header-row-style | Header row `style` callback (or fixed object for all headers). | Function({row, rowIndex})/Object | — | — |  
| header-cell-class-name | Header cell `className` callback (or fixed string for all header cells). | Function({row, column, rowIndex, columnIndex})/String | — | — |  
| header-cell-style | Header cell `style` callback (or fixed object for all header cells). | Function({row, column, rowIndex, columnIndex})/Object | — | — |  
| empty-text | Text displayed when data is empty (can also use `section="empty"`). | String | — | No Data |  
| default-sort | Default sorted column. | string | — | — |  
| default-sort-order | Default sorting order. | ascending/descending | — | — |  
| childrenKey | Tree structure: specifies child node property name. | string | — | children |  
| isLeafKey | Tree structure: specifies leaf node property name. | string | — | — |  
| dataChangeNotClearSelected | Whether to clear selections after data changes. | boolean | — | — |  
| defaultExpandAll | Whether to expand all rows by default. | boolean | — | — |  

### Table Events  

| Event | Description | Parameters |  
|-------|-------------|------------|  
| selected-change | Triggered when selection changes. | Selected rows[] |  
| sort-change | Triggered when sorting conditions change. | { column, order } |  
| expand-change | Triggered when expanding/collapsing a row. | row, expand |  

### Table Methods  

| Method | Description | Parameters |  
|--------|-------------|------------|  
| clearSelectedRow | Clears user selections in multi-select tables. | — |  
| selectAll | Toggles all rows' selection state. | — |  
| setSelectedRow | Sets a specific row as selected in single-select tables. | row |  
| clearSort | Clears sorting conditions (resets data). | — |  
| clearFilter | Clears all filter conditions (or specific columns via `column.key` array). | column.key |  
| sort | Manual sorting (`key`: column, `order`: sorting order). | key: string, order: string |  
| getSelectRow | Gets selected rows. | — |  

### Table-column Attributes  

| Parameter | Description | Type | Options | Default |  
|-----------|------------|------|---------|---------|  
| type | Column type (`selection` for checkboxes, `index` for row numbers, `expand` for expandable rows). | string | selection/index/expand | — |  
| index | Customize index for `type=index` (numeric or function). | number, Function(index) | — | — |  
| key | Column key (required for `filter-change` events). | string | — | — |  
| label | Column header text. | string | — | — |  
| width | Column width. | string | — | — |  
| fixed | Whether column is fixed (`true`/`left`/`right`). | string, boolean | true/left/right | — |  
| sortable | Whether column is sortable (`custom` for remote sorting). | boolean, string | true/false/custom | false |  
| sort-method | Custom sorting function (only if `sortable=true`). | Function | — | — |  
| align | Alignment. | String | left/center/right | left |  
| header-align | Header alignment (defaults to table alignment if unset). | String | left/center/right | — |  
| class | Column class. | string | — | — |  
| filter | Filter options (must have `text` and `value`, filters current column). | Array<{ text, value }> or string[] | — | — |  
| filter-method | Custom filter function (returns `true` to display). | Function(row, filters, col) | — | — |  

### Table-column Section  

| Name | Description |  
|------|-------------|  
| td | Custom column content ({value, row, rowIndex, column, columnIndex, store}). |  
| th | Custom header content ({column, columnIndex, store}). |  
| expand | Expandable row content ({row, rowIndex, store}). |