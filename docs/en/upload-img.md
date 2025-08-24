## Upload Img Component

Used for uploading local images to the server while displaying previews during the upload process. Currently, the Uploader component does not include the interface logic for uploading files to the server; this step needs to be implemented separately.

### Basic Usage

!!!demo1!!!

### Limiting File Quantity

Configure the maximum number of uploadable files via `maxFileCount`.

!!!demo2!!!

### Restricting File Types

Limit uploadable file types using `mimeType` (default: `["image/png", "image/jpeg"]`).

!!!demo3!!!

### Display Size

Set the component display size via the `size` configuration.

!!!demo4!!!

### Simulating Upload

Implement custom upload logic using `before-read` and `before-delete`.

!!!demo5!!!

### Attributes

| Parameter    | Description                                                                                                                          | Type                                   | Options | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- | ------- | ------- |
| class        | Custom styling                                                                                                                       | string                                 | —       | —       |
| size         | Display size                                                                                                                         | large / small / mini                   | —       | —       |
| returnType   | Data type returned as form data. If `before-read` is used for custom upload (returning a server URL), `returnType` switches to `url` | url / file                             | —       | file    |
| disabled     | Whether the component is disabled                                                                                                    | boolean                                | —       | false   |
| maxFileCount | Maximum number of uploadable files                                                                                                   | number                                 | —       |         |
| maxFileSize  | Maximum file size (kb)                                                                                                               | number                                 | —       |         |
| mimeType     | Restricted file types (supports wildcards, e.g., `image/*`)                                                                          | string / string[]                      | —       | —       |
| beforeRead   | Pre-read file operation (for custom upload implementation)                                                                           | (file: File) => any                    | —       |         |
| beforeDelete | Pre-delete file operation (for custom server deletion implementation)                                                                | (index: number, urlOrFile: any) => any | —       |         |
