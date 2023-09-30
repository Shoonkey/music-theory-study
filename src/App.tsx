import { ChakraProvider } from "@chakra-ui/react";
import { useMemo } from "react";
import { useTranslation, I18nextProvider } from "react-i18next";
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AppSettingsProvider from "./components/AppSettingsProvider";
import Root from "./components/Root";
import setupI18N from "./i18n";

import "@fontsource/arvo/400.css";
import "@fontsource/arvo/700.css";

interface AppProps {
  isSubapp?: boolean;
  theme?: "dark" | "light";
  language?: string;
}

function App({
  isSubapp = false,
  theme = "dark",
  language = "pt-BR",
}: AppProps) {
  const i18nInstance = useMemo(() => setupI18N(language), [language]);
  const { i18n } = useTranslation(undefined, { i18n: i18nInstance });

  const routerFactory = isSubapp ? createHashRouter : createBrowserRouter;

  const router = routerFactory([
    {
      path: "/*",
      Component: Root,
    },
  ]);

  return (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider>
        <AppSettingsProvider
          settings={{ isSubapp, theme, language: i18n.language }}
        >
          <RouterProvider router={router} />
        </AppSettingsProvider>
      </ChakraProvider>
    </I18nextProvider>
  );
}

export default App;
