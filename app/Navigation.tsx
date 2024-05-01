"use client"

import React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

function Navigation() {
  const menuItems = [
    {
      path: "/about-event",
      label: "About Event",
    },
    {
      path: "/guest-speaker",
      label: "Guest Speaker",
    },
    {
      path: "/event-game",
      label: "Event Game",
    },
    {
      path: "/organizer",
      label: "Organizers",
    },
  ]
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((menu) => (
          <NavigationMenuItem>
            <Link href={menu.path} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {menu.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navigation
