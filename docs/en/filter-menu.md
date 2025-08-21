## Filter Menu  

A menu-style interactive component that can be quickly invoked, supports multi-dimensional filtering (such as option selection, keyword search, etc.), and provides real-time feedback on filtering results to efficiently narrow down data ranges.

### Basic Usage  

Configure `jk-filter-item` to display filtering options.  

!!!demo1!!!  

### Custom Content  

Custom styling can be achieved through the `default` block in `jk-filter-item`. When customizing content, the title of the filter menu can be adjusted by controlling the `title` property.  

!!!demo2!!!  

### Compact Layout  

For scenarios with excessive filtering conditions, enable `shrink`. When activated, hidden options can be displayed via scrollable content.  

!!!demo3!!!  

### Disabled  

!!!demo4!!!  

> When the filter panel is open, a `no-scroll` identifier is set on the body. However, if your scroll container is not the body, you can listen to the `open` and `close` events to customize scrolling behavior.  

### Menu Attributes  

| Parameter      | Description                                 | Type      | Options | Default |  
| -------------- | ------------------------------------------- | --------- | ------- | ------- |  
| **disabled**   | Whether to disable the filter menu          | boolean   | —       | false   |  
| **shrink**     | Compact mode (enables scrolling for hidden options) | boolean   | —       | false   |  
| **class**      | Custom CSS class for the filter menu        | string    | —       | -       |  

### Menu Events  

| Event Name | Description                | Parameters |  
| ---------- | -------------------------- | ---------- |  
| open       | Triggered when panel opens | -          |  
| close      | Triggered when panel closes | -          |  

### Menu Item Attributes  

| Parameter      | Description                     | Type                                    | Options | Default |  
| -------------- | ------------------------------- | --------------------------------------- | ------- | ------- |  
| **class**      | Custom CSS class for filter item | any                                     | —       | -       |  
| **title**      | Filter menu item title          | string                                  | —       | -       |  
| **value**      | Bound value of filter item      | string                                  | —       | -       |  
| **options**    | List of dropdown options        | Array<{label: string; value: string}>   | —       | -       |  
| **disabled**   | Whether the filter item is disabled | boolean                               | —       | false   |  

### Menu Events  

| Event Name | Description                          | Parameters |  
| ---------- | ------------------------------------ | ---------- |  
| change     | Triggered when an option is selected | -          |  

### Menu Sections  

| Slot Name | Description                | Parameters |  
| --------- | -------------------------- | ---------- |  
| label     | Custom title rendering     | -          |  
| default   | Custom panel content       | -          |