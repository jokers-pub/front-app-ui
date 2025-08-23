## Form

A component for collecting, validating, and submitting form data.

### Typical Form

Use `jk-field` for layout.

Includes various form items such as input fields, selectors, switches, radio buttons, checkboxes, etc.

!!!demo1!!!

### Text Alignment

The alignment of labels can be set using the `label-position` attribute. Currently supported values are `top` and `left`. When set to `top`, the label will be placed at the top of the form item.

!!!demo3!!!

### Form Validation

The Form component provides validation functionality. Built-in validation methods are available and can be configured by adding `validate` to specify validation rules.

!!!demo4!!!

> Configuring `required` in `form-item` only controls the display of the **asterisk** for visual indication and does not perform any validation.

### Built-in Validation Rules

Commonly used validation rules are provided internally and can be configured using `validate`.

| Rule                                  | Description          | Value Explanation                                                                                  |
| ------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------- |
| `Global.isRequired(msg)`              | Non-empty validation | Custom error message can be set; if not set, the `placeholder` text will be used as the error hint |
| `Global.isInt(msg)`                   | Positive integer     | Error hint                                                                                         |
| `Global.isNumber(msg)`                | Numeric validation   | Error hint                                                                                         |
| `Global.isPhone(msg)`                 | Phone number format  | Error hint                                                                                         |
| `Global.isEmail(msg)`                 | Email format         | Error hint                                                                                         |
| `Global.isMatched(regex,msg)`         | Custom regex         | {pattern:string, msg:string}, where `pattern` is required for regex rules, `msg` for error hint    |
| `Global.isLengthInRange(min,max,msg)` | Length validation    | `(min, max, error_msg)`: Can specify min and max lengths via array                                 |

!!!demo5!!!

Custom validation rules can be registered globally. Below is an example of a built-in validation method for reference:

```ts
import { registerValidateAll } from "@joker.front/app-ui";

// Register all validation methods provided by the UI library
registerValidateAll();

registerGlobalFunction({
    isPhone: (message?: string) => {
        return (value: any) => {
            if (!value) return;
            if (value.length !== 11) {
                return message || "Please enter an 11-digit phone number";
            }

            if (/^1[3456789]\d{9}$/.test(value) === false) {
                return message || "Invalid phone number format, please re-enter";
            }
        };
    }
});
```

```html
<input validate="@Global.isPhone()" />
```

Validation follows a specific order:

1. `control.beforeValidate()`
2. `control.ctrlValidate`
3. `control.props.validate` (custom validation, supports multiple combined rules via array).

### Custom Validation

Custom validation rules can be configured via the `validate` parameter of the component. Return an error message if validation fails; an empty return indicates success. Asynchronous validation is supported.

!!!demo6!!!

> The `status-icon` attribute can be used in `input` components to display validation status.

### Sizing

The `size` property can be set in the `form` component to control the overall form item sizing. If a component already has a private `size` setting, it cannot be overridden.

!!!demo7!!!

### Submission

Form submission can be triggered by calling the `submit` event in the form. This process includes form validation and value retrieval. If validation passes, the `submit` event notifies the caller and returns the form data.

!!!demo8!!!

> During submission, the form will automatically set the submit button (must be `jk-button`) to `loading` state during asynchronous validation. After validation, loading is lifted, and the `submit` event takes over. Therefore, the caller must manually handle loading during the submission process (loading during validation is automatic).

### Extending Form Controls

To create custom form controls compatible with `Form`, the following conditions must be met:

1. Call `registerFormCtrl(this)` in the `create` method to register the control.
2. Configure the `value` property in the model.
3. Pass `props.name` (if applicable based on usage scenario).
4. Render the control inside `jk-form` (if applicable).

Optional (but recommended) enhancements:

1. Trigger `this.$trigger("validate")` when the value changes (not mandatory).
2. If the component includes `ctrlValidate`, it will run internal validation during form validation.
3. If the component includes `beforeValidate`, it will execute pre-validation preparations.

### Form Attributes

| Attribute         | Description                                                                 | Type     | Options               | Default |
| ----------------- | --------------------------------------------------------------------------- | -------- | --------------------- | ------- |
| class             | Custom CSS class                                                            | string   | —                     | —       |
| inline            | Inline form mode                                                            | boolean  | —                     | false   |
| label-position    | Label alignment. If set to `left` or `right`, `label-width` must be set.    | string   | right / left / top    | right   |
| label-width       | Label width (e.g., '50px'). Direct child `form-item` elements inherit this. | string   | —                     | 80px    |
| size              | Controls the size of form components                                        | string   | medium / small / mini | —       |
| showErrorMessage  | Custom error message display                                                | Function | —                     | —       |
| clearErrorMessage | Custom error message clearing                                               | Function | —                     | —       |

### Form Methods

| Method   | Description                                                                                     | Parameters                                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| validate | Validates the entire form. Takes a callback function as a parameter (returns a Promise).        | Function(string / string[]). If no parameter is passed, validates all controls. Can validate specific controls by name.    |
| reset    | Resets the entire form, reverting all fields to initial values and clearing validation results. | —                                                                                                                          |
| getData  | Retrieves form data (note: this does **not** perform validation).                               | Function(string / string[]). If no parameter is passed, retrieves all control values. Can fetch specific controls by name. |
| submit   | Triggers form submission.                                                                       | —                                                                                                                          |

### Form Events

| Event         | Description             | Parameters |
| ------------- | ----------------------- | ---------- |
| before-submit | Pre-submission trigger  | —          |
| submit        | Form submission trigger | Form data  |

### Field Attributes

| Attribute   | Description                                                                           | Type    | Options | Default |
| ----------- | ------------------------------------------------------------------------------------- | ------- | ------- | ------- |
| class       | Custom CSS class                                                                      | string  | —       | —       |
| label       | Label text                                                                            | string  | —       | —       |
| label-width | Width of the form item label (e.g., '50px')                                           | string  | —       | 80px    |
| required    | Whether the field is required (displays an **asterisk** but ignores validation logic) | boolean | —       | false   |
| inline      | Whether to use inline layout                                                          | boolean | —       | false   |

### Field Sections

| Slot  | Description                  |
| ----- | ---------------------------- |
| —     | Content of the Form Item     |
| label | Content of the label         |
| error | Error message for validation |
