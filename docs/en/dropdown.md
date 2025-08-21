## Dropdown Menu

Display a dropdown menu by clicking or hovering.

### Basic Usage

Use the `Section` component to set the trigger element for displaying the dropdown menu.

!!!demo1!!!

### Split Button Style

Configure the `split-button` property to present the trigger element as a button group.

!!!demo2!!!

### Menu Styling  

Rich menu options can be displayed by configuring properties such as icons and dividers for menu items.

!!!demo3!!!

Of course, you can also choose not to populate the dropdown menu with `jk-dropdown-item` components and instead use a custom approach.

!!!demo4!!!  

### Disabled    

Enable disable state by setting the `disabled` property. This automatically handles button state changes in `split-button` mode. For non-split-button mode, please manage disable styles for content manually.

!!!demo5!!!

### Dropdown Attributes

| Parameter     | Description                                                                 | Type     | Options               | Default  |
|--------------|---------------------------------------------------------------------------|----------|-----------------------|----------|
| type         | Menu button type, same as Button component (only effective when `split-button` is true) | string   | —                    | primary  |
| size         | Also applies to trigger button when `split-button` is true                 | string   | large / small / mini | —        |
| split-button | Whether to present trigger element as button group                        | boolean  | —                    | false    |
| disabled     | Whether menu is disabled                                                  | boolean  | —                    | false    |

### Dropdown Events  

| Event Name | Description                                                                                                | Parameters |
|-----------|----------------------------------------------------------------------------------------------------------|------------|
| click     | Callback when left button is clicked in `split-button` mode. For non-`split-button`, handles click event bubbling. | —          |

### Dropdown Menu Attributes  

| Parameter   | Description         | Type   | Options                                                                                                    | Default      |
|------------|-------------------|--------|----------------------------------------------------------------------------------------------------------|--------------|
| placement | Menu position      | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom-start |
| maxHeight | Maximum height     | string | -                                                                                                       | -            |

### Dropdown Menu Item Attributes  

| Parameter | Description       | Type    | Options | Default |
|----------