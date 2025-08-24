## Upload Img 上传图片组件

用于将本地的图片上传至服务器，并在上传过程中展示预览图。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。

### 基础用法

!!!demo1!!!

### 限制文件数量

可通过`maxFileCount`来配置最多文件上传数

!!!demo2!!!

### 限制文件上传类型

可通过`mimeType`来限制文件上传类型，默认为：\["image/png", "image/jpeg"\]

!!!demo3!!!

### 展示尺寸

通过配置`size`设置组件展示大小

!!!demo4!!!

### 模拟上传

可通过`before-read`和`before-delete`来实现自定义上传。

!!!demo5!!!

### Attributes

| 参数         | 说明                                                                                             | 类型                                  | 可选值 | 默认值 |
| ------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------- | ------ | ------ |
| class        | 自定义样式                                                                                       | string                                | —      | —      |
| size         | 展示尺寸                                                                                         | large/small/mini                      | —      | —      |
| returnType   | 作为表单返回的数据类型，当通过`before-read`自定义上传并返回服务端地址时，则returnType将更改为url | url/file                              | —      | file   |
| disabled     | 是否禁用                                                                                         | boolean                               | —      | false  |
| maxFileCount | 最大上传个数                                                                                     | number                                | —      |
| maxFileSize  | 最大上传文件大小（kb）                                                                           | number                                | —      |
| mimeType     | 限制文件类型，支持通配符例如：**(image/\*)**                                                     | string / string[]                     | —      | —      |
| beforeRead   | 文件读取前操作，可实现自定义上传                                                                 | (file: File) => any                   | —      |
| beforeDelete | 文件删除时操作，可实现自定义服务端删除                                                           | (index: number, urlOrFile: any) =>any | —      |

### Events

| 事件名 | 说明       | 参数  |
| ------ | ---------- | ----- |
| change | 值变更时间 | value |
