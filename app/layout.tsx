import "./globals.css";
import type { Metadata } from "next";
import Hydrate from "./components/Hydrate";
import LoadingPage from "./components/LoadingPage";
import Error from "@/app/components/error/Error";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Message from "./components/message/Message";
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
