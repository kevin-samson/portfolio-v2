"use client";
import React, { useState, useEffect, createContext } from "react";

export const SmoothScrollContext = createContext<{
  scroll: LocomotiveScroll | null;
}>({
  scroll: null,
});

export function SmoothScrollProvider({
  children,
  options,
}: {
  children: React.ReactNode;
  options: any;
}) {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;

          setScroll(
            new LocomotiveScroll({
              el:
                document.querySelector("[data-scroll-container]") ?? undefined,
              ...options,
            })
          );
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`);
        }
      })();
    }
    return () => {
      scroll?.destroy();
    };
  }, [scroll]);

  return (
    // END: abpxx6d04wxr
    <SmoothScrollContext.Provider value={{ scroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

SmoothScrollContext.displayName = "SmoothScrollContext";
SmoothScrollProvider.displayName = "SmoothScrollProvider";
