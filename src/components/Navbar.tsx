"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>

          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="appdev">Web Development</HoveredLink>
              <HoveredLink href="appdev">Interface Design</HoveredLink>
              <HoveredLink href="appdev">Search Engine Optimization</HoveredLink>
              <HoveredLink href="appdev">Branding</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Course">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="appdev">Web Programming</HoveredLink>
              <HoveredLink href="appdev">App Development</HoveredLink>
              <HoveredLink href="appdev">AI ML</HoveredLink>
              <HoveredLink href="appdev">Cyber Security</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="appdev">Information</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Service">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="appdev">Drones Robotics</HoveredLink>
              <HoveredLink href="appdev">Cyber Analysis</HoveredLink>
              <HoveredLink href="appdev">Application Development</HoveredLink>
              <HoveredLink href="appdev">AI Integration</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="appdev">E-mail</HoveredLink>
              <HoveredLink href="appdev">Phone No.</HoveredLink>
            </div>
          </MenuItem>

        </Menu>
      </div>
    );
  }

  export default Navbar