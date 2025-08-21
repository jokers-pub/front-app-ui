## Tabs

Separate content collections that are related but belong to different categories.

### Basic Usage

Basic and concise tabs.

!!!demo1!!!

### Default Display

Set the default active tab via the `value` property.

!!!demo2!!!

### Custom Tab Title

Use the **label** slot in `jk-tab-panel` to customize tab headers.

!!!demo3!!!

### Card Style

Enable card-style tabs by configuring the `card` property.

!!!demo4!!!

### Scrollable Title Bar

When the number of tabs exceeds the `swipeThreshold`, the title bar becomes scrollable.

!!!demo5!!!

### Shrink Layout

Enable the shrink layout with the `shrink` property.

!!!demo6!!!

### Click Event

!!!demo7!!!

### Sticky Layout

Enable sticky layout with the `sticky` property. When scrolling to the top, sticky tabs automatically affix to the viewport.

!!!demo8!!!

### Transition Animation

Enable transition animation with the `animated` property.

!!!demo9!!!

### Dynamic Add/Remove

!!!demo10!!!

### Attributes

| Parameter      | Description                                                        | Type    | Options | Default |
| -------------- | ------------------------------------------------------------------ | ------- | ------- | ------- |
| value          | Default active tab value (corresponds to `name` in `tab-panel`)    | string  | —       | —       |
| card           | Card theme                                                         | boolean | —       | false   |
| shrink         | Whether to enable shrink layout                                    | boolean | —       | false   |
| class          | Custom class name                                                  | string  | —       | —       |
| swipeThreshold | Threshold for enabling title bar scrolling                         | number  | —       | 5       |
| sticky         | Whether to enable sticky layout (auto affix when scrolling to top) | boolean | —       | false   |
| animated       | Whether to enable transition animation                             | boolean | —       | false   |
| full-height    | Is flex layout used to achieve 100% height                         | boolean | -       | false   |

### Events

| Event Name | Description                       | Parameters    |
| ---------- | --------------------------------- | ------------- |
| change     | Triggered when active tab changes | Tab item info |
| click      | Triggered when tab is clicked     | Tab item info |
