import { ExitModule } from "@/components/modals/exitModal";
import { HeartsModal } from "@/components/modals/heartsModal";
import { PracticeModal } from "@/components/modals/practiceModal";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doulingo",
  description: "Learn, practice and master new languages with Doulongo",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            rel="icon"
            href="/logo.avif"
          />
        </head>
        <body className={font.className}>
          <ExitModule />
          <HeartsModal />
          <PracticeModal />
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
