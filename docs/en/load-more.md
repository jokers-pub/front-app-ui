## LoadMore

Triggers loading event when scrolling to the bottom or when the control enters the viewport, enabling infinite loading functionality.

### Basic Usage

!!!demo1!!!

### Lazy Loading

When content does not fill a full page, users can click to manually load more.

> This scenario is suitable for ultra-long screens or when the initial data volume is too small.

!!!demo2!!!

:::warning
If the control is displayed during initial rendering due to insufficient content length, it may trigger duplicate loading logic. It is recommended to consistently use this control for initial resource loading.
:::

### Attributes

| Parameter       | Description                                                                                          | Type      | Options      | Default        |
| --------------- | ---------------------------------------------------------------------------------------------------- | --------- | ------------ | -------------- |
| **class**       | Custom class name for overriding default component styles                                            | any       | -            | -              |
| **text**        | Default loading state hint text (displayed when neither loading nor no-data state)                   | string    | -            | "Load More"    |
| **noMore**      | Whether in "no more data" state. When `true`, displays `noMoreText` and disables loading events      | boolean   | true / false | false          |
| **loadingText** | Loading state hint text (displayed when loading logic is triggered)                                  | string    | -            | "Loading..."   |
| **noMoreText**  | "No more data" state hint text (displayed when `noMore` is `true`)                                   | string    | -            | "No more data" |
| **load**        | Callback function executed when loading is triggered, supports async operations (e.g., API requests) | () => any | -            | -              |

### Sections

| Name    | Description          | Parameters                            |
| ------- | -------------------- | ------------------------------------- |
| default | Custom title content | state status: ''\|'loading'\|'noMore' |
