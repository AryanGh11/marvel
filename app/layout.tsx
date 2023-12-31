import "./globals.css";
import "@/public/manifest.json";
import type { Metadata } from "next";
import Hydrate from "./components/Hydrate";
import LoadingPage from "./components/LoadingPage";
import Error from "@/app/components/error/Error";
import { getServerSession } from "next-auth/next";
import Message from "./components/message/Message";
import Nav from "./components/Nav";
import GoogleLogin from "./components/GoogleLogin";

export const metadata: Metadata = {
  title: "Marvel App",
  description: "Generated for all Marvel fans!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <Hydrate>
        <GoogleLogin
          user={session?.user}
          expires={session?.expires as string}
        />

        {children}
        <Nav />

        <Error />
        <Message />
      </Hydrate>
    </html>
  );
}
