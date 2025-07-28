"use client";

import Link from "next/link";
import { Zap, Home, Briefcase, FolderKanban, Users, Phone } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  const items = [
    { name: "Home", url: "/", icon: Home },
    { name: "Services", url: "/services", icon: Briefcase },
    { name: "Cases", url: "/cases", icon: FolderKanban },
    { name: "About", url: "/about", icon: Users },
    { name: "Contact", url: "/contact", icon: Phone },
  ];

  return (
    <header className="z-50">
      <div className="fixed left-4 top-4 hidden sm:block">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-sky-600 to-sky-500">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <span className="text-xl font-bold">TrafficPulse</span>
        </Link>
      </div>
      <div className="fixed right-4 top-4 hidden sm:block">
        <ThemeToggle />
      </div>
      <NavBar items={items} />
    </header>
  );
}