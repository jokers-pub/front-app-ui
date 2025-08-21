import dayjs, { ManipulateType } from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import weekOfYear from "dayjs/plugin/weekOfYear";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isoWeek from "dayjs/plugin/isoWeek";
dayjs.extend(advancedFormat);
dayjs.extend(weekOfYear);
dayjs.extend(customParseFormat);
dayjs.extend(isoWeek);

export const DEFAULT_FORMATS: Record<string, string> = {
    date: "YYYY-MM-DD",
    month: "YYYY-MM",
    time: "HH:mm:ss",
    week: "YYYY-ww",
    year: "YYYY",
    calendar: "YYYY-MM-DD"
};

const DATE_FORMATTER = function (value: Date, format: string) {
    if (Array.isArray(value)) {
        if (Array.isArray(value) && value.length === 2) {
            const start = value[0];
            const end = value[1];

            if (start && end) {
                return [dayjs(start).format(format), dayjs(end).format(format)];
            }
        }
        return "";
    }
    return dayjs(value).format(format);
};

const DATE_PARSER = function (text: string, format: string, separator: string) {
    if (Array.isArray(text)) {
        if (text.length === 2) {
            const range1 = text[0];
            const range2 = text[1];

            return [dayjs(range1, format).toDate(), dayjs(range2, format).toDate()];
        }
        return [];
    }
    return dayjs(text, format).toDate();
};

const TYPE_VALUE_RESOLVER_MAP = {
    default: {
        formatter(value: any, format: string) {
            if (!value) return "";

            return "" + value;
        },
        parser(text: any, format: string, separator: string) {
            if (text === undefined || text === "") return undefined;

            return text;
        }
    },
    week: {
        formatter(value: any, format: string) {
            if (value && typeof value === "string") return value;
            return dayjs(value).format(format);
        },
        parser(text: any) {
            if (!text) return undefined;

            if (text instanceof Date) return text;

            let arr = text.split("-");

            let year = arr[0];
            let weekNum = arr[1];

            //@ts-ignore
            return dayjs(`${year}-01-01`, "YYYY-MM-DD").week(parseFloat(weekNum)).toDate();
        }
    },
    calendar: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    date: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    time: {
        formatter(value: string | TimeMode, format: string) {
            if (!value) return "";

            return formatTime(value, format);
        },
        parser(text: string, format: string) {
            if (text === undefined || text === "") return undefined;

            return formatTime(text, format);
        }
    },
    month: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    year: {
        formatter(value: number | Date, format: string) {
            if (typeof value === "number") {
                return dayjs(new Date(value, 0, 1)).format(format);
            } else {
                return dayjs(value).format(format);
            }
        },
        parser: DATE_PARSER
    }
};
export function parseAsFormatAndType(value: any, customFormat: string | undefined, type: string, rangeSeparator = "-") {
    if (!value) return undefined;

    //@ts-ignore
    let parser = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP.default).parser;

    //@ts-ignore
    let format = customFormat || DEFAULT_FORMATS[type];

    return parser(value, format, rangeSeparator);
}

export function formatAsFormatAndType(value: any, customFormat: string | undefined, type: string) {
    if (!value) return undefined;

    //@ts-ignore
    let formatter = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP.default).formatter;

    //@ts-ignore
    let format = customFormat || DEFAULT_FORMATS[type];

    return formatter(value, format);
}

export type TimeMode = {
    hours: number;
    minutes: number;
    seconds: number;
};

export function parseTime(time: string | TimeMode | undefined, format: string): TimeMode {
    if (typeof time === "object") return time;

    let value = dayjs(time, format);

    if (isNaN(value.hour()) === false) {
        return {
            hours: value.hour(),
            minutes: value.minute(),
            seconds: value.second()
        };
    }

    //fixed
    return { hours: 0, minutes: 0, seconds: 0 };
}

