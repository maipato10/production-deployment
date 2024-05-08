"use client";
import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import Image from "next/image";

export function BlogCardWithImage() {
  return (
    <Card
      shadow={false}
      className="border-blue-gray-100 !border-b p-0 pb-5 md:border-none"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardBody
        className="p-0 "
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="h-768px] mb-4 w-full ">
          <Image
            width={768}
            height={768}
            src="/image/fddf.jpg"
            className="h-full w-full rounded-lg"
            alt=""
          />
        </div>
        <Typography
          variant="h3"
          className="mb-4 font-extrabold leading-[45px] !text-gray-900"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Introducing Our Stellar Team: The Architects of Innovation!
        </Typography>
        <Typography
          className="mb-4 !text-base font-normal text-gray-500 "
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Embark on a visual journey through our vibrant workspace, where
          creativity flows and collaboration thrives. Meet the diverse talents
          driving our company forward, each contributing their unique expertise
          to shape the future of technology. From developers to designers,
          strategists to analysts, our team is united by a passion for
          excellence and a commitment to pushing boundaries. Together, we are
          transforming ideas into reality, and we are excited to share our
          collective vision with you. Welcome to our world of innovation and
          inspiration!
        </Typography>
        <div className="flex items-center gap-3">
          <div className="">
            <Image
              width={256}
              height={256}
              src="/image/4.jpg"
              className="h-12 w-12 rounded-lg"
              alt="photo"
            />
          </div>
          <div>
            <Typography
              className="!text-sm !font-bold text-gray-900"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              The team
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default BlogCardWithImage;
