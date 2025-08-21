## Calendar  

The calendar component is used to select dates or date ranges.

### Default Display  

Use the `jk-calendar` component to implement calendar display.  

When `showSwitchButton` is enabled, users can only switch months/years via toggle buttons. When disabled, swiping gestures can be used to navigate months/years.  

**Note**: When `showSwitchButton` is disabled, the panel height must be explicitly configured (default is 100% height).  

!!!demo1!!!  

### Range Selection  

Enable `range` to select date ranges.  

!!!demo2!!!  

### Restricted Selection Range  

Configure `minDate` and `maxDate` to set selectable date boundaries.  

!!!demo3!!!  

### Custom Cell Rendering  

Use the `formatter` property to modify cell content dynamically.  

!!!demo4!!!  

### Date Picker Panel  

Use `jk-calendar-picker` to display the date selection panel.  

!!!demo5!!!  

### Form Field  

Use the `jk-date` component with `type='calendar'` for date selection in forms.  

!!!demo6!!!  

### Calendar Attributes  

| Parameter          | Description                                                                                   | Type                              | Options  | Default |
|--------------------|-----------------------------------------------------------------------------------------------|-----------------------------------|----------|---------|
| title             | Calendar title                                                                                | string                            | -        | -       |
| value             | Currently selected date (or date array for range selection)                                   | Date / [Date, Date]               | -        | -       |
| defaultValue      | Default displayed month/year                                                                  | Date                              | -        | -       |
| minDate           | Minimum selectable date                                                                       | Date                              | -        | -       |
| maxDate           | Maximum selectable date                                                                       | Date                              | -        | -       |
| showWeekNumber    | Whether to display week numbers                                                               | boolean                           | -        | true    |
| showSwitchButton  | Whether to show month/year toggle buttons (disables swipe navigation)                         | boolean                           | -        | -       |
| formatter         | Custom cell formatter function to modify rendering logic                                       | (data: CalendarCellDataType) => void | -        | -       |
| readonly          | Read-only mode (disables date selection)                                                      | boolean                           | -        | -       |
| range             | Enable date range selection                                                                   | boolean                           | -        | -       |

### CalendarCellDataType Definition  

```typescript  
export type CalendarCellDataType = {  
    date: Date; // Cell date  
    type: "normal" \| "prev-month" \| "next-month" \| "today" \| "placeholder"; // Cell type  
    text?: any; // Displayed content  
    disabled?: boolean; // Whether disabled (non-selectable)  
    customClass?: string; // Custom CSS class  
    inRange?: boolean; // Whether within selected range (range mode only)  
    start?: boolean; // Whether range start date (range mode only)  
    end?: boolean; // Whether range end date (range mode only)  
    tip?: string; // Tooltip below cell  
    topTip?: string; // Tooltip above cell  
};  
```  

### Calendar Events  

| Event   | Description                                                                                  | Arguments            |  
|---------|----------------------------------------------------------------------------------------------|----------------------|  
| pick    | Triggers when a date is selected                                                             | Date / [Date, Date]  |  
| change  | Similar to `pick`, but also triggers during range selection when only the start date is set  | Date / [Date, Date]  |  

### Calendar Picker Attributes  

| Parameter          | Description                                                                                                           | Type                                    | Options  | Default (Auto-detected) |  
|--------------------|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------|-------------------------|  
| title             | Picker panel title                                                                                                    | string                                  | -        | -                       |  
| value             | Selected date(s)                                                                                                      | Date / [Date, Date]                     | -        | -                       |  
| defaultValue      | Default displayed month/year                                                                                          | Date                                    | -        | -                       |  
| minDate           | Minimum selectable date                                                                                               | Date                                    | -        | -                       |  
| maxDate           | Maximum selectable date                                                                                               | Date                                    | -        | -                       |  
| showWeekNumber    | Display week numbers                                                                                                  | boolean                                 | -        | true                    |  
| showSwitchButton  | Show month/year toggle buttons (disables swipe)                                                                       | boolean                                 | -        | -                       |  
| size              | Panel size. Priority: Manual value > Auto-detection. Auto-rules: `auto` if `showSwitchButton` enabled; else `60%`      | string                                  | -        | `auto`/`60%`            |  
| formatter         | Cell formatter function                                                                                               | (data: CalendarCellDataType) => void    | -        | -                       |  
| range             | Enable range selection                                                                                                | boolean                                 | -        | -                       |  
| showConfirm       | Show confirmation button                                                                                              | boolean                                 | -        | -                       |  
| confirmText       | Confirmation button text                                                                                              | string                                  | -        | "Confirm"               |  
| validate          | Pre-confirmation validation. Returns `true` to proceed or `false` to cancel and keep panel open                      | (value: Date / [Date, Date]) => boolean | -        | -                       |  

### Calendar Picker Events  

| Event   | Description                  | Arguments            |  
|---------|------------------------------|----------------------|  
| pick    | Triggers on date selection   | Date / [Date, Date]  |  

### Date Calendar Attributes  

| Parameter          | Description                                                                                   | Type       | Options                | Default         |  
|--------------------|-----------------------------------------------------------------------------------------------|------------|------------------------|-----------------|  
| value             | Bound value                                                                                   | string     | —                      | —               |  
| type              | Type                                                                                          | calendar   | —                      | —               |  
| class             | Custom CSS class                                                                               | string     | -                      | -               |  
| disabled          | Disable state                                                                                 | boolean    | —                      | false           |  
| clearable         | Show clear button                                                                             | boolean    | —                      | true            |  
| size              | Input size                                                                                    | string     | large / small / mini   | —               |  
| placeholder       | Placeholder text (non-range mode)                                                             | string     | —                      | —               |  
| format            | Display format                                                                                | string     | -                      | HH:mm:ss        |  
| value-format      | Bound value format (optional)                                                                 | string     | -                      | HH:mm:ss        |  
| default-value     | Default displayed time when opened                                                            | string     | Must match `format`    | —               |  
| prefix-icon       | Custom header icon class                                                                      | string     | —                      | jk-icon-time    |  
| panel-size        | Picker panel size                                                                             | string     | —                      | -               |  
| pick-validate     | See `validate` in Calendar                                                                    | Function   | —                      | -               |  
| cellFormatter     | See `formatter` in Calendar                                                                   | Function   | —                      | -               |  
| range             | Enable range selection                                                                        | boolean    | -                      | -               |  
| showConfirm       | Show confirmation button                                                                      | boolean    | -                      | -               |  
| confirmText       | Confirmation button text                                                                      | string     | -                      | "Confirm"       |  
| minDate           | Minimum selectable date                                                                       | Date       | -                      | -               |  
| maxDate           | Maximum selectable date                                                                       | Date       | -                      | -               |  
| showWeekNumber    | Display week numbers                                                                          | boolean    | -                      | true            |  
| showSwitchButton  | Show month/year toggle buttons (disables swipe)                                               | boolean    | -                      | -               |  

### Date Calendar Events  

| Event   | Description                  | Arguments                     |  
|---------|------------------------------|-------------------------------|  
| change  | Triggers on date selection   | string / [string, string]     |