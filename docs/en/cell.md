## Cell

The cell is a single display item in a list.

### Basic Usage

!!!demo1!!!

### Card Style

!!!demo2!!!

### Cell Size

!!!demo3!!!

### Display Icon

!!!demo4!!!

### Display Arrow

!!!demo5!!!

### Custom Block Content

!!!demo6!!!

### Vertical Centering

!!!demo7!!!

### Title Alignment

The `title-align` property configures the title alignment. If no **title** or Section Title is specified, the default layout is `top`. In `top` layout, the content area defaults to left alignment, while others default to right alignment.

!!!demo8!!!

### Cell Attributes

| Parameter      | Description                                                                                                                                                                                                         | Type                                   | Options | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ------- | ------- |
| class          | Custom class name for additional styling                                                                                                                                                                            | string                                 | -       | -       |
| title          | Title content of the cell                                                                                                                                                                                           | string                                 | -       | -       |
| description    | Descriptive text of the cell, typically supplementary information to the title                                                                                                                                      | string                                 | -       | -       |
| value          | Numeric or content value of the cell, displayed in the corresponding position of the title or description                                                                                                           | string                                 | -       | -       |
| size           | Size of the cell, affecting the overall display proportion                                                                                                                                                          | "large" \| "small" \| "mini"           | -       | -       |
| icon           | Icon on the left side of the cell, specified by the icon name                                                                                                                                                       | string                                 | -       | -       |
| arrow          | Whether to show an arrow, indicating the cell is clickable or has a redirection behavior                                                                                                                            | boolean                                | -       | false   |
| arrowDirection | Direction of the arrow                                                                                                                                                                                              | 'top' \| 'bottom' \| 'left' \| 'right' | -       | 'right' |
| center         | Whether the cell content is vertically centered                                                                                                                                                                     | boolean                                | -       | false   |
| title-align    | Controls the alignment of the cell title. Takes effect only when `title` or `Section Title` is configured. In `top` layout, content defaults to left-aligned; in `right`/`left`, content defaults to right-aligned. | "top" \| "right" \| "left"             | -       | "left"  |
| class          | Custom Class                                                                                                                                                                                                        | any                                    | -       | -       |

### Cell Sections

| Slot Name   | Description              |
| ----------- | ------------------------ |
| default     | Custom content block     |
| title       | Custom title block       |
| leftIcon    | Custom left icon block   |
| rightIcon   | Custom right icon block  |
| description | Custom description block |

### Cell Group Attributes

| Parameter | Description                                                                                          | Type                         | Options | Default |
| --------- | ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------- | ------- |
| title     | Title of the cell group, used to classify and describe a set of cells                                | string                       | -       | -       |
| inset     | Card mode                                                                                            | boolean                      | -       | false   |
| size      | Size of cells within the group, uniformly affecting the display proportion of all cells in the group | "large" \| "small" \| "mini" | -       | -       |

### Cell Events

| Event Name | Description                   | Parameters  |
| ---------- | ----------------------------- | ----------- |
| click      | Response event after clicking | VNode.Event |
