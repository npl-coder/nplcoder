"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);
  const t = useTranslations("Switch");
  React.useEffect(() => {
    setMounted(true);
    const scrollY = sessionStorage.getItem("scrollPosition");
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY, 10));
      sessionStorage.removeItem("scrollPosition");
    }
  }, []);

  if (!mounted) return null;

  const switchLanguage = (newLocale) => {
    sessionStorage.setItem("scrollPosition", window.scrollY);

    const pathSegments = pathname.split("/");
    if (pathSegments.length > 1) {
      pathSegments[1] = newLocale;
    } else {
      pathSegments.push(newLocale);
    }
    router.replace(pathSegments.join("/"), { scroll: false });
  };

  return (
    <div className="mt-1 relative z-[200]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center p-2 dark:border-gray-600 rounded text-gray-700 dark:bg-transparent dark:text-white transition">
            <Image
              src={locale === "en" ? "/images/english.png" : "/images/nepali.png"}
              alt={locale === "en" ? "English Flag" : "Nepali Flag"}
              className="transition-transform duration-200"
              width={20}
              height={20}
            />
            <span className="ml-2 text-sm">{locale === "en" ? t("en") : t("np")}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-[300] dark:bg-[#2C3043]
">
          <DropdownMenuItem onClick={() => switchLanguage("en")}>
            <Image
              src="/images/english.png"
              alt="English Flag"
              width={20}
              height={20}
              className="mr-2"
            />
            {t("en")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => switchLanguage("np")}>
            <Image
              src="/images/nepali.png"
              alt="Nepali Flag"
              width={20}
              height={20}
              className="mr-2"
            />
            {t("np")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default LanguageSwitcher;
