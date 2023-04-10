"use client";

import { Fira_Mono, Poppins } from "next/font/google";
import {
  ComponentPropsWithoutRef,
  Context,
  createContext,
  useContext,
} from "react";

export const ThemeContext = createContext<"dark" | "light">("dark");

type ThemeProviderProps = React.ProviderProps<typeof ThemeContext>;
type ThemeProviderPropsPartial = Partial<Pick<ThemeProviderProps, "value">> &
  Omit<ThemeProviderProps, "value">;

export const ThemeProvider: React.FC<ThemeProviderPropsPartial> = ({
  children,
}) => {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
};

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

export const TailwindBody: React.FC<ComponentPropsWithoutRef<"div">> = ({
  className,
  children,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <body
      className={`${theme === "dark" ? theme : ""} ${firaMono.variable} ${
        poppins.variable
      }`}
    >
      <div
        className={`h-full bg-lightBg dark:bg-darkBg font-sans text-lightText dark:text-darkText ${className}`}
      >
        {children}
      </div>
    </body>
  );
};
