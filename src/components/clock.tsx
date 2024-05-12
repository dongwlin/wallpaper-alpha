import type { Component } from "solid-js"

type ClockProps = {
  hours: number
  minutes: number
  seconds: number
}

const Clock: Component<ClockProps> = (props) => {
  function zeroPadding(num: number, length: number = 2): string {
    return String(num).padStart(length, '0')
  }

  function getClock(h: number, m: number, s: number): string {
    return zeroPadding(h) + ':' + zeroPadding(m) + ':' + zeroPadding(s)
  }

  return (
    <div
      class="text-5xl mb-40"
    >
      {getClock(props.hours, props.minutes, props.seconds)}
    </div>
  )
}

export default Clock