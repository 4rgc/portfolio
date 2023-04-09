import Image from "next/image";
import { Poppins, Fira_Mono } from "next/font/google";

const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="page bg-lightBg dark:bg-darkBg">
      <main className="container flex flex-row">
        <Image
          className="flex-1 hidden laptop:block"
          src="left-shapes-l.svg"
          alt="shapes left"
          width="378"
          height="762"
        />
        <nav className="flex py-6 px-5 space-y-3 flex-col">
          <Image
            src="logo-md-l.svg"
            alt="logo"
            width="0"
            height="0"
            className="w-11 h-11 tablet:w-16 tablet:h-16"
          />
          <div className="flex tablet:flex-col laptop:flex-col space-x-4 items-center">
            <span
              className={`${firaMono.className} text-lightSecondary dark:text-darkSecondary underline`}
            >
              home
            </span>
            <span
              className={`${firaMono.className} text-lightSecondary dark:text-darkSecondary`}
            >
              experience
            </span>
            <span
              className={`${firaMono.className} text-lightSecondary dark:text-darkSecondary`}
            >
              projects
            </span>
            <span
              className={`${firaMono.className} text-lightSecondary dark:text-darkSecondary`}
            >
              contact
            </span>
          </div>
        </nav>
        <Image
          className="flex-1 hidden laptop:block"
          src="right-shapes-l.svg"
          alt="shapes right"
          height="378"
          width="762"
        />
      </main>
    </div>
  );
}
