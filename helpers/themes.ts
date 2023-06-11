import { ThemeDefinition } from "vuetify";

// テーマ名
export const MAIN_THEME = "mainTheme";
// Light mode theme
export const mainTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#D3DCEA",
    surface: "#D3DCEA",
    primary: "#1C3251",
    secondary: "#D3DCEA",
    error: "#B72425",
    info: "#3093CC",
    success: "#118C5C",
    warning: "#f59e0b",
  },
};

// Dark モードのテーマ名
export const MAIN_DARK_THEME = "mainDarkTheme";
// Dark mode theme
export const mainDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#07101E",
    surface: "#07101E",
    primary: "#D3DCEA",
    secondary: "#07101E",
    error: "#B72425",
    info: "#3093CC",
    success: "#118C5C",
    warning: "#f59e0b",
  },
};
