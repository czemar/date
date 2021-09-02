import dayjs from "dayjs";
import { DateTime } from "../classes/datetime.class";

export function dateTime(config?: string | number | dayjs.Dayjs | Date) {
    return new DateTime(config)
}