"use client";

import { type ReactNode } from "react";
import {
  ScrollRevealProvider,
  CursorGlow,
} from "./GsapAnimations";
import { FloatingParticles } from "./FloatingParticles";
import { Navbar } from "./Navbar";
import { LoadingScreen } from "./LoadingScreen";

export function ClientShell({ children }: { children: ReactNode }) {
  return (
    <ScrollRevealProvider>
      <LoadingScreen />
      <CursorGlow />
      <FloatingParticles count={25} />
      <Navbar />
      {children}
    </ScrollRevealProvider>
  );
}
