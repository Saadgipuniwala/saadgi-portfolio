"use client";

import dynamic from "next/dynamic";

const FloatingShapes = dynamic(() => import("./FloatingShapes"), {
  ssr: false,
});

export default function FloatingShapesScene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-[9] hidden opacity-70 md:block">
      <FloatingShapes />
    </div>
  );
}
