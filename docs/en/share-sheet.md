## ShareSheet  

A bottom pop-up panel for sharing that displays action buttons corresponding to various sharing channels, without including the specific sharing logic.  

### Basic Usage  

!!!demo1!!!  

### Title & Description  

!!!demo2!!!  

### Disabling Items  

!!!demo3!!!  

### Custom Icons  

The `icon` property can accept any font icon or an image URL.  

> The following shortcut ICONs are provided by default: `"wechat"`, `"weibo"`, `"qq"`, `"link"`, `"qrcode"`, `"poster"`.  

!!!demo4!!!  

### Attributes  

| Parameter       | Description                                                                                                       | Type                                                                                                                     | Accepted Values                                                                                                                                                          | Default  |
| --------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| **title**       | The title text of the sharing panel, used to describe the sharing context or purpose. The title area is hidden if not provided. | string                                                                                                                   | -                                                                                                                                                                        | -        |
| **options**     | Configuration array for sharing channels, where each item corresponds to a sharing button's settings.              | Array<{label: string; // Sharing channel name (e.g., "WeChat Friends")icon: string; // Sharing icondisabled: boolean; // Whether the sharing channel is disabled}> | `icon` options: - Shortcut ICONs: `"wechat"`, `"weibo"`, `"qq"`, `"link"`, `"qrcode"`, `"poster"` - Font icon classes (e.g., `"iconfont icon-custom"`) - Image URL (e.g., `"https://xxx.com/icon.png"`) | -        |
| **cancelText**  | The text content of the bottom cancel button, used to close the sharing panel.                                     | string                                                                                                                   | -                                                                                                                                                                        | "Cancel" |  

### Events  

| Event Name | Description                      | Parameters |
| ---------- | -------------------------------- | ---------- |
| select     | Triggered when a sharing channel is selected. | Array item |
| cancel     | Triggered when the cancel button is clicked.  | -          |  

### Slots  

| Name          | Description              |
| ------------- | ------------------------ |
| title         | Custom title section     |
| description   | Custom description section |