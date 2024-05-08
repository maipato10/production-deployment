/* eslint-disable react/jsx-no-undef */
"use client";
import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/image-4.jpeg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 mx-auto my-auto grid place-items-center text-center">
          <Typography
            variant="h1"
            color="white"
            className="mb-12 text-5xl font-bold"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Unleashing the Power of Web Deployment!...
          </Typography>
          <Typography
            variant="h2"
            color="white"
            className="mb-12 mt-4 w-full md:max-w-full lg:max-w-3xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Next.js Unboxed: Unleashing the Power of Seamless Web Deployment!
          </Typography>
          <Typography
            variant="h3"
            color="white"
            className="mb-7 mt-1 font-medium uppercase"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Connect with us on:
          </Typography>
          <div className="flex gap-8">
            <IconButton
              variant="text"
              color="white"
              size="sm"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <FaTwitter />
            </IconButton>
            <IconButton
              variant="text"
              color="white"
              size="sm"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <FaFacebook />
            </IconButton>
            <IconButton
              variant="text"
              color="white"
              size="sm"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <FaInstagram />
            </IconButton>
            <IconButton
              variant="text"
              color="white"
              size="sm"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <FaLinkedin />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
