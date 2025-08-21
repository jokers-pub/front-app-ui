## Upload Btn Component  

Provides interactive file selection button functionality.

### Basic Usage

!!!demo1!!!

### Multiple File Upload  

Enable multi-file selection by configuring the `multiple` property.

!!!demo2!!!

### File Type Restrictions  

Control acceptable file types using the `mimeType` property, which accepts values of type `string` or `string[]`.

!!!demo3!!!

### File Size Limit  

Configure the `maxFileSize` property to restrict maximum file size (unit: **kb**).

!!!demo4!!!

### Custom Upload Display  

Hide default upload button with `hidden` property and implement custom upload via method calls.

!!!demo5!!!

### Attributes  

| Parameter    | Description                                             | Type               | Options | Default |
|-------------|--------------------------------------------------------|--------------------|---------|---------|
| icon        | Button icon                                             | string             | —       | —       |
| btnType     | Button type (aligns with jk-button's type property)    | string             | —       | —       |
| title       | Button text (overridden if default slot is specified)  | string             | —       | —       |
| btnSize     | Button size (aligns with jk-button's size property)    | string             | —       | —       |
| disabled    | Disabled state                                         | boolean            | —       | false   |
| multiple    | Enable multi-selection                                 | boolean            | —       | false   |
| maxFileCount| Maximum number of uploads                             | number             | —       | —       |
| mimeType    | Allowed file types (supports wildcards, e.g. "image/*")| string / string[]  | —       | —       |
| maxFileSize | Maximum file size limit per file (in **kb**)          | number             | —       | —       |
| hidden      | Hide button (only available via method calls)         | boolean            | —       | —       |

### Events  

| Event Name | Description          | Callback Parameters |
|-----------|----------------------|---------------------|
| change    | Value change event   | —                   |

### Methods  

| Method Name    | Description                                      | Parameters |
|---------------|--------------------------------------------------|------------|
| selectFile    | Open file selection dialog                      | —          |
| reloadUpload  | Reset upload data (for re-selecting same files) | —          |