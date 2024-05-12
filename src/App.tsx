import {createMemo, createSignal, onCleanup, onMount} from "solid-js"

import './App.css'
import Weekday from "./components/weekday"
import Calendar from "./components/calendar"
import Clock from './components/clock'

function App() {
  const [date, setDate] = createSignal<Date>(new Date())
  let intervalId: number

  onMount(() => {
    intervalId = setInterval(() => {
      setDate(new Date())
    }, 500)
  })

  onCleanup(() => {
    clearInterval(intervalId)
  })

  const weekday = createMemo<number, number>(() => date().getDay())
  const year = createMemo<number, number>(() => date().getFullYear())
  const month = createMemo<number, number>(() => date().getMonth() + 1)
  const day = createMemo<number, number>(() => date().getDate())
  const hours = createMemo<number, number>(() => date().getHours())
  const minutes = createMemo<number, number>(() => date().getMinutes())
  const seconds = createMemo<number, number>(() => date().getSeconds())

  return (
    <div
      class="flex flex-col items-center justify-center h-full bg-[#121212] text-[#f7f7f7]"
    >
      <Weekday weekday={weekday()} />
      <Calendar year={year()} month={month()} day={day()} />
      <Clock hours={hours()} minutes={minutes()} seconds={seconds()}/>
    </div>
  )
}

export default App
