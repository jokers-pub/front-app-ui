## Steps  

A navigation bar that guides users through a multi-step process to complete tasks. The number of steps can be configured based on actual application scenarios, but there must be at least 2 steps.  

### Basic Usage  

A simple step bar.  

Set the `active` property to a `Number` indicating the step index (starting from 0). For fixed-width step bars, set the `space` property, which accepts a `Number` in `px`. If not set, the width will be auto-adjusted. Modify the state of completed steps using the `finishStatus` property.  

!!!demo1!!!  

### Steps with Status  

Displays the status of each step.  

Alternatively, named slots (`title`) can be used for customization. Step configuration can also be done via `sections` instead of properties. All available `sections` names are listed at the end of this documentation.  

!!!demo2!!!  

### Steps with Description  

Each step includes a description of its status.  

!!!demo3!!!  

### Steps with Icons  

Custom icons can be added to the step bar.  

Set icons using the `icon` property. Refer to the Icon component documentation for available icon types. Custom icons can also be added via named `sections`.  

!!!demo5!!!  

### Vertical Steps  

Steps displayed in a vertical direction.  

Simply set the `direction` property of the `jk-steps` element to `vertical`.  

!!!demo6!!!  

### Steps Attributes  

| Parameter | Description | Type | Options | Default |  
|-----------|-------------|------|---------|---------|  
| class     | Custom CSS class | string | - | - |  
| space     | Spacing between steps (in px or percentage). If omitted, spacing adjusts automatically. | number / string | - | - |  
| direction | Display direction | string | `vertical` / `horizontal` | `horizontal` |  
| active    | Sets the currently active step | number | - | 0 |  

### Step Attributes  

| Parameter | Description | Type | Options | Default |  
|-----------|-------------|------|---------|---------|  
| title     | Step title | string | - | - |  
| description | Descriptive text | string | - | - |  
| icon      | Icon | string (icon class name) or custom slot | - | - |  

### Step Slots  

| Name | Description |  
|------|-------------|  
| icon | Custom icon |  
| title | Custom title |  
| description | Custom description |