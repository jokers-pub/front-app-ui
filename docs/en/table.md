## Table 

Used to display multiple sets of structurally similar data, allowing operations like sorting, filtering, comparison, or other custom actions.

### Basic Table

Basic table display usage.

!!!demo1!!!

### Striped Table

Tables with zebra striping make it easier to distinguish between rows.

The `stripe` attribute enables striped tables. It accepts a `Boolean` value, defaulting to `false`. Set to `true` to enable.

!!!demo2!!!

### Bordered Table

By default, the Table component does not have vertical borders. If needed, use the `border` attribute, which accepts a `Boolean` value. Set to `true` to enable.

!!!demo3!!!

### Fixed Header

When vertical content is extensive, you can choose to fix the table header.

Simply define the `height` attribute in the `jk-table` element to fix the table header without requiring additional code.

!!!demo4!!!

### Fixed Column

When horizontal content is extensive, you can choose to fix columns.

Use the `fixed` attribute to fix columns. It accepts a `Boolean` value or `left`/`right` to specify left or right fixation.

!!!demo5!!!

### Fluid Height

When data volume changes dynamically, set a maximum height for the Table.

Use the `max-height` attribute to define the table's maximum height. If the table's required height exceeds this, a scrollbar will appear.

!!!demo6!!!

### Multi-Level Header

For complex data structures, multi-level headers can display hierarchical relationships.

Nest `jk-table-column` within `jk-table-column` to achieve multi-level headers.

!!!demo7!!!

### Row Selection

Enable row selection via the `select` attribute. Set to **true** for single-select mode, and configure the `mutiple` attribute for multi-select mode.

Add an `jk-table-column` component with `type="selection"` to display the selection helper column. **Note**: If enabled, clicking a row won't trigger selection.

Use the `selected-change` event to observe selection state changes. Both single and multi-select return an array of row data.

Methods for controlling selected rows:
- `getSelectedRow`: Get selected row(s) (single row in single-select mode, multiple rows in multi-select mode).
- `setSelectedRow`: Select rows. Pass single or multiple rows (**Note**: In single-select mode, only the first row is selected if multiple are passed).
- `clearSelectedRow`: Clear selected rows.
- `selectAll`: In multi-select mode, selects all non-disabled data.

Single-select example:  
!!!demo8!!!

Multi-select example:  
!!!demo9!!!

### Sorting

Sort tables to quickly find or compare data.

Set the `sortable` attribute on a column to enable sorting by that column (accepts `Boolean`, defaults to `false`).  
Configure default sorting via the Table's `default-sort` attribute. Use `sort-method` for custom sorting logic. `default-sort-order` defaults to **ascending**; set to **descending** to reverse.

For backend sorting, set `sortable="custom"`, then listen to the `sort-change` event on the Table to fetch sorted data.

!!!demo10!!!

Custom sorting (simulated server-side sorting):  
!!!demo11!!!

### Filtering

Filter tables to quickly locate desired data.

Enable column filtering via `filter` and `filter-method` attributes. `filter` is an array; if omitted, it defaults to all unique values in the column. `filter-method` determines visibility by accepting three params: `row data`, `filter value`, and `column`.

`filter` can be configured as:
```js
[
    { value: "1", text: "Male" },
    { value: "0", text: "Female" }
];
```

!!!demo12!!!

### Index Column

Display index columns by setting `type="index"` on `jk-table-column` and configuring the starting index via the `index` attribute (default: 1).

!!!demo13!!!

### Custom Column Template

Customize column content by combining other components.  
Use `RenderSection` to access `value`, `row`, `rowIndex`, `columnIndex`, `column`, and `store` (table state management). See demo.

`td` area renders cell content; `th` area renders headers.

!!!demo14!!!

### Expandable Rows

Use expandable rows when row content is extensive without horizontal scrolling.  
Set `type="expand"` and `section('expand',data)` to enable. The template in `jk-table-column` becomes the expanded content, where `data` includes `current row`, `row index`, and `store`.

!!!demo15!!!

### Tree Table

