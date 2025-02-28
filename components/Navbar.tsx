"use client"

import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { sendGAEvent } from "@/src/utils/google-analytics";

const Navbar = () => {
  return (
    <div className="grid m-auto grid-cols-2 items-center px-10 py-3 justify-between text-md text-[15px]">
      <a href="#contact-section">
        <Button className="flex gap-x-4 justify-start" variant="link">
          <Mail />
          <p>diarifiana@gmail.com</p>
        </Button>
      </a>

      <div className="flex justify-end">
        <a href="#about-section">
          <Button variant="link">About</Button>
          {/* <Button variant="link" onClick={() => sendGAEvent("connect to GA", "inspect the click", "personal web")}>Test GA Event</Button> */}
        </a>
        <a href="#port-section">
          <Button variant="link">Portfolio</Button>
        </a>
        <a href="#contact-section">
          <Button variant="link">Contact</Button>{" "}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
