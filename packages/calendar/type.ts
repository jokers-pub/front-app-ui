export type CalendarCellDataType = {
    date?: Date;
    type: "normal" | "prev-month" | "next-month" | "today" | "placeholder";
    text?: any;
    disabled?: boolean;
    customClass?: string;
    inRange?: boolean;
    start?: boolean;
    end?: boolean;
    tip?: string;
    topTip?: string;
};
