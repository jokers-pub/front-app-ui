## Scrollbar

Used as a replacement for native browser scrollbars.

### Basic Usage

Define the scrollbar height by setting the `height` property. If not set, it will adapt based on the parent container's height.

!!!demo1!!!

### Horizontal Scrolling

!!!demo2!!!

### Setting Maximum Size

Control when the scrollbar triggers by setting boundary values on the parent container, such as `max-width` and `max-height`.

!!!demo3!!!

### Manual Scrolling

Use the scrollTo method to manually control the scrollbar's position.

!!!demo4!!!

### Pull-to-Refresh

Configure the `pullRefresh` property to set up pull-to-refresh functionality.

!!!demo5!!!

Custom pull-down display

!!!demo6!!!

**pulldown** parameters are as follows:

```ts
 {
    enable: boolean; // Enable pull-down functionality  
    class: any; // Custom styles  
    height: number; // Set pull-down container height, default is 40  
    text: string; // Default text: "Pull down to refresh..."  
    loosingText: string; // Default text: "Release to refresh..."  
    loadingText: string; // Default text: "Loading..."  
    load?: () => any; // Loading method supports async  
 }
```

### Attributes

| Parameter    | Description                                                                 | Type    | Options | Default |
| ------------ | --------------------------------------------------------------------------- | ------- | ------- | ------- |
| native       | Whether to use native interaction                                           | boolean | —       | false   |
| wrapClass    | Additional styles for the wrap element                                      | string  | —       | -       |
| viewClass    | Additional styles for the view element                                      | string  | —       | -       |
| class        | Additional root-level styles                                                | string  | —       | -       |
| noresize     | Do not respond to container size changes. Optimizes performance if container size remains static | boolean | —       | false   |
| tag          | HTML tag for the output element                                             | string  | —       | div     |
| height       | Custom height, defaults to parent container value if not set                | string  | —       | -       |
| width        | Custom width, defaults to parent container value if not set                 | string  | —       | -       |
| max-height   | Custom maximum height, defaults to parent container value if not set        | string  | —       | -       |
| max-width    | Custom maximum width, defaults to parent container value if not set         | string  | —       | -       |
| pulldown     | Pull-down configuration (for details, refer to the above pulldown parameters) | object  | —       | -       |

### Sections

| Section Name | Description                | Parameters                                   |
| ------------ | -------------------------- | -------------------------------------------- |
| default      | Default content            | -                                            |
| pulldown     | Custom pull-down section   | Pull distance (max equals container height), whether loading |

### Methods

| Method Name | Description                                                  | Parameters                      |
| ----------- | ------------------------------------------------------------ | ------------------------------- |
| scrollTo    | Scroll to a position                                         | Refer to `ScrollToOptions`      |
| scrollToEl  | Scroll to the position of a specified element                | HTMLElement                     |
| update      | Recalculate scrollbar (use when internal elements are added/removed) | callBack Executes after calculation |

### Events

| Event Name | Description                      | Callback Parameters                                                                                         |
| ---------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| scroll     | Triggered when scroll position changes | {top:number,left:number,x:number,y:number,isUserScroll?:boolean}, where x and y represent scroll direction progress |