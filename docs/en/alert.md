## Alert

Used to display important alert messages on a page.

### Basic Usage 

Non-overlay elements on the page that will not disappear automatically.

The Alert component provides four themes, specified by the `type` property, with the default value being `info`.

!!! demo1 !!!

### Themes

The Alert component offers two different themes: `light` and `dark`.

Use the `effect` property to change the theme, with the default being `light`.

!!! demo2 !!!

### Custom Close Button

Customize the close button with text or other symbols.

In the Alert component, you can configure whether it can be closed, the text of the close button, and the callback function upon closing. The `closable` property determines if it can be closed, accepting a boolean value with the default set to `true`. You can use the `closeText` property to replace the default close icon on the right. Note: `closeText` must be a text string. Use the `close` event to specify the callback function when closing.

!!! demo3 !!!

### With Icon

Displays an icon to enhance readability when indicating a particular state.

Set the `showIcon` property to display an icon in the Alert, which helps communicate the intent more effectively.

!!! demo4 !!!

### Centered Text

Use the `center` property to center the text horizontally.

!!! demo5 !!!

### With Auxiliary Text Description

Includes a title and content to provide more detailed explanations.

In addition to the mandatory `title` property, you can set the `description` property to provide supporting text. Auxiliary text supports only single-line content and will wrap automatically.

!!! demo6 !!!

### With Icon and Auxiliary Text 

Finally, here is an example with both an icon and auxiliary text.

!!! demo7 !!!

### Scrolling Display 

When the content exceeds the display area, you can enable the `scrollable` property to scroll the content. Applies only when the `title` parameter is configured.

!!! demo8 !!!

### Attributes

| Parameter     | Description                                   | Type     | Acceptable Values               | Default |
| ------------- | --------------------------------------------- | -------- | ------------------------------- | ------- |
| title         | Title text                                    | string   | -                               | —       |
| type          | Theme type                                    | string   | success/warning/info/error      | info    |
| description   | Auxiliary text. Also configurable via default section | string   | —                               | -       |
| closable      | Whether the alert can be closed               | boolean  | —                               | true    |
| center        | Whether the text is centered                  | boolean  | —                               | false   |
| closeText     | Custom close button text                      | string   | —                               | -       |
| showIcon      | Whether to display an icon                    | boolean  | —                               | false   |
| icon          | Custom icon                                   | string   | —                               | -       |
| effect        | Theme style                                   | string   | light/dark                      | light   |
| class         | Custom class for styling                      | string   | -                               | -       |
| scrollable    | Enable scrolling display                      | boolean  | -                               | -       |

### Events

| Event Name | Description                            | Parameters |
| ---------- | -------------------------------------- | ---------- |
| close      | Triggered when the alert is closed     | -          |

### Slots

| Name      | Description                |
| --------- | -------------------------- |
| title     | Custom title content       |