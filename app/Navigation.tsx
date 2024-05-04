"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
      path: "/",
      label: "Home",
    },
    {
      path: "/info",
      label: "Event Info",
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
      path: "/organizing-team",
      label: "Organizing Team",
    },
  ]
  const activePath = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((menu) => (
          <NavigationMenuItem key={menu.path}>
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
