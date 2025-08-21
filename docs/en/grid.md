## Grid  

The grid divides the page horizontally into equally spaced blocks, suitable for displaying content or page navigation.

### Basic Usage  

!!!demo1!!!  

### Custom Column Count  

Configure the number of columns per row using the `column-num` property.  

!!!demo2!!!  

### Custom Content  

The component provides three slots: `default`, `title`, and `icon`. The **default** slot allows complete customization of the cell's content.  

!!!demo3!!!  

### Gap Setting  

Use the `gutter` property to set the space between grid items. When using this property, it is recommended to disable the `border` display.  

!!!demo4!!!  

### Badge Hint  

Configure badges using the `badge` and `dot` properties. For specific usage rules, refer to the **Badge** component documentation.  

!!!demo5!!!  

### Grid Attributes  

| Parameter    | Description                                                                                     | Type     | Accepted Values      | Default |  
| ------------ | ---------------------------------------------------------------------------------------------- | -------- | -------------------- | ------- |  
| class        | Custom class name for additional styling control                                               | any      | -                    | -       |  
| column-num   | Number of columns per row                                                                      | number   | Positive integer     | 4       |  
| border       | Whether to display grid borders                                                               | boolean  | true / false         | true    |  
| gutter       | Gap between grid items (unit: px). When set, it is recommended to hide borders.                | number   | Non-negative integer | -       |  

### Grid Item Attributes  

| Parameter | Description                                                                                                  | Type     | Accepted Values      | Default  |  
| --------- | ----------------------------------------------------------------------------------------------------------- | -------- | -------------------- | -------- |  
| class     | Custom cell class name for additional styling control                                                      | any      | -                    | -        |  
| icon      | Icon displayed in the cell (typically an icon class name or icon path)                                     | string   | -                    | -        |  
| title     | Title text displayed in the cell                                                                           | string   | -                    | -        |  
| badge     | Numeric value displayed as a badge in the top-right corner of the cell                                     | string   | -                    | -        |  
| dot       | Whether to display a dot badge in the top-right corner of the cell (lower priority than `badge`)             | boolean  | true / false         | false    |  

### Events  

| Event Name | Description         | Parameters |  
| ---------- | ------------------- | ---------- |  
| click      | Triggered on click  | -          |  

### Slots  

| Name      | Description               |  
| --------- | ------------------------- |  
| default   | Customize entire content  |  
| title     | Customize title           |  
| icon      | Customize icon            |