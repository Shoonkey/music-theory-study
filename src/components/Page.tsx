import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface PageProps {
  metaTitle: string;
  children: ReactNode;
}

function Page({ metaTitle, children }: PageProps) {
  const { t } = useTranslation();

  document.title = `${t(`pages.${metaTitle}.meta.title`)} | ${t("appTitle")}`;

  return <>{children}</>;
}

export default Page;
