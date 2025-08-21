import { Component } from "@joker.front/core";

function getDirection(x, y) {
    if (x > y) {
        return "horizontal";
    }

    if (y > x) {
        return "vertical";
    }
}

export class TouchBase<T> extends Component<T> {
    touchData = {
        doing: false,
        direction: "" as "horizontal" | "vertical" | "",
        deltaX: 0,
        deltaY: 0,
        offsetX: 0,
        offsetY: 0,
        startX: 0,
        startY: 0,
        startTime: undefined
    };

    // 处理触摸和鼠标的开始事件
    touchStart(event: TouchEvent | MouseEvent): void {
        this.resetTouchStatus();
        this.touchData.doing = true;
        this.touchData.startTime = new Date();

        // 区分触摸事件和鼠标事件，获取正确的坐标
        if (event instanceof TouchEvent && event.touches.length > 0) {
            this.touchData.startX = event.touches[0].clientX;
            this.touchData.startY = event.touches[0].clientY;
        } else if (event instanceof MouseEvent) {
            this.touchData.startX = event.clientX;
            this.touchData.startY = event.clientY;
        }
    }

    // 处理触摸和鼠标的移动事件
    touchMove(event: TouchEvent | MouseEvent): void {
        let clientX: number, clientY: number;

        // 区分事件类型，获取正确的坐标
        if (event instanceof TouchEvent && event.touches.length > 0) {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        } else if (event instanceof MouseEvent) {
            clientX = event.clientX;
            clientY = event.clientY;
        } else {
            // 不支持的事件类型，直接返回
            return;
        }

        this.touchData.deltaX = clientX < 0 ? 0 : clientX - this.touchData.startX;
        this.touchData.deltaY = clientY - this.touchData.startY;
        this.touchData.offsetX = Math.abs(this.touchData.deltaX);
        this.touchData.offsetY = Math.abs(this.touchData.deltaY);

        const LOCK_DIRECTION_DISTANCE = 10;
        if (
            !this.touchData.direction ||
            (this.touchData.offsetX < LOCK_DIRECTION_DISTANCE && this.touchData.offsetY < LOCK_DIRECTION_DISTANCE)
        ) {
            this.touchData.direction = getDirection(this.touchData.offsetX, this.touchData.offsetY);
        }
    }

    resetTouchStatus() {
        this.touchData.direction = "";
        this.touchData.deltaX = 0;
        this.touchData.deltaY = 0;
        this.touchData.offsetX = 0;
        this.touchData.offsetY = 0;
        this.touchData.startX = 0;
        this.touchData.startY = 0;
        this.touchData.startTime = undefined;
    }

    bindTouchEvent(el: HTMLElement) {
        //@ts-ignore
        const { onTouchStart, onTouchMove, onTouchEnd } = this;

        let start = (e) => {
            this.touchStart(e);

            onTouchStart?.(e);
        };
        let move = (e) => {
            if (this.touchData.doing) {
                this.touchMove(e);

                onTouchMove?.(e);
            }
        };
        let end = (e) => {
            if (this.touchData.doing) {
                this.touchData.doing = false;

                onTouchEnd?.(e);
            }
        };
        // 移动端触摸事件
        el.addEventListener("touchstart", start);
        el.addEventListener("touchmove", move);

        // 桌面端鼠标事件
        el.addEventListener("mousedown", start);
        el.addEventListener("mousemove", move);

        el.addEventListener("touchend", end);
        el.addEventListener("touchcancel", end);

        el.addEventListener("mouseup", end);
        el.addEventListener("mouseleave", end);
    }
}
