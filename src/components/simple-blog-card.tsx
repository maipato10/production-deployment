"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";

interface SimpleContentCard {
  title: string;
  subtitle: string;
  name: string;
  icon: React.ElementType;
}

export function SimpleBlogCard({
  title,
  subtitle,
  name,
  icon: Icon,
}: SimpleContentCard) {
  return (
    <div className=" pb-10">
      <div className="mb-3 flex items-center gap-2">
        <Icon className="h-5 w-5 text-gray-900" />
        <Typography
          className="w-full"
          variant="h6"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {title}
        </Typography>
      </div>
      <Typography
        className="mb-3 w-7/12 !text-base font-normal !text-gray-700 md:w-full"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {subtitle}
      </Typography>
      <Typography
        className="!text-xs font-normal !text-gray-500"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {name}
      </Typography>
    </div>
  );
}

export default SimpleBlogCard;
