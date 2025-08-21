## Collapse Panel  

Expand/Collapse content display  

### Basic Usage  

Basic functionality of a collapsible panel.  

!!!demo1!!!  

### Accordion Mode  

!!!demo2!!!  

### Custom Title  

!!!demo3!!!  

### Lazy Loading  

Enable lazy loading with the `lazy` property. In lazy loading mode, animation effects are disabled as the actual content height cannot be determined upfront.  

!!!demo4!!!  

### Attributes  

| Parameter | Description | Type | Options | Default |  
| --------- | ----------- | ---- | ------- | ------- |  
| value | Currently active panel (string in accordion mode, otherwise Array) | string / Array | - | - |  
| accordion | Whether accordion mode is enabled | boolean | - | false |  

### Events  

| Event Name | Description | Callback Parameters |  
| ---------- | ----------- | ------------------- |  
| change | Triggered when the active panel changes (returns active panel's `name`; type is string in accordion mode, otherwise Array) | name value of the active panel |  

### Item Attributes  

| Parameter | Description | Type | Options | Default |  
| --------- | ----------- | ---- | ------- | ------- |  
| name | Unique identifier | string | - | - |  
| title | Panel title | string | - | - |  
| accordion | Whether accordion mode is enabled | boolean | - | false |  
| lazy | Lazy loading mode (content loads only when expanded) | boolean | - | false |