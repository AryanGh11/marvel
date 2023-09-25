import "./globals.css";
import "@/public/manifest.json";
import type { Metadata } from "next";
import Hydrate from "./components/Hydrate";
import LoadingPage from "./components/LoadingPage";
import Error from "@/app/components/error/Error";
import { getServerSession } from "next-auth/next";
import Message from "./components/message/Message";
import GoogleLogin from "./components/GoogleLogin";
import NextHead from "next/head";

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
      <NextHead>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description!} />
        <link rel="manifest" href="/manifest.json" />
      </NextHead>
      <Hydrate>
        <LoadingPage timer={2} />
        {children}
        <Error />
        <Message />
        <GoogleLogin
          user={session?.user}
          expires={session?.expires as string}
        />
      </Hydrate>
    </html>
  );
}
