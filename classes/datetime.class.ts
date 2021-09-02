import { Dayjs } from "dayjs";

export class DateTime extends Dayjs {

    static today(): DateTime {
        return new DateTime();
    }

    static currentYear(): number {
        return new DateTime().year();
    }

    static currentQuarter(): number {
        return new DateTime().quarter();
    }

    static currentMonth(): number {
        return new DateTime().month(); 
    }

    public quarter(): 1 | 2 | 3 | 4 {
        return Math.floor(this.month() / 4) + 1 as (1 | 2 | 3 | 4);
    }

    public dayFixed(): number {
        return this.day() == 0 ? 6 : this.day() - 1;
    }

}