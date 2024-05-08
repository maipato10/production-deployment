"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Company",
    items: ["About Us", "Careers"],
  },
  {
    title: "Pages",
    items: ["Login", "Register"],
  },
  {
    title: "Legal",
    items: ["Terms", "Privacy"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography
            as="a"
            href="https://www.material-tailwind.com"
            target="_blank"
            variant="h4"
            className="mb-6"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Agnes Maipato Monyeke
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-4"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="border-blue-gray-50 mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t py-6 md:justify-between">
          <div className="text-center md:text-start">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Nexr.js Production Deployment
            </Typography>
            <Typography
              className="font-normal !text-gray-700"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              With Vercel
            </Typography>
          </div>
          <Typography
            color="gray"
            className="flex items-center justify-center text-center font-normal !text-gray-700"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            &copy; {CURRENT_YEAR} Crafted with Creativity by Agnes Maipato
            Monyeke
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
