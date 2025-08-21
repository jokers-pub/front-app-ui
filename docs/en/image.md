## Image Component

An image container that retains native `<img>` tag features, supporting lazy loading, custom placeholders, load failure handling, etc.

### Basic Usage

!!!demo1!!!

### Placeholder Content

!!!demo2!!!

### Load Failure

!!!demo3!!!

### Lazy Loading

!!!demo4!!!

### Large Image Preview

!!!demo5!!!

### Attributes

| Attribute      | Description                                                                 | Type           | Accepted Values                             | Default    |
| ---------------| --------------------------------------------------------------------------- | -------------- | ------------------------------------------- | ---------- |
| src            | Image source (same as native)                                              | string         | —                                           | —          |
| class          | Custom CSS class                                                           | string         | —                                           | —          |
| fit            | Determines how the image fits its container (same as native object-fit)    | string         | fill / contain / cover / none / scale-down  | —          |
| lazy           | Whether to enable lazy loading                                             | boolean        | —                                           | false      |
| preview        | Enable image preview functionality                                         | boolean        | —                                           | —          |
| preview-list   | List of images for preview                                                 | Array<string>  | —                                           | —          |
| preview-index  | Preview image index (when using preview-list, allows directional display)  | number         | —                                           | 0          |
| errMsg         | Error message when loading fails                                           | string         | —                                           | Load failed|

### Events

| Event Name | Description                     | Callback Parameters |
| ---------- | ------------------------------- | ------------------- |
| load       | Triggered when image loads      | (e: Event)          |
| error      | Triggered when loading fails    | (e: Error)          |

### Slots

| Slot Name    | Description                      |
| ------------ | -------------------------------- |
| placeholder  | Content when image is loading    |
| error        | Content when loading fails       |