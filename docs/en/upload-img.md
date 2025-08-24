## Upload Img Component

Used for uploading local images to the server while displaying previews during the upload process. Note that the Uploader component does not include the interface logic for uploading files to the server - this step needs to be implemented separately.

### Basic Usage

!!!demo1!!!

### File Quantity Limit

Configure the maximum number of uploadable files via `maxFileCount`

!!!demo2!!!

### File Type Restrictions

Restrict upload file types using `mimeType`. Default values: ["image/png", "image/jpeg"]

!!!demo3!!!

### Display Size

Configure component display size via `size`

!!!demo4!!!

### Simulated Upload

Implement custom upload logic using `before-read` and `before-delete`.

!!!demo5!!!

### Attributes

| Parameter     | Description                                                                                             | Type                                  | Options | Default |
|--------------|---------------------------------------------------------------------------------------------------------|---------------------------------------|---------|---------|
| class        | Custom styles                                                                                           | string                                | —       | —       |
| size         | Display size                                                                                            | large/small/mini                      | —       | —       |
| returnType   | Data type returned for form submission. When using `before-read` for custom upload with server URLs, returnType changes to url | url/file                              | —       | file    |
| disabled     | Whether disabled                                                                                        | boolean                               | —       | false   |
| maxFileCount | Maximum upload count                                                                                    | number                                | —       |         |
| maxFileSize  | Maximum upload file size (KB)                                                                           | number                                | —       |         |
| mimeType     | File type restrictions, supports wildcards e.g. **(image/\*)**                                          | string / string[]                     | —       | —       |
| beforeRead   | Pre-read file operation for implementing custom upload                                                  | (file: File) => any                   | —       |         |
| beforeDelete | File deletion operation for implementing custom server deletion                                         | (index: number, urlOrFile: any) =>any | —       |         |

### Events

| Event Name | Description       | Parameters  |
|-----------|-------------------|-------------|
| change    | Value change event | value       |