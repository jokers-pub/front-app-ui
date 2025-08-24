## Date Picker

For selecting or inputting dates

### Basic Usage

!!!demo1!!!

### Additional Date Units

Extend the basic date picker to select week, month, or year.

!!!demo2!!!

### Input Field

Use with `jk-date` in forms.

!!!demo3!!!

:::warning  
Please note the case sensitivity. Internally, it uses `dayjs` for time calculations and formatting. For detailed format values, refer to [dayjs](https://dayjs.fenxianglu.cn/).  
:::

### Date Picker Attribute

| Parameter    | Description                | Type                                                                              | Options | Default                    |
| ------------ | -------------------------- | --------------------------------------------------------------------------------- | ------- | -------------------------- |
| format       | Value formatting rule      | string                                                                            | —       | YYYY-MM-DD/YYYY-MM/YYYY-ww |
| defauleValue | Default display value      | string                                                                            | —       | —                          |
| value        | Value                      | string                                                                            | —       | —                          |
| filter       | Option filtering           | (date: { year?: number; month?: number; day?: number; week?: number }) => boolean | —       | —                          |
| labelFormat  | Custom column text display | (value: number, type: string) => string                                           | —       | jk-icon-time               |

### Time Select Events

| Event Name | Description                     | Parameters |
| ---------- | ------------------------------- | ---------- |
| pick       | Triggered after value selection | string     |

### Date Attributes

| Parameter     | Description                         | Type                                                                              | Options              | Default      |
| ------------- | ----------------------------------- | --------------------------------------------------------------------------------- | -------------------- | ------------ |
| value         | Bound value                         | string                                                                            | —                    | —            |
| type          | Type                                | year/month/date/week                                                              | —                    | —            |
| class         | Custom class styling                | string                                                                            | -                    | -            |
| disabled      | Disabled state                      | boolean                                                                           | —                    | false        |
| clearable     | Whether to show the clear button    | boolean                                                                           | —                    | true         |
| size          | Input field size                    | string                                                                            | large / small / mini | —            |
| placeholder   | Placeholder for non-range selection | string                                                                            | —                    | —            |
| format        | Display value format                | string                                                                            | -                    | HH:mm:ss     |
| value-format  | Optional bound value format         | string                                                                            | -                    | HH:mm:ss     |
| default-value | Default display time when opened    | string                                                                            | Must match `format`  | —            |
| prefix-icon   | Custom header icon class name       | string                                                                            | —                    | jk-icon-time |
| labelFormat   | Custom column text display          | (value: number, type: string) => string                                           | —                    | jk-icon-time |
| filter        | Option filtering                    | (date: { year?: number; month?: number; day?: number; week?: number }) => boolean | —                    | —            |

### Date Events

| Event Name | Description                            | Parameters                                   |
| ---------- | -------------------------------------- | -------------------------------------------- |
| change     | Triggered when user confirms selection | Value (formatted according to `valueFormat`) |
