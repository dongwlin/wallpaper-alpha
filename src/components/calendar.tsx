import { Component } from "solid-js";

type CalendarProps = {
  year: number
  month: number
  day: number
}

const Calendar: Component<CalendarProps> = (props) => {
  function getMonthName(month: number): string {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months[month - 1]
  }

  function getDate(year: number = 1970, month: number = 1, day: number = 1): string {
    return `${day} ${getMonthName(month)} ${year}`
  }

  return (
    <div
      class="text-2xl mb-4"
    >
      {getDate(props.year, props.month, props.day)}
    </div>
  )
}

export default Calendar