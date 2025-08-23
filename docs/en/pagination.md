## Pagination

Used to split large datasets into paginated views.

### Basic Usage

Set the `layout` property to specify the elements to be displayed, separated by commas. The layout elements will be displayed in order.

- `prev` indicates the previous page
- `next` indicates the next page
- `pager` represents the page number list
- `total` shows total item count

> Additionally, a special layout symbol `->` is provided. Elements after `->` will be right-aligned.

!!!demo1!!!

### Set Maximum Page Button Count

By default, when the total page count exceeds 7, the Pagination component will collapse excess page buttons. The `pager-count` property can be used to set the maximum number of page buttons.

!!!demo2!!!

### Display Total Item Count

Add `total` to the layout configuration to display the total number of items.

!!!demo3!!!

### Hide When Only One Page

Configure `hide-on-single-page` to hide pagination when there's only one page.

!!!demo6!!!

### Small Pagination

Use the `small` property to display a compact pagination style.

!!!demo7!!!

### Pagination with Background Color

Set `background` to display pagination with background colors following the primary color scheme.

!!!demo8!!!

### Attributes

| Attribute           | Description                                                                      | Type     | Accepted Values                  | Default             |
| ------------------- | -------------------------------------------------------------------------------- | -------- | -------------------------------- | ------------------- |
| small               | Whether to use small pagination style                                            | boolean  | —                                | false               |
| class               | Custom class name                                                                | string   | -                                | -                   |
| background          | Whether buttons have background color                                            | boolean  | —                                | false               |
| page-size           | Number of items per page                                                         | number   | —                                | 10                  |
| total               | Total item count                                                                 | number   | —                                | —                   |
| page-count          | Total page count. Either total or page-count can be used to display pages;       | number   | —                                | —                   |
| pager-count         | Number of visible page buttons, will collapse when total pages exceed this value | number   | odd number ≥5 and ≤21            | 7                   |
| current-page        | Current page number                                                              | number   | —                                | 1                   |
| layout              | Component layout, element names separated by commas                              | string[] | `sizes`, `prev`, `pager`, `next` | 'prev, pager, next' |
| prev-text           | Custom text to replace prev icon                                                 | string   | —                                | —                   |
| next-text           | Custom text to replace next icon                                                 | string   | —                                | —                   |
| disabled            | Whether pagination is disabled                                                   | boolean  | —                                | false               |
| hide-on-single-page | Whether to hide when there's only one page                                       | boolean  | —                                | -                   |

### Events

| Event Name  | Description                        | Parameters      |
| ----------- | ---------------------------------- | --------------- |
| size-change | Triggers when page-size changes    | new page size   |
| change      | Triggers when current-page changes | new page number |
