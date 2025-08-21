import { Component } from "@joker.front/core";
import JokerToast from "./index.joker";

export type PropsOption = Partial<{
    onClose: Function;
    id: string;
    message: string;
    forbidClick?: boolean;
    type?: "warning" | "error" | "success" | "info" | "loading";
    icon?: string;
    position?: "top" | "bottom";
    customClass?: string;
    duration: number;
}>;
let seed = 0;

let prevInstance: (Component<any> & Record<string, any>) | undefined = undefined;

function Toast(option: string | PropsOption): Component<any> & {
    id: string;
    close: Function;
    setMessage: (message: string) => void;
} {
    if (typeof option === "string") {
        option = { message: option };
    }

    option ??= {};

    option.id ||= `toast` + seed++;

    //重复id 不做输出
    if (prevInstance?.id === option.id) return;

    if (prevInstance) {
        prevInstance?.close();
    }

    let instance = new JokerToast(option);

    instance.$mount(document.body);

    instance.$on("close", () => {
        //剔除
        prevInstance = undefined;
    });

    prevInstance = instance;

    return instance as any;
}

Toast.success = function (message: string | PropsOption) {
    if (typeof message === "string") {
        return Toast({
            type: "success",
            message
        });
    } else {
        return Toast({
            type: "success",
            ...message
        });
    }
};

Toast.warning = function (message: string | PropsOption) {
    if (typeof message === "string") {
        return Toast({
            type: "warning",
            message
        });
    } else {
        return Toast({
            type: "warning",
            ...message
        });
    }
};

Toast.info = function (message: string | PropsOption) {
    if (typeof message === "string") {
        return Toast({
            type: "info",
            message
        });
    } else {
        return Toast({
            type: "info",
            ...message
        });
    }
};

Toast.error = function (message: string | PropsOption) {
    if (typeof message === "string") {
        return Toast({
            type: "error",
            message
        });
    } else {
        return Toast({
            type: "error",
            ...message
        });
    }
};

Toast.loading = function (message: string | PropsOption) {
    if (typeof message === "string") {
        return Toast({
            type: "loading",
            message
        });
    } else {
        return Toast({
            type: "loading",
            ...message
        });
    }
};

Toast.close = function () {
    prevInstance?.close();
};

export { Toast };
