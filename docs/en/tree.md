## Tree Control

Displays information in a clear hierarchical structure that can be expanded or collapsed.

### Basic Usage

Demonstrates basic tree structure display.

!!!demo1!!!

### Selectable

Suitable for scenarios requiring hierarchical selection. This demo also showcases dynamic loading.

!!!demo2!!!

### Node Disabling and Selection

Nodes can be disabled by setting the `disabled` property, which is typically used in conjunction with `show-checkbox`.

This example also demonstrates how to retrieve and set selected nodes. If you wish to get/set nodes by **key**, it is recommended to configure the corresponding `node-key`.

> If `node-key` is not configured or its value is undefined, an internal id will be automatically generated as the key.

!!!demo3!!!

### Custom Node Template

The `section` component can be used to implement custom node template displays.

!!!demo4!!!

### Node Filtering

Filter nodes by keywords by calling the `filter` method of the Tree instance, passing the keyword as a parameter. Note that in this case, you need to set `filter-method`, whose value is the filtering function. By default, this method performs string filtering based on the node's label.

!!!demo5!!!

### Non-associative Mode

Enable the `check-strictly` property to activate non-associative mode. When checkboxes are displayed, this ensures strict adherence to parent-child disassociation.

!!!demo7!!!

### Attributes

| Attribute              | Description                                                                                                                                                       | Type                      | Accepted Values | Default      |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|-----------------|--------------|
| data                   | Data to display                                                                                                                                                  | array                     | —               | —            |
| class                  | Custom class style                                                                                                                                               | string                    | -               | -            |
| empty-text             | Text displayed when content is empty                                                                                                                             | String                    | —               | —            |
| empty-size             | Empty panel size                                                                                                                                                 | String                    | —               | —            |
| node-key               | Unique identifier for each tree node; should be unique across the entire tree                                                                                    | String                    | —               | —            |
| load                   | Method for loading subtree data; only takes effect when the `lazy` property is true                                                                              | function(node, resolve)   | —               | —            |
| default-expand-all     | Whether to expand all nodes by default                                                                                                                           | boolean                   | —               | false        |
| expand-on-click-node   | Whether to expand or collapse a node when clicking it. Default is `true`. If `false`, nodes only expand/collapse when clicking the arrow icon.                   | boolean                   | —               | true         |
| check-on-click-node    | Whether to select a node when clicking it. Default is `false`, meaning nodes are only selected when clicking the checkbox.                                       | boolean                   | —               | false        |
| default-expanded-keys  | Array of keys for nodes expanded by default                                                                                                                      | array                     | —               | —            |
| show-checkbox          | Whether nodes are selectable                                                                                                                                     | boolean                   | —               | false        |
| default-checked-keys   | Array of keys for nodes checked by default                                                                                                                       | array                     | —               | —            |
| current-node-key       | Currently selected node                                                                                                                                          | string, number            | —               | —            |
| filter-method          | Filter function executed when filtering tree nodes. Returns `true` to display the node or `false` to hide it.                                                   | Function(node,value)      | —               | —            |
| indent                 | Horizontal indentation between adjacent nodes in pixels                                                                                                          | number                    | —               | 16           |
| icon-class             | Custom icon for tree nodes                                                                                                                                       | string                    | -               | -            |
| lazy                   | Whether to lazily load child nodes; must be used with the `load` method                                                                                         | boolean                   | —               | false        |
| labelKey               | Specifies the node label as an attribute of the node object                                                                                                      | string                    | —               | label        |
| childrenKey            | Specifies the subtree as an attribute of the node object                                                                                                         | string                    | —               | children     |
| disabledKey            | Specifies whether the node's checkbox is disabled as an attribute of the node object                                                                             | string                    | —               | disabled     |
| expandKey              | Specifies whether a node is expanded by default as an attribute of the node object                                                                               | string                    | —               | expand       |
| isLeafKey              | Specifies whether a node is a leaf node; only takes effect when `lazy` is specified                                                                              | string                    | —               | isLeaf       |
| virtualKey             | Advanced usage: whether the node is virtual. Virtual nodes are not included in the checkbox selection process. Mainly effective when selection is enabled.         | string                    | —               | isVirtualNode|
| check-strictly         | Whether to strictly adhere to parent-child disassociation when checkboxes are displayed                                                                          | boolean                   | -               | false        |

