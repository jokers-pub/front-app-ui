import { Component } from "@joker.front/core";

export class PickerPanel<T extends Record<string, any> = {}> extends Component<T> {
    constructor(...args: any[]) {
        super(...args);
    }

    showDrawer = false;
    open() {
        if (this.showDrawer) return;
        this.showDrawer = true;
        this.$getRef("drawer")?.component.open();
    }

    handleClose() {
        this.showDrawer = false;
    }
}
