"use client";

import { TextMarquee } from "../components/FramerAnimations";

export function MarqueeStrip() {
  return (
    <div className="bg-pink-50 py-6 border-b border-pink-100 overflow-hidden">
      <TextMarquee
        items={[
          "Curls",
          "Coils",
          "Waves",
          "Texture",
          "Community",
          "Confidence",
          "Culture",
          "Self-Love",
          "Wash Day",
          "Crown Act",
        ]}
      />
    </div>
  );
}
