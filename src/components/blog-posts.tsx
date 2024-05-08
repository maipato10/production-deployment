/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React from "react";
import Image from "next/image";

import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import BlogCardWithImage from "./blog-card-with-image";

export function BlogPost() {
  return (
    <section className="mx-10 flex w-full flex-col items-center px-4 py-20">
      <Button
        color="gray"
        className="mb-3"
        size="sm"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        BLOG
      </Button>
      <Typography
        variant="h2"
        className="text-center font-bold"
        color="blue-gray"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Check Out the Latest: Stay at the Forefront of Next.js Web Deployment!
      </Typography>
      <Typography
        variant="lead"
        className="mb-8 mt-2 w-full max-w-4xl text-center font-normal !text-gray-500"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Experience cutting-edge Next.js web deployment using Drizzle database,
        coupled with hassle-free project deployment on GitHub. Crafted by the
        talented developers from BriteHouseMobility, in collaboration with our
        exceptional team.
      </Typography>
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <BlogCardWithImage />
        </div>
        <div className="border-blue-gray-100 px-3 md:border-l">
          <div className="border-blue-gray-100  mb-6 !border-b">
            <Card
              shadow={false}
              className="p-0"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <CardBody
                className="p-0 pb-5"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <div className="mb-4 h-[300px] w-full ">
                  <Image
                    width={768}
                    height={1500}
                    src="/image/best5.jpg"
                    className="h-full w-10/12 rounded-lg object-cover md:w-full"
                    alt=""
                  />
                </div>
                <Typography
                  variant="h3"
                  className="mb-6 leading-[45px] !text-gray-900"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Innovations: Inspired by Change
                </Typography>
                <Typography
                  className="!text-sm !font-bold text-gray-700"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  by Agnes Monyeke
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="border-blue-gray-100 mb-6 !border-b md:border-none">
            <Card
              shadow={false}
              className="p-0"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <CardBody
                className="p-0 pb-5"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <div className="mb-4 h-[300px] w-full">
                  <Image
                    width={768}
                    height={768}
                    src="/image/best.jpg"
                    className="h-full w-10/12 rounded-lg object-cover md:w-full"
                    alt=""
                  />
                </div>
                <Typography
                  variant="h3"
                  className="mb-6 leading-[45px] !text-gray-900"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  Cracking Codes, Unveiling Solutions: Our Team in Cube Action!
                </Typography>
                <Typography
                  className="!text-sm !font-bold text-gray-700"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  by John Doe
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPost;
