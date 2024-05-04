"use client"

import React from "react"
import Image from "next/image"
import EventLogo from "@/public/images/event-logo.png"
import HeraldLogo from "@/public/images/herald.png"
import IMBA from "@/public/images/imba.svg"
import EventItinerary from "@/public/images/itinerary.png"
import WLV from "@/public/images/wlv.jpg"
import { Separator } from "@radix-ui/react-separator"
import {
  BookmarkIcon,
  CalendarDaysIcon,
  Clock4Icon,
  LayoutListIcon,
  MapPinIcon,
} from "lucide-react"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Navigation from "../Navigation"

const iconProps = {
  color: "#0F172A",
  size: 16,
  strokeWidth: 2,
}

function Info() {
  const infoItems = [
    {
      icon: <CalendarDaysIcon {...iconProps} />,
      detail: "9th May, 2024",
    },
    {
      icon: <Clock4Icon {...iconProps} />,
      detail: "6:00 PM onwards",
    },
    {
      icon: <MapPinIcon {...iconProps} />,
      detail: "LT-03 Wolverhampton Block, Herald College - Kathmandu",
    },
  ]
  return (
    <>
      <div className="flex justify-center">
        <Navigation />
      </div>
      <div className="m-auto mt-6 w-full  max-w-screen-md">
        <div className="flex gap-12">
          <div className="">
            <h1 className="text-4xl font-extrabold">The Price Puzzle</h1>
            <p className=" mt-5 max-w-screen-sm text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              optio nemo reprehenderit odio rem totam similique tempora earum
              tenetur vero? Adipisci et, esse aliquam eaque obcaecati labore
              impedit ab perspiciatis. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. A optio tenetur id unde non iure dicta tempore
              accusantium ex sed placeat eos distinctio officiis illum delectus
              ducimus, vitae dignissimos esse.
            </p>
          </div>
          <div>
            <Image
              src={EventLogo}
              width={"380"}
              height={"380"}
              alt="event-banner"
              className="m-auto"
            />
          </div>
        </div>

        <div className=" felx mt-6">
          <h3 className=" mb-2 font-semibold text-slate-600">Event Details</h3>
          <div className="flex flex-col gap-2">
            {infoItems.map((item, i) => (
              <li className="flex items-center gap-3 " key={i}>
                {item.icon}
                <span className="text-sm text-slate-600">{item.detail}</span>
              </li>
            ))}
            <li className="flex items-center gap-3 " key={infoItems.length}>
              <BookmarkIcon {...iconProps} />
              <Dialog>
                <DialogTrigger className="text-sm text-slate-600 underline">
                  See Itinerary
                </DialogTrigger>
                <DialogContent>
                  <Image
                    src={EventItinerary}
                    color="black"
                    width={"1080"}
                    height={"120"}
                    alt="event-itinerary"
                  />
                </DialogContent>
              </Dialog>
            </li>
          </div>
        </div>
        <div className="mt-10 flex gap-8">
          <div className="">
            <h5 className="m-auto mb-4 text-sm font-semibold text-slate-400">
              Organized by
            </h5>
            <div className="flex items-center justify-start gap-8">
              <Image src={IMBA} width={"60"} height={"60"} alt="event-banner" />
              <Image
                src={HeraldLogo}
                color="black"
                width={"120"}
                height={"120"}
                alt="event-banner"
              />
            </div>
          </div>
          <Separator orientation="vertical" className=" h-14 w-1" />
          <div className="">
            <h5 className="mb-4 text-center text-sm font-semibold text-slate-400">
              University Partner
            </h5>
            <Image src={WLV} width={"120"} height={"120"} alt="event-banner" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Info