Display hierarchical data. Rows with `children` fields are treated as tree data. Specify `row-key` when rendering. Supports async child loading via `lazy=true` and `load` function. Use `isLeafKey` to mark leaf nodes.

> Configure `childrenKey` and `isLeafKey` for node properties.

!!!demo16!!!

Async loading:  
!!!demo17!!!

> Note: Sorting/filtering/indexing only applies to top-level rows in tree tables.

### Large Dataset Sync Loading

Loading large datasets (800+ rows).  

!!!demo19!!!

### Table Attributes

| Parameter | Description | Type | Options | Default |
|-----------|------------|------|---------|---------|
| data | Data to display | array | — | — |
| class | Custom CSS class | string | — | — |
| height | Table height (auto by default). Numbers are in px; strings set `style.height`. | string/number | — | — |
| max-height | Maximum height (px or number). | string/number | — | — |
| stripe | Zebra-striping | boolean | — | false |
| border | Vertical borders | boolean | — | false |
| show-header | Show headers | boolean | — | true |
| row-class-name | Row className callback or static string | Function/String | — | — |
| row-style | Row style callback or static object | Function/Object | — | — |
| cell-class-name | Cell className callback or static string | Function/String | — | — |
| cell-style | Cell style callback or static object | Function/Object | — | — |
| header-row-class-name | Header row className callback or static string | Function/String | — | — |
| header-row-style | Header row style callback or static object | Function/Object | — | — |
| header-cell-class-name | Header cell className callback or static string | Function/String | — | — |
| header-cell-style | Header cell style callback or static object | Function/Object | — | — |
| empty-text | Empty data text (override via `section="empty"`) | String | — | "No Data" |
| default-sort | Default sort column | string | — | — |
| default-sort-order | Default sort order | "ascending"/"descending" | — | — |
| childrenKey | Child node key for tree data | string | — | "children" |
| isLeafKey | Leaf node indicator key for tree data | string | — | — |
| dataChangeNotClearSelected | Don't clear selection on data change | boolean | — | — |
| defaultExpandAll | Expand all rows by default | boolean | — | — |

### Table Events

| Event | Description | Parameters |
|-------|-------------|-----------|
| selected-change | Triggered when selection changes | Selected rows[] |
| sort-change | Triggered when sorting changes | { column, order } |
| expand-change | Triggered when expanding/collapsing | row, expand |

### Table Methods

| Method | Description | Parameters |
|--------|-------------|------------|
| clearSelectedRow | Clears selection (multi-select) | — |
| selectAll | Toggles all rows' selection | — |
| setSelectedRow | Sets selected row (single-select) | row |
| clearSort | Resets sorting | — |
| clearFilter | Clears filters (optionally by column keys) | column.key[] |
| sort | Manual sort by `key` and `order` | key: string, order: string |
| getSelectRow | Gets selected rows | — |

### Table-column Attributes

| Parameter | Description | Type | Options | Default |
|-----------|------------|------|---------|---------|
| type | Column type (`selection` for checkboxes, `index` for row numbers, `expand` for expand button) | string | selection/index/expand | — |
| index | Custom index when `type="index"` | number/Function(index) | — | — |
| key | Column key (required for `filter-change`) | string | — | — |
| label | Header text | string | — | — |
| width | Column width | string | — | — |
| fixed | Fix column (`true` = left, `"left"`/`"right"`) | string/boolean | true/left/right | — |
| sortable | Enable sorting (`"custom"` for remote) | boolean/string | true/false/custom | false |
| sort-method | Custom sort function | Function | — | — |
| align | Content alignment | string | left/center/right | left |
| header-align | Header alignment | string | left/center/right | — |
| class | Column CSS class | string | — | — |
| filter | Filter options (`{ text, value }[]` or `string[]`) | Array | — | — |
| filter-method | Filter logic (executed per row) | Function(row, filters, col) | — | — |

### Table-column Section

| Name | Description |
|------|-------------|
| td | Custom cell content ({value, row, rowIndex, column, columnIndex, store}) |
| th | Custom header content ({ column, columnIndex, store }) |
| expand | Expandable row content ({ row, rowIndex, store }) |