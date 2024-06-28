import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "./AppLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comb.",
  description: "Talwind components library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="root">
      <head>
        <meta name="google-site-verification" content="FbOZIJDxKuyR_owtbJoI3RnsV6ya1MyNg0oJEidIoHU" />
      </head>
      <AppLayout className={inter.className}>
        {children}
      </AppLayout>
    </html>
  );
}
