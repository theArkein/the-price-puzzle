"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import BishalAvatar from "@/public/images/bishal.png"
import ChiragAvatar from "@/public/images/chirag.png"
import KunalAvatar from "@/public/images/kunal.png"
import PremAvatar from "@/public/images/prem.png"
import RachanaAvatar from "@/public/images/rachana.png"
import SamriddhiAvatar from "@/public/images/samriddhi.png"
import SaradAvatar from "@/public/images/sarad.png"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Navigation from "../Navigation"

function GuestSpeaker() {
  const team = [
    {
      message:
        "Hey 👋, Meet me I am Sarad Singh. I am in the finance and operations department of this organizing team.",
      linkedin: "https://www.linkedin.com/in/sarad-singh/",
      avatar: SaradAvatar,
    },
    {
      message:
        "Hey 👋, Meet me I am Samriddhi Malakar. I am in the finance and operations department of this organizing team.",
      linkedin: "https://www.linkedin.com/in/samriddhi-malakar/",
      avatar: SamriddhiAvatar,
    },
    {
      message:
        "Hey 👋, Meet me I am Rachana Bista. I am in the marketing department of this organizing team.",
      linkedin: "https://www.linkedin.com/in/rachan-bista/",
      avatar: RachanaAvatar,
    },

    {
      message:
        " Hey 👋, Meet me I am Bishal Kauri. I am in the communication department of this organizing team.",
      linkedin: "https://www.linkedin.com/in/bishal/",
      avatar: BishalAvatar,
    },
    {
      message:
        " Hey 👋, Meet me I am Prem. I am in the marketing department of this organizing team.",
      linkedin: "https://www.linkedin.com/in/prem/",
      avatar: PremAvatar,
    },
    {
      message:
        " Hey 👋, Meet me I am Kunal Luniya. I am in the communication department of this organizing team.",
      linkedin: "https://www.linkedin.com/in/kunal-luniya/",
      avatar: KunalAvatar,
    },
    {
      message:
        " Hey 👋, Meet me I am Chirag Kediya. I am in the communication department of this organizing team.",
      linkedin: "https://www.linkedin.com/in/chirag-kediya/",
      avatar: ChiragAvatar,
    },
  ]
  return (
    <>
      <div className="flex justify-center">
        <Navigation />
      </div>
      <div className="m-auto mt-6 w-full  max-w-screen-md">
        <Carousel className=" m-auto mt-20 w-60">
          <CarouselContent>
            {team.map((member, i) => (
              <CarouselItem>
                <Image
                  src={member.avatar}
                  width={"220"}
                  height={"220"}
                  alt="event-banner"
                  className="m-auto"
                />
                <div className="mt-4 text-center text-sm">
                  {member.message}
                  <br></br>
                  Connect me on{" "}
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    className=" text-blue-400 underline"
                  >
                    Linkedin
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  )
}

export default GuestSpeaker
