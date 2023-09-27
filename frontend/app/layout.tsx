import "./globals.css";
import { Inter } from "next/font/google";
import { getSiteData, getSiteMetaData } from "./lib/sanityQueries";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const { title, description } = await getSiteMetaData();
  return {
    title,
    description,
  };
}

async function getSiteInfo() {
  const { title, description, logo } = await getSiteData();
  return {
    title,
    description,
    logo,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteInfo = await getSiteInfo();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-start flex-grow min-h-screen">
          <Header title={siteInfo.title} logo={siteInfo.logo} />
          {children}
        </div>
      </body>
    </html>
  );
}
