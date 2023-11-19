import "./globals.css";
import { Inter } from "next/font/google";
import ReduxProvider from "@/store/ReduxProvider";
import Theme from "./Theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Medifine</title>
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <Theme>{children}</Theme>
        </ReduxProvider>
      </body>
    </html>
  );
}
