## Drawer Component  

The Drawer component provides nearly identical APIs to `Dialog`, but delivers a distinct user interface experience.  

### Basic Usage  

Displays a sidebar that can slide in from multiple directions.  

!!!demo1!!!  

### Multi-level Nesting  

Supports multi-level nesting with automatic `z-index` management within the component.  

!!!demo2!!!  

### Attributes  

| Attribute   | Description           | Type     | Allowed Values           | Default |
| ----------- | --------------------- | -------- | ------------------------ | ------- |
| direction   | Slide-in direction    | string   | left/top/right/bottom    | right   |
| size        | Dimensions when expanded | string   | -                        | 30%     |
| title       | Title text            | string   | -                        | -       |
| showHeader  | Whether to show the header toolbar | boolean  | -                        | true    |

### Slots  

| Slot       | Description       |  
| ---------- | ----------------- |  
| default    | Main content area |  
| title      | Title area        |  

### Methods  

| Method  | Description | Parameters | Returns |  
| ------- | ----------- | ---------- | ------- |  
| open    | Opens drawer | -          | -       |  
| close   | Closes drawer | -         | -       |  

### Events  

| Event   | Description      | Parameters |  
| ------- | ---------------- | ---------- |  
| open    | Triggered upon opening | -          |  
| close   | Triggered upon closing | -          |