"use client";
import React, { PropsWithChildren } from "react";
import { ReactLenis } from "lenis/react";

const Lenis = ({ children }: PropsWithChildren) => {
  return (
    <ReactLenis options={{ duration: 1.5, smoothWheel:true, wheelMultiplier:1, touchMultiplier:2, infinite:false }} root>
      {children}
    </ReactLenis>
  );
};

export default Lenis;