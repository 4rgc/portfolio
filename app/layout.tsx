import Image from "next/image";
import "./globals.css";
import { Poppins, Fira_Mono } from "next/font/google";
import MenuItem from "./components/menuItem";

const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-firaMono",
  display: "swap",
});
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Andrii Bohdan",
  description: "Andrii Bohdan's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${firaMono.variable} page bg-lightBg dark:bg-darkBg font-sans text-lightText dark:text-darkText pb-6`}
      >
        <main className="container flex flex-col tablet:flex-row px-4">
          <Image
            className="flex-1 hidden laptop:block"
            src="left-shapes-l.svg"
            alt="shapes left"
            width="378"
            height="762"
          />
          <nav className="flex py-7 px-2 space-y-3 flex-col">
            <Image
              src="logo-md-l.svg"
              alt="logo"
              width="0"
              height="0"
              className="w-11 h-11 tablet:w-16 tablet:h-16"
            />
            <div className="flex tablet:flex-col space-x-4 items-center">
              <MenuItem text="home" />
              <MenuItem text="experience" href="/experience" />
              <MenuItem text="projects" href="/projects" />
              <MenuItem text="blog" href="/contact" />
            </div>
          </nav>
          {children}
          <Image
            className="flex-1 hidden laptop:block"
            src="right-shapes-l.svg"
            alt="shapes right"
            height="378"
            width="762"
          />
        </main>
      </body>
    </html>
  );
}
