import "./globals.css";
import type { Metadata } from "next";
import Hydrate from "./components/Hydrate";

export const metadata: Metadata = {
  title: "Marvel App",
  description: "Generated for all Marvel fans!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Hydrate>
        {children}
      </Hydrate>
    </html>
  );
}
