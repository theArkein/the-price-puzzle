import React from "react"
import Image from "next/image"
import Link from "next/link"
import GuessTheGuest from "@/public/images/guess-the-guest.png"

import { Button } from "@/components/ui/button"

import Navigation from "../Navigation"

function GuestSpeaker() {
  return (
    <>
      <div className="flex justify-center">
        <Navigation />
      </div>
      <div className="m-auto mt-6 w-full  max-w-screen-md">
        <div></div>
        <Image
          src={GuessTheGuest}
          width={"520"}
          height={"520"}
          alt="event-banner"
          className="m-auto"
        />
        <div className="mt-6 flex justify-center">
          <Link
            href={"https://www.facebook.com/HCKInternationalMBA"}
            target="_blank"
          >
            <Button className="">Guess The Guess & Win Prize</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default GuestSpeaker
