"use client";

import { useState } from "react";

export default function CuteBG() {
  return (
    <div className="absolute -z-1  inset-0 bg-[url('/img/bg-cutesm.avif')]  sm:bg-[url('/img/bg-cutesm.avif')]   md:bg-[url('/img/bg-cute.avif')] bg-cover bg-center opacity-20" />
  );
}