"use client"

import React from "react"
import Image from "next/image"
import EventBanner from "@/public/images/event-banner.png"

import { Separator } from "@/components/ui/separator"

import CountDown from "./CountDown"
import Navigation from "./Navigation"

function Event() {
  return (
    <div className=" absolute left-1/2 top-1/4 -translate-x-1/2 ">
      <Image
        src={EventBanner}
        width={"220"}
        height={"220"}
        alt="event-banner"
        className="m-auto"
      ></Image>
      <div>
        <CountDown />
      </div>
      <Separator className="m-4" />
      <Navigation />
    </div>
  )
}

export default Event
