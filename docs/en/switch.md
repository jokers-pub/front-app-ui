## Switch  

Represents a toggle between two mutually exclusive states, primarily used to trigger "on/off" actions.

### Basic Usage  

Bind the `value` to a Boolean variable. Use the `activeColor` and `inactiveColor` properties to set the background colors of the switch.  

!!!demo1!!!  

### Disabled State  

Set the `disabled` attribute, which accepts a Boolean. Set to `true` to disable the switch.  

!!!demo2!!!  

### Text Description  

Use the `activeText` and `inactiveText` properties to set the text descriptions for the switch states.  

!!!demo3!!!  

### Extended Value Types  

Configure the `activeValue` and `inactiveValue` properties, which accept Boolean, String, or Number values.  

!!!demo4!!!  

### Sizes  

!!!demo5!!!  

### Attributes  

| Parameter          | Description                                                | Type                      | Options | Default |  
|--------------------|------------------------------------------------------------|---------------------------|---------|---------|  
| value              | Binding value                                              | string / number / boolean | —       | —       |  
| disabled           | Whether the switch is disabled                             | boolean                   | —       | false   |  
| class              | Custom CSS class                                           | string                    | —       | —       |  
| width              | Width of the switch (in pixels)                            | number                    | —       | 44px    |  
| activeIconClass    | Icon class for the "on" state; overrides `activeText`      | string                    | —       | —       |  
| inactiveIconClass  | Icon class for the "off" state; overrides `inactiveText`   | string                    | —       | —       |  
| activeText         | Text description for the "on" state                        | string                    | —       | —       |  
| inactiveText       | Text description for the "off" state                       | string                    | —       | —       |  
| activeValue        | Value when the switch is "on"                              | boolean / string / number | —       | true    |  
| inactiveValue      | Value when the switch is "off"                             | boolean / string / number | —       | false   |  
| activeColor        | Background color for the "on" state                        | string                    | —       | —       |  
| inactiveColor      | Background color for the "off" state                       | string                    | —       | —       |  
| name               | Name attribute of the switch                               | string                    | —       | —       |  

### Events  

| Event Name | Description                                  | Callback Parameter       |  
|------------|----------------------------------------------|--------------------------|  
| change     | Callback function when switch state changes | The new value after change |  

### Methods  

| Method | Description                  | Parameters |  
|--------|------------------------------|------------|  
| focus  | Focuses the Switch component | -          |