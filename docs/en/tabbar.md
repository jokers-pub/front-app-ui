## Tabbar

A bottom navigation bar for switching between different pages.

### Basic Usage

!!!demo1!!!

### Default Selection

!!!demo2!!!

### Badge Display

Use the `badge` and `dot` properties to configure badges. For detailed usage rules, refer to the **Badge** component specifications.

!!!demo3!!!

### Event Listening

Menu switching can be monitored via the **change** event in `jk-tabbar`. Alternatively, you can register a click event for `jk-tabbar-item` to handle logic.

!!!demo4!!!

### Attributes

| Parameter | Description               | Type | Options | Default |
|----------|---------------------------|------|---------|---------|
| class    | Custom class name         | any  | —       | —       |
| value    | name value of the currently selected item | any  | —       | —       |

### Events

| Event Name | Description              | Parameters                 |
|------------|--------------------------|----------------------------|
| change     | Menu switching event     | string (menu name)         |

### Item Attributes

| Parameter | Description                          | Type     | Options      | Default            |
|-----------|--------------------------------------|----------|--------------|--------------------|
| class     | Custom class name                    | any      | —            | —                  |
| name      | Unique identifier for identifying the current selection | any      | —            | Randomly generated GUID by default |
| title     | Text title of the menu item          | string   | —            | —                  |
| icon      | Icon class name for the menu item    | string   | —            | —                  |
| dot       | Whether to display a red dot indicator | boolean  | true/false   | false              |
| badge     | Content of the displayed badge       | string   | —            | —                  |

### Item Events

| Event Name | Description              | Parameters                                 |
|------------|--------------------------|-------------------------------------------|
| click      | Menu click event         | {name: any, title: string, icon: string}  |

### Item Slots

| Slot Name | Description         |
|-----------|---------------------|
| default   | Custom title        |
| icon      | Custom icon         |