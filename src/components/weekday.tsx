import { Component } from "solid-js";

type WeekdayProps = {
  weekday: number
}

const Weekday: Component<WeekdayProps> = (props) => {
  function getWeekdayName(weekday: number): string{
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
    return days[weekday]
  }

  return (
    <div
      class="text-8xl font-bold tracking-widest mb-4"
    >
      {getWeekdayName(props.weekday)}
    </div>
  )
}

export default Weekday