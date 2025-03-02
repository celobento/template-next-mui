"use client";

import { useThemeContext } from "@/contexts/ThemeContext";
import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function DarkModeToggle() {
  const { toggleTheme, darkMode } = useThemeContext();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {darkMode ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
}
