## Swipe Carousel

Used for displaying a group of images or content in a loop.

:::warning  
Please switch to mobile mode for viewing as touch events are not supported on PC.  
:::

### Basic Usage  

Applicable for general foundational use cases.  

By combining the `<jk-swiper>` and `<jk-swiper-item>` tags, you can create a carousel. The slide content can be arbitrary and should be placed within the `<jk-swiper-item>` tag.  

!!! demo1 !!!

### Indicator  

The display position of the indicator can be set outside the container.  

The `indicatorPosition` property defines the position of the indicator. By default, it is displayed inside the carousel. Setting it to `outside` will display it externally, while `none` will hide the indicator entirely.  

!!! demo2 !!!

### Direction  

By default, the `direction` is set to `horizontal`. Configuring `direction` to `vertical` will display the carousel in a vertical orientation.  

!!! demo5 !!!

### Carousel Attributes  

| Parameter          | Description                                  | Type      | Accepted Values            | Default     |  
| ------------------ | ------------------------------------------- | --------- | -------------------------- | ----------- |  
| height            | Height of the carousel                      | string    | —                          | —           |  
| class             | Custom class styles                         | string    | —                          | —           |  
| initialIndex      | Index of the initially active slide (0-based) | number    | —                          | 0           |  
| autoplay          | Whether to enable auto-switching            | boolean   | —                          | true        |  
| interval          | Auto-switch interval in milliseconds        | number    | —                          | 3000        |  
| indicatorPosition | Position of the indicator                   | string    | `outside` / `none`         | —           |  
| arrow             | Whether to display navigation arrows        | boolean   | —                          | false       |  
| loop              | Whether to enable looping                   | boolean   | —                          | true        |  
| direction         | Display direction of the carousel           | string    | `horizontal` / `vertical`  | `horizontal`|  

### Carousel Events  

| Event Name  | Description                     | Callback Parameters                                    |  
| ----------- | ------------------------------- | ----------------------------------------------------- |  
| change      | Triggered when slides switch    | Index of the currently active slide and the previous slide's index |  

### Carousel Methods  

| Method Name     | Description                | Parameters                                                                  |  
| --------------- | -------------------------- | --------------------------------------------------------------------------- |  
| setActiveItem   | Manually switch slides     | Target slide index (0-based) or the `name` attribute of the corresponding `<jk-carousel-item>` |  
| prev            | Switch to the previous slide | —                                                                           |  
| next            | Switch to the next slide     | —                                                                           |