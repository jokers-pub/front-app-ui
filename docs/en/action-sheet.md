## ActionSheet

A modal panel that pops up from the bottom, containing multiple contextual action options.

### Basic Usage

!!!demo1!!!

### Displaying Icons

!!!demo2!!!

### Showing Cancel Button

Use `showCancel` to display the cancel button, and customize the cancel button text via `cancel-text`

!!!demo3!!!

### Displaying Descriptions

Configure the `description` parameter or block to display panel descriptions. Alternatively, set the `description` property in `options` to configure item descriptions.

!!!demo4!!!

### Attributes

| Parameter   | Description                                                                                       | Type                                                                               | Options | Default  |
| ----------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------- | -------- |
| options     | Action sheet option list data, each configurable with label, value, disabled state, and icon      | Array&lt;{ label?: string; value?: string; disabled?: boolean; icon?: string }&gt; | —       | —        |
| description | Supplemental description text for the action sheet, used to explain its purpose or option details | string                                                                             | —       | —        |
| showCancel  | Whether to display the cancel button at the bottom of the panel                                   | boolean                                                                            | —       | false    |
| cancelText  | Custom text for the cancel button, only effective when `showCancel` is `true`                     | string                                                                             | —       | "Cancel" |

### Events

| Event Name | Description                   | Parameters |
| ---------- | ----------------------------- | ---------- |
| select     | Triggered after selection     | Item data  |
| cancel     | Triggered when clicked cancel | -          |

### Sections

| Name        | Description                                  |
| ----------- | -------------------------------------------- |
| description | Custom description section                   |
| default     | Custom option rendering (receives item data) |
