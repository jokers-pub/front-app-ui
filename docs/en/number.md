## InputNumber Counter

Only permits input of standard numeric values with configurable range limits.

### Basic Usage

To use it, simply bind a variable to `value` within the `jk-number` element. The initial value of the variable serves as the default value.

!!!demo1!!!

### Disabled State

The `disabled` attribute accepts a `Boolean`. Setting it to `true` disables the entire component. If you only need to constrain the value within a specific range, configure the `min` and `max` attributes. When neither `min` nor `max` is set, the default minimum value is 0.

!!!demo2!!!

### Step

Allows defining increment/decrement step control.

Set the `step` attribute to control the step increment. Accepts a `Number`.

!!!demo3!!!

### Strict Step

The `step-strictly` attribute accepts a `Boolean`. When set to `true`, only multiples of the step value can be entered.

!!!demo4!!!

### Precision

Configure the `precision` attribute to control numeric precision. Accepts a `Number`.

!!!demo5!!!

> The `precision` value must be a non-negative integer and cannot be less than the number of decimal places in the `step` value.

### Sizes

Additional numeric input box sizes are provided: `medium`, `small`, and `mini`.

!!!demo6!!!

### Hide Control Buttons

Set the `show-controls` attribute to control button visibility.

!!!demo8!!!

### Attributes

| Parameter     | Description                             | Type    | Options           | Default   |
| ------------- | --------------------------------------- | ------- | ----------------- | --------- |
| value         | Bound value                             | number  | —                 | —         |
| class         | Custom class styles                     | string  | -                 | -         |
| min           | Minimum allowed value                   | number  | —                 | -Infinity |
| max           | Maximum allowed value                   | number  | —                 | Infinity  |
| step          | Step increment                          | number  | —                 | 1         |
| step-strictly | Whether only step multiples are allowed | boolean | —                 | false     |
| precision     | Numeric precision                       | number  | —                 | —         |
| size          | Counter size                            | string  | large, small,mini | —         |
| disabled      | Whether the counter is disabled         | boolean | —                 | false     |
| show-controls | Whether to show control buttons         | boolean | —                 | false     |
| name          | Native attribute                        | string  | —                 | —         |
| label         | Label text associated with the input    | string  | —                 | —         |
| placeholder   | Default input placeholder               | string  | -                 | -         |
| type          | Input Type                              | string  | -                 | number    |

### Events

| Event Name | Description                        | Callback Parameters    |
| ---------- | ---------------------------------- | ---------------------- |
| change     | Triggered when bound value changes | currentValue, oldValue |
| blur       | Triggered when Input loses focus   | VNode.Event            |
| focus      | Triggered when Input gains focus   | VNode.Event            |

### Methods

| Method | Description                   | Parameters |
| ------ | ----------------------------- | ---------- |
| blur   | Makes input lose focus        | -          |
| focus  | Makes input gain focus        | -          |
| select | Selects text within the input | —          |