export function compareTime(value1: string | TimeMode, value2: string | TimeMode, format: string) {
    if (typeof value1 === "string") {
        value1 = parseTime(value1, format);
    }

    if (typeof value2 === "string") {
        value2 = parseTime(value2, format);
    }

    let var1 = value1.seconds + value1.minutes * 60 + value1.hours * 60 * 60;
    let var2 = value2.seconds + value2.minutes * 60 + value2.hours * 60 * 60;

    if (var1 === var2) {
        return 0;
    }

    return var1 > var2 ? 1 : -1;
}

export function validateTimeInRange(
    time: string | TimeMode,
    format: string,
    selectableRange: Array<(TimeMode | string)[] | string> | undefined
) {
    if (!selectableRange?.length) return true;

    for (let item of selectableRange) {
        let start: any;
        let end: any;

        if (typeof item === "string") {
            let arrItem = item.split("-");

            start = arrItem[0];
            end = arrItem[1];
        } else {
            start = item[0];
            end = item[1];
        }

        if (compareTime(time, start, format) >= 0 && compareTime(time, end, format) <= 0) {
            return true;
        }
    }

    return false;
}

export function addDate(date: Date, val: number, type: ManipulateType) {
    return dayjs(date).add(val, type).toDate();
}

export function subtractDate(date: Date, val: number, type: ManipulateType) {
    return dayjs(date).subtract(val, type).toDate();
}

function formatTime(time: TimeMode | string, format: string) {
    if (time === undefined || time === "") return "";

    if (typeof time === "string") {
        time = parseTime(time, format);
    }

    return dayjs(`${time.hours}:${time.minutes}:${time.seconds || "00"}`, "HH:mm:ss").format(format);
}

export function extractDateFormat(format: string) {
    return format
        .replace(/\W?m{1,2}|\W?ZZ/g, "")
        .replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "")
        .trim();
}

export function extractTimeFormat(format: string) {
    return format.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?y{2,4}/g, "").trim();
}

export function getStartDateOfMonth(year: number, month: number): Date {
    let result = new Date(year, month, 1);

    let day = result.getDay();

    return subtractDate(result, day === 0 ? 7 : day, "d");
}

export function getDayCountOfMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
}

export function getDayCountOfYear(year: number) {
    let isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);

    return isLeapYear ? 366 : 365;
}

export function getWeekNumber(date: Date) {
    return dayjs(date).week();
}

export function clearTime(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}

export function parseDate(val: string, format: string) {
    return dayjs(val, format).toDate();
}

export function setTime(date: Date, time: string) {
    let timeModel = parseTime(time, "HH:mm:ss");
    return dayjs(date).set("h", timeModel.hours).set("m", timeModel.minutes).set("s", timeModel.seconds).toDate();
}

/**
 * 将年份和周数转换为Date对象（默认返回该周的周一）
 * @param {number} year - 年份
 * @param {number} week - 当年的周数（1-53）
 * @returns {Date} 对应周的日期对象
 */
export function getDateFromYearAndWeek(year: number, week: number): Date {
    // 从当年1月1日开始计算
    const startOfYear = dayjs(`${year}-01-01`);

    // 计算第1周的起始偏移（ISO标准：周一为一周第一天）
    // 获取1月1日是星期几（0=周日，1=周一...6=周六）
    const dayOfWeek = startOfYear.day();
    // 计算到本周一的偏移量（如果1月1日是周一，则偏移0天）
    const offset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

    // 计算目标周的周一日期（第1周从当年第一个周一或上一年最后一个周一算起）
    const targetDate = startOfYear.add(offset, "day").add(week - 1, "week");

    // 转换为Date对象并返回
    return targetDate.toDate();
}

/**
 * 获取指定年份的 ISO 周数
 * @param year - 要查询的年份（如 2025）
 * @returns 该年份的 ISO 周数（52 或 53）
 */
export function getISOWeeksInYear(year: number): number {
    // 12月28日一定属于该年的最后一周（根据ISO标准）
    const dec28 = dayjs(`${year}-12-28`);
    const weekOfDec28 = dec28.isoWeek();

    // 如果12月28日是第53周，则全年有53周，否则52周
    return weekOfDec28 === 53 ? 53 : 52;
}
