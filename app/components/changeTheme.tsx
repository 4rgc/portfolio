'use client';

import Image from 'next/image';
import { useCallback, useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

interface ChangeThemeButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {}

const ChangeThemeButton: React.FC<ChangeThemeButtonProps> = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);

  const onThemeChangeClick: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(
      (e) => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      },
      [theme, setTheme],
    );
  return (
    <button onClick={onThemeChangeClick}>
      <Image
        src={`change-theme-${theme === 'dark' ? 'd' : 'l'}.svg`}
        alt="change-theme"
        width="18"
        height="18"
      />
    </button>
  );
};

export default ChangeThemeButton;
