import "./globals.css";
import clsx from "clsx";
import local from "next/font/local";

export const metadata = {
  title: "Home",
  description: "desc",
};

// inculde the fonts in app by @next/font
const black = local({
  src: "./fonts/Montserrat-Arabic-Black.ttf",
  variable: "--font-black",
});

const bold = local({
  src: "./fonts/Montserrat-Arabic-Bold.ttf",
  variable: "--font-bold",
});

const regular = local({
  src: "./fonts/Montserrat-Arabic-Regular.ttf",
  variable: "--font-regular",
});

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={clsx(black.variable, bold.variable, regular.variable)}>
        {children}
      </body>
    </html>
  );
}
