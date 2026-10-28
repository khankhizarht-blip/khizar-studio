
"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

interface EntranceContextValue {
  ready: boolean;
  finish: () => void;
}

const EntranceContext = createContext<EntranceContextValue>({
  ready: true,
  finish: () => {},
});

export function EntranceProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <EntranceContext.Provider
      value={{
        ready: true,
        finish: () => {},
      }}
    >
      {children}
    </EntranceContext.Provider>
  );
}

export function useEntrance() {
  return useContext(EntranceContext);
}
