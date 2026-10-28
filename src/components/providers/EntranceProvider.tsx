"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

const EntranceContext = createContext({ ready: false, finish: () => {} });

export function EntranceProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  return (
    <EntranceContext.Provider value={{ ready, finish: () => setReady(true) }}>
      {children}
    </EntranceContext.Provider>
  );
}

export function useEntrance() {
  return useContext(EntranceContext);
}
