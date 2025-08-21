## Popover Popup Box  

### Basic Usage  

The properties of Popover are very similar to Tooltip. Therefore, for duplicated properties, please refer to the Tooltip documentation, which will not be elaborated on here.  

The `trigger` property is used to define how the Popover is triggered, supporting two modes: `click` and `manual`.  

!!!demo1!!!  

### Nested Content  

Various types of information can be nested within Popover. Below is an example of nesting a table. Use the `section` slot to replace the `content` property.  

!!!demo2!!!  

### Attributes  

| Parameter    | Description                                  | Type           | Valid Values                                                                                            | Default         |  
| ------------ | -------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------- | --------------- |  
| trigger      | Trigger method                              | String         | click/manual                                                                                           | click           |  
| title        | Title                                       | String         | —                                                                                                      | —               |  
| content      | Displayed content; can also pass DOM via `section` | String         | —                                                                                                      | —               |  
| width        | Width                                       | String, Number | —                                                                                                      | Min-width 150px |  
| placement    | Position where the popover appears          | String         | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom          |  
| disabled     | Whether the Popover is disabled             | Boolean        | —                                                                                                      | false           |  
| offset       | Offset of the popover's position            | Number         | —                                                                                                      | 0               |  
| open-delay   | Delay (ms) before showing on hover trigger  | Number         | —                                                                                                      | —               |  
| close-delay  | Delay (ms) before hiding on hover trigger   | Number         | —                                                                                                      | 200             |  
| appendTo     | Container for element output                | String         | —                                                                                                      | body            |  

### Slots  

| Name        | Description                          |  
| ----------- | ------------------------------------ |  
| default     | HTML content inside the Popover      |  
| reference   | HTML element triggering the Popover  |  

### Events  

| Event Name | Description          | Callback Parameters |  
| ---------- | -------------------- | ------------------- |  
| show       | Triggered when shown | —                   |  
| hide       | Triggered when hidden | —                   |  

### Methods  

| Method Name      | Description                                                                                   | Parameters |  
| ---------------- | ---------------------------------------------------------------------------------------------- | ---------- |  
| show             | In manual mode, use this method to display the Popover                                        | —          |  
| hide             | Actively hides the Popover; calling this method will not be affected by the `closeDelay` debounce | —          |  
| updatePosition   | Manually updates the Popover's position. Commonly used when internal content changes to re-calculate positioning | —          |