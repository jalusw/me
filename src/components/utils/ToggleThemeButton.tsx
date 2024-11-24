import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function ToggleThemeButton() {
  const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">(
    "theme-light",
  );

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  const toggleTheme = () => {
    if (theme == "dark") {
      setThemeState("theme-light");
    } else if (theme == "theme-light") {
      setThemeState("dark");
    }
  };

  return (
    <Button variant="ghost" onClick={() => toggleTheme()} title="Toggle Theme">
      {theme == "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
