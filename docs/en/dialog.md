## Dialog  

Displays a dialog box while preserving the current page state, providing relevant information and operations to the user.

### Basic Usage  

The Dialog component pops up a dialog box, suitable for scenarios requiring greater customizability.  

The `open`/`close` methods of the component are used to control the visibility of the dialog. A Dialog consists of two parts: `body` and `footer`. The `footer` must be a named `section` with the slot name `footer`. The `title` attribute defines the title and is optional, defaulting to an empty string. This example also demonstrates the usage of `before-close`.  

!!!demo1!!!  

> The `before-close` callback only takes effect when the user closes the Dialog by clicking the close icon or the modal overlay.  

### Nested Dialogs  

To nest one Dialog inside another, it is necessary to set the `append-to` property to `body`.  

Normally, we do not recommend using nested Dialogs. If multiple Dialogs need to be displayed on the page simultaneously, they should be placed at the same level. For scenarios where nested Dialogs are unavoidable, the `append-to` attribute is provided. **Refer to the core documentation for details on `append-to`.** When the inner Dialog’s `append-to` property is set to `body`, it will be inserted into the `body` element, ensuring the correct layering relationship between nested Dialogs and the modal overlay.  

!!!demo2!!!  

> The `append-to` attribute only affects the DOM output structure and has no impact on the VNode data structure. It will still be created according to the development-time data hierarchy and follow parent-child component destruction mechanisms, requiring minimal manual intervention.  

:::warning  
The content of Dialog is lazily rendered. Before being opened for the first time, the default slots passed will not be rendered to the DOM. Therefore, if DOM operations are required, or if components need to be accessed via `ref`, perform these actions within the `open` event callback.