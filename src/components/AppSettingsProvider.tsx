import { useColorMode } from "@chakra-ui/react";
import { ReactNode, createContext, useEffect, useState } from "react";

export interface AppSettingsData {
  isSubapp: boolean;
  theme: "dark" | "light";
  language: string;
}

interface AppSettingsProviderProps {
  settings: AppSettingsData;
  children: ReactNode;
}

interface AppSettingsContext extends AppSettingsData {
  setTheme: (theme: "dark" | "light") => void;
}

export const AppSettingsContext = createContext<AppSettingsContext>({
  isSubapp: false,
  theme: "dark",
  setTheme: () => {},
  language: "en-US",
});

function AppSettingsProvider({ settings, children }: AppSettingsProviderProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const { setColorMode } = useColorMode();

  useEffect(() => setTheme(settings.theme), [settings]);
  useEffect(() => setColorMode(theme), [theme]);

  return (
    <AppSettingsContext.Provider value={{ ...settings, theme, setTheme }}>
      {children}
    </AppSettingsContext.Provider>
  );
}

export default AppSettingsProvider;
