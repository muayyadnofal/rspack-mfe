import {DEFAULT_VALUES, THEME_COOKIE_NAME } from "../constants/cookies.const";
import {THEMES_VALUES} from "../constants/theme.const";

export type TTheme = (typeof THEMES_VALUES)[number];

export function getTheme(): TTheme {
  function getCookieValue(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }

  const theme = getCookieValue(THEME_COOKIE_NAME);

  if (!theme || !THEMES_VALUES.includes(theme as TTheme)) {
    return DEFAULT_VALUES.theme as TTheme;
  }

  return theme as TTheme;
}
