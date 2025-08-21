## Toast Light Prompt  

A semi-transparent black prompt that appears in the middle of the screen, used for message notifications, loading prompts, operation result notifications, and similar scenarios.

### Text Prompt  

!!!demo1!!!  

### Prompt with Status  

!!!demo2!!!  

### Loading Prompt  

!!!demo3!!!  

### Display Position  

!!!demo4!!!  

### Custom Icon  

!!!demo5!!!  

### Dynamically Updated Content  

!!!demo6!!!  

> The Toast provides a `close` method to close the current prompt when the popup operation object cannot be obtained.  

### Options  

| Parameter     | Description                                                                                     | Type           | Optional Values                | Default Value |  
| ------------- | ----------------------------------------------------------------------------------------------- | -------------- | ------------------------------ | ------------- |  
| message       | Notification message text                                                                       | string         | —                              | —             |  
| type          | Theme                                                                                           | string         | success/warning/info/error     | -             |  
| icon          | Custom icon class name, overrides `type`                                                        | string         | —                              | —             |  
| customClass   | Custom class name                                                                               | string         | —                              | —             |  
| duration      | Display duration in milliseconds. Set to 0 to disable auto-closing.                            | number         | —                              | 3000          |  
| id            | Window ID, used to limit the same business from triggering multiple identical prompts           | string         | —                              | -             |  
| forbidClick   | Whether to disable clicks under the prompt. If set to `true`, a transparent mask will be displayed globally to prevent click-through. | boolean        | —                              | false         |  
| position      | Toast display position. By default, it appears in the center of the screen.                    | `top`/`bottom` | —                              | -             |  

### Methods  

Calling `Toast` returns the current Toast instance. To manually close the instance, call its `close` method.  
| Method Name | Description |  
| ----------- | ----------- |  
| close       | Closes the current Toast |  
| setMessage  | Dynamically updates the prompt message |  

### Events  

| Event Name | Description |  
| ---------- | ----------- |  
| close      | Triggered when the Toast is closed |