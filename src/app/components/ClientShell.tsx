"use client";

import { type ReactNode } from "react";
import {
  ScrollRevealProvider,
  CursorGlow,
} from "./GsapAnimations";
import { FloatingParticles } from "./FloatingParticles";
import { Navbar } from "./Navbar";

export function ClientShell({ children }: { children: ReactNode }) {
  return (
    <ScrollRevealProvider>
      <CursorGlow />
      <FloatingParticles count={25} />
      <Navbar />
      {children}
    </ScrollRevealProvider>
  );
}
