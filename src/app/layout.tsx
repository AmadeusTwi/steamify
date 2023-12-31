import "~/styles/globals.css";

import localFont from "next/font/local";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";

const motiva = localFont({
  src: [
    {
      path: "./fonts/MotivaSansBlack.woff.ttf",
      style: "bold",
      weight: "900",
    },
    {
      path: "./fonts/MotivaSansBold.woff.ttf",
      style: "bold",
      weight: "700",
    },
    {
      path: "./fonts/MotivaSansExtraBold.ttf",
      style: "bold",
      weight: "800",
    },
    {
      path: "./fonts/MotivaSansLight.woff.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "./fonts/MotivaSansMedium.woff.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./fonts/MotivaSansRegular.woff.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/MotivaSansThin.ttf",
      style: "normal",
      weight: "200",
    },
  ],
  variable: "--font-motiva",
});

export const metadata = {
  title: "Steamify - Steam, but prettier",
  description:
    "Steam, but prettier. See how Steam could look like if it was done right.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${motiva.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
