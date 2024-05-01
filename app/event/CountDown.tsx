"use client"

import React, { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"

const TimeUnit = ({ time, unit }: { time: number; unit: string }) => {
  return (
    <div className="gap-3 text-center">
      <div className="rounded-lg border bg-card p-3 text-xl font-extrabold text-card-foreground shadow-sm">
        {time.toString().length === 1 && "0"}
        {time}
      </div>
      <div className=" mt-1 font-semibold text-slate-500">{unit}</div>
    </div>
  )
}

function CountDown() {
  const countDownDate = new Date("May 9, 2024 18:00:00").getTime()
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const x = setInterval(function () {
    const now = new Date().getTime()
    const distance = countDownDate - now
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    setCountdown({
      days,
      hours,
      minutes,
      seconds,
    })
    // Display the result in the element with id="demo"
    //   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    //   + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x)
    }
  }, 1000)

  return (
    <div className="">
      <h3 className=" mb-4 mt-8 text-center text-3xl font-bold">
        Happening In
      </h3>
      <div className=" flex items-center justify-center gap-5">
        <TimeUnit time={countdown.days} unit={"Days"} />
        <TimeUnit time={countdown.hours} unit={"Hours"} />
        <TimeUnit time={countdown.minutes} unit={"Minutes"} />
        <TimeUnit time={countdown.seconds} unit={"Seconds"} />
      </div>
    </div>
  )
}

export default CountDown
