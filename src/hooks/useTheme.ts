import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';
const SYSTEM_THEME_QUERY = '(prefers-color-scheme: dark)';

function readSavedTheme(): Theme | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch {
    return null;
  }
}

/** 保存した設定を優先し、未選択なら端末の配色に合わせる。 */
export function useTheme() {
  const [preference, setPreference] = useState<Theme | null>(readSavedTheme);
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia(SYSTEM_THEME_QUERY).matches,
  );
  const theme: Theme = preference ?? (systemDark ? 'dark' : 'light');

  useEffect(() => {
    const media = window.matchMedia(SYSTEM_THEME_QUERY);
    const update = (event: MediaQueryListEvent) => setSystemDark(event.matches);

    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  function toggleTheme() {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setPreference(nextTheme);

    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // 保存できない環境でも、画面上の切り替えは有効にする。
    }
  }

  return { theme, toggleTheme };
}
