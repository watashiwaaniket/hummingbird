import type { Metadata } from "next";
import { Bitcount_Single, IBM_Plex_Mono} from "next/font/google";
import "./globals.css";

const bitcountSingle = Bitcount_Single({
  variable: "--font-bitcount-single",
  subsets: ["latin"]
})

const ibmPlex = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Hummingbird - maneuvering through ai research",
  description: "Hummingbird is an org which fosters the best research centric LLM model on this planet, built for a cause of bringing forth the AGI and the era of ultimate intelligence.",
  icons: {
    icon: "/hummingbird.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bitcountSingle.variable} ${ibmPlex.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
