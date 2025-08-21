# NavBar Navigation Bar

Provides navigation functionality for pages, commonly used at the top of the page.

### Basic Usage

!!!demo1!!!

### Text & Icons on Both Sides

!!!demo2!!!

### Using Custom Blocks

!!!demo3!!!

### Disabling Left/Right Buttons

!!!demo4!!!

### Click Events

!!!demo5!!!

### Attributes

| Parameter         | Description                                                                 | Type      | Accepted Values      | Default   |
| ----------------- | --------------------------------------------------------------------------- | --------- | -------------------- | --------- |
| `class`          | Custom class name for styling the navigation bar                           | `any`     | -                    | -         |
| `title`          | Title text displayed in the center of navigation bar                       | `string`  | -                    | -         |
| `leftText`       | Text content of left button                                                | `string`  | -                    | -         |
| `leftIcon`       | Icon class name for left button (requires project icon library support)    | `string`  | -                    | -         |
| `leftDisabled`   | Whether to disable left button (disabled buttons become unclickable and grayed out) | `boolean` | `true` / `false`    | `false`   |
| `rightText`      | Text content of right button                                               | `string`  | -                    | -         |
| `rightIcon`      | Icon class name for right button (requires project icon library support)   | `string`  | -                    | -         |
| `rightDisabled`  | Whether to disable right button (disabled buttons become unclickable and grayed out) | `boolean` | `true` / `false`    | `false`   |

### Slots

| Slot Name | Description                |
| --------- | -------------------------- |
| default   | Custom rendering for title |
| left      | Custom rendering for left menu |
| right     | Custom rendering for right menu |

### Events

| Event Name    | Description              |
| ------------- | ------------------------ |
| left-click   | Left menu click event    |
| right-click  | Right menu click event   |