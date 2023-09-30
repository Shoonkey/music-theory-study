import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

interface AppSetupProps {
  containerId: string;
  isSubapp?: boolean;
  language?: string;
  theme?: "dark" | "light";
}

function setupApp({ containerId, isSubapp = false, language, theme }: AppSetupProps) {
  const root = createRoot(document.getElementById(containerId)!);
  
  root.render(
    <React.StrictMode>
      <App isSubapp={isSubapp} language={language} theme={theme} />
    </React.StrictMode>
  );

  return root;
}

export default setupApp;