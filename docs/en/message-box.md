## MessageBox Modal Dialog  

A set of modal dialog components that mimic system message prompts, used for displaying messages, confirmation dialogs, and input content.  

> In terms of usage scenarios, MessageBox is designed to enhance the system's default `alert`, `confirm`, and `prompt` dialogs. It is suitable for simpler content display. For more complex content, consider using Dialog instead.  

### Message Alert  

Triggered when a user performs an action, this dialog interrupts the operation until the user acknowledges and closes it.  

Call the `MessageBox.alert` method to open a message alert. It simulates the system's `alert` and cannot be closed by pressing ESC or clicking outside the dialog. This example accepts two parameters: `message` and `title`.  

!!!demo1!!!  

### Confirmation Dialog  

Used to prompt users to confirm an action they have triggered and ask whether to proceed.  

Call the `MessageBox.confirm` method to open a confirmation dialog, which simulates the system's `confirm`. The MessageBox component is highly customizable—you can pass an `options` object as the third parameter. The `type` field specifies the message type, which can be `success`, `error`, `info`, or `warning`. Invalid settings will be ignored. Note that the second parameter `title` must be defined as a `String`; if provided as an `Object`, it will be treated as `options`.  

!!!demo2!!!  

### Input Prompt  

Triggered when a user performs an action, this dialog interrupts the operation and prompts the user for input.  

Call the `MessageBox.prompt` method to open an input prompt, which simulates the system's `prompt`. Use `validate` to define a validation function, which can return either a `String` or a `Boolean`. Returning a string means defining a custom error message, while returning `false` triggers the default error message. For precise interaction, it is recommended to return a `String`. Additionally, use `inputPlaceholder` to define a placeholder for the input field.  

`beforeClose` allows custom actions (e.g., data submission) before letting the caller decide whether to close the dialog.  

!!!demo3!!!  

### Using HTML Fragments  

The `message` property supports HTML fragments. By setting `useHtml` to `true`, `message` will be processed as an HTML snippet.  

:::warning  
While the `message` property supports HTML snippets, dynamically rendering arbitrary HTML on a website is highly dangerous as it can lead to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). When `useHtml` is enabled, ensure the `message` content is trustworthy—**never** assign user-submitted content to the `message` property.  
:::  

!!!demo4!!!  

### Queue Display  

Similar to browser-native dialogs, `MessageBox` follows a **first-in-first-out (FIFO)** queue display logic. If needed, use `MessageBox.closeAll` to close all currently displayed dialogs and clear the queue.  

!!!demo5!!!  

### Distinguishing Cancel & Close  

In some scenarios, canceling (clicking the cancel button) and closing (clicking the close button, overlay, or pressing ESC) may have different implications. By default, both actions trigger the Promise's `reject` callback and `callback` with the parameter `'cancel'`. Setting `distinguishCancelAndClose` to `true` differentiates these actions: canceling yields `'cancel'`, while closing yields `'close'`.  

!!!demo6!!!  

### No Title  

!!!demo7!!!  

### Import Method  

Import `MessageBox`:  

```javascript  
import { MessageBox } from "@joker.front/ui";  
```  

The corresponding methods are `MessageBox`, `MessageBox.alert`, `MessageBox.confirm`, and `MessageBox.prompt`, with the same parameters as the global methods.  

### Options  

| Parameter                  | Description                                                                                                                       | Type                                                                                                                                                                                                                            | Accepted Values               | Default                                       |  
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|-----------------------------------------------|  
| title                      | Title of the MessageBox                                                                                                           | string                                                                                                                                                                                                                          | —                              | "Reminder"                                    |  
| message                    | Content body of the MessageBox                                                                                                    | string                                                                                                                                                                                                                          | —                              | —                                             |  
| useHtml                    | Whether to treat `message` as an HTML fragment                                                                                    | boolean                                                                                                                                                                                                                         | —                              | false                                         |  
| type                       | Type of message, affecting the displayed icon                                                                                     | string                                                                                                                                                                                                                          | success / info / warning / error | —                                             |  
| iconClass                  | Custom icon class name (overrides `type`)                                                                                         | string                                                                                                                                                                                                                          | —                              | —                                             |  
| customClass                | Custom CSS class for MessageBox                                                                                                   | string                                                                                                                                                                                                                          | —                              | —                                             |  
| callback                   | Callback after MessageBox closes (alternative to Promise)                                                                         | function(action, instance), where `action` is 'confirm', 'cancel', or 'close'; `instance` is the MessageBox instance for accessing properties/methods                                                                            | —                              | —                                             |  
| closable                   | Whether to show the close button in the top-right corner                                                                          | boolean                                                                                                                                                                                                                         | —                              | true                                          |  
| beforeClose                | Callback before MessageBox closes (pauses closure)                                                                                | function(action, instance, close), where `action` is 'confirm', 'cancel', or 'close'; `instance` is the MessageBox instance; `close` triggers actual closure; read `inputValue` from `instance` for validation                 | —                              | —                                             |  
| distinguishCancelAndClose  | Whether to distinguish between cancel (via Cancel button) and close (via Close button, overlay, or ESC key)                        | boolean                                                                                                                                                                                                                         | —                              | false                                         |  
| showCancelButton           | Whether to show the Cancel button                                                                                                 | boolean                                                                                                                                                                                                                         | —                              | false (true for `confirm`/`prompt` calls)     |  
| showConfirmButton          | Whether to show the Confirm button                                                                                                | boolean                                                                                                                                                                                                                         | —                              | true                                          |  
| cancelButtonText           | Text content for the Cancel button                                                                                                | string                                                                                                                                                                                                                          | —                              | "Cancel"                                      |  
| confirmButtonText          | Text content for the Confirm button                                                                                               | string                                                                                                                                                                                                                          | —                              | "Confirm"                                     |  
| closeOnClickModal          | Whether clicking the overlay closes MessageBox                                                                                    | boolean                                                                                                                                                                                                                         | —                              | true (false for `alert` calls)                |  
| closeOnPressEscape         | Whether pressing ESC closes MessageBox                                                                                            | boolean                                                                                                                                                                                                                         | —                              | true (false for `alert` calls)                |  
| showInput                  | Whether to show an input field                                                                                                    | boolean                                                                                                                                                                                                                         | —                              | false (true for `prompt` calls)               |  
| inputPlaceholder           | Placeholder text for the input field                                                                                              | string                                                                                                                                                                                                                          | —                              | —                                             |  
| validate                   | Input field validation function (returns `Boolean` or `String`—latter defines a custom error message; parameter is input value)   | function                                                                                                                                                                                                                        | —                              | —                                             |  
| center                     | Whether to center-align the MessageBox                                                                                            | boolean                                                                                                                                                                                                                         | —                              | false                                         |  
| roundButton                | Whether to use rounded buttons                                                                                                    | boolean                                                                                                                                                                                                                         | —                              | false                                         |  
| id                         | If configured, only one instance with this ID can appear at a time in the same queue                                              | string                                                                                                                                                                                                                          | —                              | -                                             |  

### Methods  

| Method Name   | Description                     | Parameters          |  
|---------------|---------------------------------|---------------------|  
| close         | Close the current MessageBox    | —                   |  
| setErrorMsg   | Manually set an error message   | errMsg: string      |