import Image from 'next/image';
import './globals.css';
import MenuItem from './components/menuItem';
import { ThemeProvider, TailwindBody } from './contexts/theme';
import ChangeThemeButton from './components/changeTheme';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Andrii Bohdan',
  description: "Andrii Bohdan's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <SpeedInsights />
      <ThemeProvider>
        <TailwindBody className="flex overflow-x-hidden justify-center pb-6">
          <Image
            className="hidden flex-1 my-auto dark:hidden laptop:block min-w-[378px] h-[762px]"
            src="left-shapes-l.svg"
            alt="shapes left"
            width="378"
            height="762"
          />
          <Image
            className="hidden flex-1 my-auto min-w-[378px] h-[762px] dark:laptop:block"
            src="left-shapes-d.svg"
            alt="shapes left"
            width="378"
            height="762"
          />
          <main className="container flex flex-col py-7 px-4 space-y-2 laptop:min-w-laptop tablet:min-w-tablet tablet:flex-row tablet:space-y-0 tablet:space-x-2">
            <nav className="flex flex-col px-7 space-y-3">
              <div>
                <Image
                  src="logo-md-l.svg"
                  alt="logo"
                  width="0"
                  height="0"
                  className="w-11 h-11 dark:hidden tablet:w-16 tablet:h-16"
                />
                <Image
                  src="logo-md-d.svg"
                  alt="logo"
                  width="0"
                  height="0"
                  className="hidden w-11 h-11 dark:block tablet:w-16 tablet:h-16"
                />
              </div>
              <div className="flex items-center space-x-4 tablet:flex-col tablet:items-start tablet:space-x-0 tablet:space-y-2">
                <MenuItem text="home" href="/" />
                <MenuItem text="experience" href="/experience" />
                <MenuItem text="projects" href="/projects" />
                <MenuItem text="blog" href="/contact" />
                <ChangeThemeButton />
              </div>
            </nav>
            {children}
          </main>
          <Image
            className="hidden flex-1 my-auto dark:hidden laptop:block min-w-[378px] h-[762px]"
            src="right-shapes-l.svg"
            alt="shapes right"
            width="378"
            height="762"
          />
          <Image
            className="hidden flex-1 my-auto min-w-[378px] h-[762px] dark:laptop:block"
            src="right-shapes-d.svg"
            alt="shapes right"
            width="378"
            height="762"
          />
        </TailwindBody>
      </ThemeProvider>
    </html>
  );
}
