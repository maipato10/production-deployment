"use client";
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Navbar as MTNavbar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";

const NAV_MENU = ["Home", "About Us", "Contact Us"];

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href=""
          target="_blank"
          className={`text-lg font-bold ${isScrolling ? "text-gray-900" : "text-white"}`}
          color={isScrolling ? "blue-gray" : "red"}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Vercel Deployment
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {NAV_MENU.map((name) => (
            <NavItem key={name}>{name}</NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="text"
            color={isScrolling ? "gray" : "white"}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Log in
          </Button>
          <Button
            variant="text"
            color={isScrolling ? "gray" : "white"}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Projects
          </Button>
        </div>
        <IconButton
          variant="text"
          onClick={handleOpen}
          color={isScrolling ? "gray" : "white"}
          className="ml-auto inline-block lg:hidden"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
    </MTNavbar>
  );
}

export default Navbar;
