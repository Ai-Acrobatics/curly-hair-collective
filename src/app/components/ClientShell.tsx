"use client";

import { type ReactNode } from "react";
import {
  ScrollRevealProvider,
  CursorGlow,
} from "./GsapAnimations";
import { FloatingParticles } from "./FloatingParticles";
import { Navbar } from "./Navbar";
import { LoadingScreen } from "./LoadingScreen";
import { CartProvider } from "../context/CartContext";
import { CartDrawer } from "./CartDrawer";

export function ClientShell({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <ScrollRevealProvider>
        <LoadingScreen />
        <CursorGlow />
        <FloatingParticles count={25} />
        <Navbar />
        <CartDrawer />
        <div className="gradient-bar-header" />
        {children}
      </ScrollRevealProvider>
    </CartProvider>
  );
}