### Methods

The `Tree` internally uses objects of type `Node` to wrap user-provided data and maintain node states.  
The `Tree` provides the following methods:

| Method            | Description                                                                                                                                                                     | Parameters                                                                                                                                                  |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| filter            | Filters tree nodes                                                                                                                                                             |                                                                                                                                                            |
| getCheckedNodes   | If nodes are selectable (i.e., `show-checkbox` is `true`), returns an array of currently selected nodes                                                                        | (leafOnly, includeHalfChecked) Accepts two boolean parameters: 1) Whether to include only leaf nodes (default: `false`), 2) Whether to include half-selected nodes (default: `false`) |
| getCheckedKeys    | If nodes are selectable (i.e., `show-checkbox` is `true`), returns an array of keys of currently selected nodes                                                                | (leafOnly, includeHalfChecked) Accepts two boolean parameters: 1) Whether to include only leaf nodes (default: `false`), 2) Whether to include half-selected nodes (default: `false`) |
| setCheckedKeys    | Sets currently checked nodes by keys. Requires `node-key` to be configured.                                                                                                    | (keys, leafOnly) Accepts two parameters: 1) Array of keys for checked nodes, 2) Boolean indicating whether to set only leaf nodes as checked (default: `false`)                       |
| checkNode         | Sets the checked state of a node                                                                                                                                               | Two parameters: 1) Key or `TreeNode` of the node to be checked, 2) Boolean indicating whether the node is checked                                          |
| getCurrentNode    | Gets the currently selected node                                                                                                                                               | —                                                                                                                                                          |
| setCurrentNode    | Sets the current selected state of a node                                                                                                                                      | Accepts a `TreeNode` or node key. Pass `undefined` to deselect.                                                                                            |
| getNodeByKey      | Gets a node by its key                                                                                                                                                         | key                                                                                                                                                        |
| removeNode        | Deletes a node from the Tree                                                                                                                                                   | Accepts a `TreeNode` or node key                                                                                                                           |
| appendNode        | Adds a new node to the root by passing node data. To add under a specific node, first retrieve that node and use its `insertChild` method.                                     | -                                                                                                                                                          |  
| checkedAll        | Checks all nodes                                                                                                                                                               | -                                                                                                                                                          |
| clearChecked      | Unchecks all nodes                                                                                                                                                             | -                                                                                                                                                          |
| collapseNode      | Collapses a node                                                                                                                                                               | Accepts the target `TreeNode`                                                                                                                              |
| expandNode        | Expands a node                                                                                                                                                                 | Accepts the target `TreeNode`                                                                                                                              |
| getAllNodeData    | Retrieves all node data with hierarchy represented by `children`                                                                                                               | -                                                                                                                                                          |
| getNode           | Gets a specific node based on conditions                                                                                                                                       | (node: TreeNode) => boolean/void                                                                                                                           |
| reload            | Re-renders the tree                                                                                                                                                            |                                                                                                                                                            |

### Events

| Event Name         | Description                                                                 | Parameters                                           |
|--------------------|-----------------------------------------------------------------------------|------------------------------------------------------|
| node-contextmenu   | Triggered when a node is right-clicked                                      | `TreeNode` of the clicked node                       |
| check              | Triggered when a checkbox is clicked                                        | `TreeNode`; use the `checked` property to check state|
| current-change     | Triggered when the currently selected node changes                          | `TreeNode` of the new selection                      |
| node-expand        | Triggered when a node is expanded                                           | `TreeNode` of the expanded node                      |
| node-collapse      | Triggered when a node is collapsed                                          | `TreeNode` of the collapsed node                     |

### Scoped Slots

| name | Description                                   |
|------|-----------------------------------------------|
| —    | Custom content for tree nodes; parameter is `TreeNode` |