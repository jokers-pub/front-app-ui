## TimePicker

Used for selecting or inputting time values

### Fixed Time Points

Provides predefined time points for user selection

Use the `jk-time-select` tag, specifying available start time, end time, and interval through `start`, `end`, and `step` properties respectively.

!!!demo1!!!

### Fixed Time Range

When start time is selected first, the available options in the end time will dynamically adjust accordingly.

!!!demo2!!!

### Arbitrary Time Points

Allows selection of any time value. Uses the `jk-time-picker` tag, with optional constraints through `minTime`/`maxTime`.  
Control second display via the `format` configuration.

!!!demo3!!!

### Disabled State

!!!demo5!!!

### Sizes

Refer to `input` size attributes

!!!demo6!!!

### Time Select Attributes

| Parameter    | Description                                       | Type   | Options | Default |
| ------------ | ------------------------------------------------- | ------ | ------- | ------- |
| start        | Start time                                        | string | —       | 09:00   |
| end          | End time                                          | string | —       | 18:00   |
| step         | Time interval                                     | string | —       | 00:30   |
| minTime      | Minimum time (times before this will be disabled) | string | —       | 00:00   |
| maxTime      | Maximum time (times after this will be disabled)  | string | —       | —       |
| format       | Value format                                      | string | —       | HH:mm   |
| defaultValue | Default display value                             | string | —       | —       |
| value        | Current value                                     | string | —       | —       |

### Time Select Events

| Event | Description                      | Parameters |
| ----- | -------------------------------- | ---------- |
| pick  | Triggered when value is selected | string     |

### Time Picker Attributes

| Parameter       | Description                                                                                                      | Type                                    | Options                                   | Default      |
| --------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ----------------------------------------- | ------------ |
| format          | Value format                                                                                                     | string                                  | —                                         | HH:mm:ss     |
| defaultValue    | Default display value                                                                                            | string                                  | —                                         | —            |
| value           | Current value                                                                                                    | string                                  | —                                         | —            |
| selectableRange | Selectable time ranges (e.g. '18:30:00 - 20:30:00' or array like ['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']) | string/array                            | —                                         | —            |
| format          | Time format                                                                                                      | string                                  | hours: `HH`, minutes: `mm`, seconds: `ss` | 'HH:mm:ss'   |
| labelFormat     | Custom column display text                                                                                       | (value: number, type: string) => string | —                                         | jk-icon-time |

### Time Picker Events

| Event | Description                      | Parameters                                     |
| ----- | -------------------------------- | ---------------------------------------------- |
| pick  | Triggered when value is selected | {hours:number, minutes:number, seconds:number} |

### Date Attributes

| Parameter     | Description                              | Type                                    | Options              | Default      |
| ------------- | ---------------------------------------- | --------------------------------------- | -------------------- | ------------ |
| value         | Bound value                              | string                                  | —                    | —            |
| type          | Control type                             | 'time'/'time-select'                    | —                    | —            |
| class         | Custom CSS class                         | string                                  | —                    | —            |
| disabled      | Disabled state                           | boolean                                 | —                    | false        |
| clearable     | Whether to show clear button             | boolean                                 | —                    | true         |
| size          | Input size                               | string                                  | large / small / mini | —            |
| placeholder   | Placeholder for non-range selection      | string                                  | —                    | —            |
| format        | Display format                           | string                                  | —                    | HH:mm:ss     |
| value-format  | Optional bound value format              | string                                  | —                    | HH:mm:ss     |
| default-value | Default time displayed when picker opens | string                                  | Matches format       | —            |
| prefix-icon   | Custom header icon class                 | string                                  | —                    | jk-icon-time |
| labelFormat   | Custom column display text               | (value: number, type: string) => string | —                    | jk-icon-time |

### Date Events

| Event  | Description                            | Parameters                        |
| ------ | -------------------------------------- | --------------------------------- |
| change | Triggered when user confirms selection | Value (formatted per valueFormat) |
