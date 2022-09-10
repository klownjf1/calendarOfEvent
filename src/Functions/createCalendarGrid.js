import dayjs from "dayjs";

export const GetMonth = (month = dayjs().month()) => {
    const year = dayjs().year()
    const firstDayOfMonth = dayjs(new Date(year, month, 0)).day()
    let currentMonthCount = 0 - firstDayOfMonth


    let dayMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++
            return dayjs(new Date(year, month, currentMonthCount))
        })
    })
    return dayMatrix

}